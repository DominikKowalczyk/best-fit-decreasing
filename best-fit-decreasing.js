/**
 * Perform the Best Fit Decreasing algorithm to efficiently allocate pieces to bins.
 */
function bestFitDecreasing() {
  // Fetch data from the "Input" sheet and process it
  var { pieces, quantities, stock_length } = fetchData();
  var { material_needed_count, bins } = processCuts(pieces, quantities, stock_length);
  
  // Write the results to the "Output" sheet
  writeData(material_needed_count, bins);
}

/**
 * Fetch data from the "Input" sheet.
 * @returns {object} An object containing pieces, quantities, and stock_length.
 */
function fetchData() {
  // Get the "Input" sheet
  var inputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Input");
  
  // Read data from the sheet
  var data = inputSheet.getRange("A2:C").getValues();
  
  // Extract and filter pieces, quantities, and stock_length
  var pieces = data.map((column) => column[0]).filter((length) => length > 0);
  var quantities = data.map((column) => column[1]);
  var stock_length = inputSheet.getRange("C2").getValue();

  return { pieces, quantities, stock_length };
}

/**
 * Process the cuts using the Best Fit Decreasing algorithm.
 * @param {number[]} pieces - An array of piece lengths.
 * @param {number[]} quantities - An array of quantities for each piece.
 * @param {number} stock_length - The length of the stock material.
 * @returns {object} An object containing material_needed_count and bins.
 */
function processCuts(pieces, quantities, stock_length) {
  // Initialize variables for the algorithm
  var cuts = [];
  var bins = [];
  
  // Create an array of pieces taking quantities into account
  for (var i = 0; i < pieces.length; i++) {
    for (var j = 0; j < quantities[i]; j++) {
      cuts.push(pieces[i]);
    }
  }
  
  // Sort the cuts in descending order
  cuts.sort(function (a, b) {
    return b - a;
  });
  
  // Initialize variables for the algorithm
  var material_needed_count = 0;
  var remaining_material = stock_length;
  var cutting_pattern = [];

  // Main loop for the Best Fit Decreasing algorithm
  while (cuts.length > 0) {
    var remaining_material = stock_length;

    for (var i = 0; i < cuts.length; i++) {
      var piece = cuts[i];

      if (cuts[cuts.length - 1] > remaining_material) {
        break;
      } else if (piece <= remaining_material) {
        cutting_pattern.push(piece);
        remaining_material -= piece;
        cuts.splice(i, 1);
        i--;
      }
    }

    material_needed_count++;
    bins.push(cutting_pattern);
    cutting_pattern = [];
  }

  return { material_needed_count, bins };
}

/**
 * Write the results to the "Output" sheet.
 * @param {number} material_needed_count - The count of stock materials needed.
 * @param {number[][]} bins - An array of bins with their cutting patterns.
 */
function writeData(material_needed_count, bins) {
  // Get the "Output" sheet
  var outputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Output");

  // Clear the existing data in the output sheet
  var numRowsToClear = outputSheet.getLastRow() - 1;
  if (numRowsToClear > 0) {
    outputSheet.getRange(2, 2, numRowsToClear, outputSheet.getLastColumn()).clearContent();
  }

  // Write the material_needed_count to the output sheet
  outputSheet.getRange("A2").setValue(material_needed_count);

  // Output the bins to the sheet
  for (var i = 0; i < bins.length; i++) {
    var bin = bins[i];
    var binNumber = i + 1;
    var row = [binNumber].concat(bin); // Combine bin number and bin contents
    
    // Write the row to the sheet, starting from B2 and moving right
    outputSheet.getRange(i + 2, 2, 1, row.length).setValues([row]);
  }
}
