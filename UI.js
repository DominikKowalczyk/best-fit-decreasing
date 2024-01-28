function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Custom Menu')
      .addItem('Solve', 'bestFitDecreasing')
      .addItem('Print', 'printOutput')
      .addToUi();
}
