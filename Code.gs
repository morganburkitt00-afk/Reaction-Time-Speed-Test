// Code.gs - Main Google Apps Script file

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Reaction Time Test')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function saveResults(results) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Results');
  
  // Create Results sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet('Results');
    sheet.appendRow(['Timestamp', 'Attempt', 'Reaction Time (ms)', 'Average (ms)']);
  }
  
  var timestamp = new Date();
  results.times.forEach(function(time, index) {
    sheet.appendRow([timestamp, index + 1, time, results.average]);
  });
  
  return 'Results saved successfully!';
}<!-- Index.html - The web interface -->
