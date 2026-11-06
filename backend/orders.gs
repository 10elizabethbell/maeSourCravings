/**
 * Mae's Sour Cravings — order log and daily delivery caps.
 *
 * Lives inside the Google Sheet (Extensions > Apps Script) and is deployed as a
 * web app. The website asks it which days are full, and logs each order it sends.
 * Setup steps: backend/SETUP.md.
 *
 * Mae can delete a row to free its spot, or add a row by hand (just fill in Day
 * and Type = delivery) for an order that came in some other way.
 */

var CAP_WEEKDAY = 6;    // Monday to Friday
var CAP_WEEKEND = 20;   // Saturday and Sunday
var TZ = 'America/Chicago';
var SHEET = 'Orders';
var HEAD = ['Received', 'Day', 'Weekday', 'Type', 'Name', 'Address', 'Items', 'Total', 'Order ID'];
var COL_DAY = 2, COL_TYPE = 4, COL_ID = 9;

// Run once from the editor (select "setup", press Run) to create the sheet's header.
function setup() { sheet_(); }

function doGet(e) {
  return json_({ ok: true, full: fullDays_() });
}

function doPost(e) {
  var o;
  try { o = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false, error: 'bad request' }); }
  var type = o.type === 'pickup' ? 'pickup' : o.type === 'delivery' ? 'delivery' : '';
  var day = String(o.day || '');
  var id = clip_(o.id, 40);
  if (!type || !id) return json_({ ok: false, error: 'bad request' });
  if (type === 'delivery' && !validDay_(day)) return json_({ ok: false, error: 'bad day' });

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sh = sheet_();
    var rows = data_(sh);
    // the same order sent twice (a double tap, or Send after going back) is logged once
    for (var i = 0; i < rows.length; i++) if (String(rows[i][COL_ID - 1]) === id) return json_({ ok: true, full: fullDays_(rows) });
    if (type === 'delivery' && countFor_(rows, day) >= capFor_(day)) {
      return json_({ ok: false, error: 'full', full: fullDays_(rows) });
    }
    var d = type === 'delivery' ? day : '';
    sh.appendRow([
      new Date(),
      d,
      d ? Utilities.formatDate(dateOf_(d), 'UTC', 'EEE MMM d') : '',
      type,
      safe_(clip_(o.name, 60)),
      safe_(clip_(o.where, 120)),
      safe_(clip_(o.items, 500)),
      safe_(clip_(o.total, 12)),
      id
    ]);
    rows.push([null, d, null, type]);
    return json_({ ok: true, full: fullDays_(rows) });
  } finally {
    lock.releaseLock();
  }
}

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET) || ss.insertSheet(SHEET);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEAD);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEAD.length).setFontWeight('bold');
    sh.getRange('B:B').setNumberFormat('@');   // keep Day as plain text, e.g. 2026-11-08
  }
  return sh;
}

function data_(sh) {
  var n = sh.getLastRow() - 1;
  return n > 0 ? sh.getRange(2, 1, n, HEAD.length).getValues() : [];
}

// Day as yyyy-mm-dd whether it was written by the site (text) or typed by Mae (a date)
function dayKey_(v) {
  if (v instanceof Date) return Utilities.formatDate(v, TZ, 'yyyy-MM-dd');
  return String(v || '').slice(0, 10);
}

function countFor_(rows, day) {
  var n = 0;
  for (var i = 0; i < rows.length; i++) {
    if (dayKey_(rows[i][COL_DAY - 1]) === day && String(rows[i][COL_TYPE - 1]).toLowerCase() !== 'pickup') n++;
  }
  return n;
}

function fullDays_(rows) {
  rows = rows || data_(sheet_());
  var counts = {};
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i][COL_TYPE - 1]).toLowerCase() === 'pickup') continue;
    var k = dayKey_(rows[i][COL_DAY - 1]);
    if (k) counts[k] = (counts[k] || 0) + 1;
  }
  var today = Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd');
  var full = [];
  for (var key in counts) if (key >= today && validDay_(key) && counts[key] >= capFor_(key)) full.push(key);
  return full.sort();
}

function dateOf_(day) {
  var p = day.split('-');
  return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
}

function capFor_(day) {
  var wd = dateOf_(day).getUTCDay();
  return wd === 0 || wd === 6 ? CAP_WEEKEND : CAP_WEEKDAY;
}

// a real date, from today up to 60 days out
function validDay_(day) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return false;
  var d = dateOf_(day);
  if (Utilities.formatDate(d, 'UTC', 'yyyy-MM-dd') !== day) return false;
  var today = dateOf_(Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd'));
  var diff = (d - today) / 864e5;
  return diff >= 0 && diff <= 60;
}

function clip_(v, n) { return String(v == null ? '' : v).slice(0, n); }

// stop a customer's text from being read as a spreadsheet formula
function safe_(s) { return /^[=+\-@]/.test(s) ? "'" + s : s; }

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
