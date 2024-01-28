function printOutput() {
    var outputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Output");
    
    // Define the range to print
    var range = outputSheet.getDataRange();
  
    // Print the range
    range.print();
  }
  