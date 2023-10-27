# Best Fit Decreasing Algorithm

This code implements the Best Fit Decreasing algorithm to efficiently allocate pieces to bins. It is designed to work with Google Sheets.

## Usage

To use this algorithm, follow these steps:

1. **Set up your input data in a Google Sheets document:**
   - The input data should be in the "Input" sheet.

2. **Organize your data in the "Input" sheet with three columns:**
   - Column A: Piece lengths.
   - Column B: Quantities of each piece.
   - Cell C2: Stock material length.

3. **Open the Google Sheets document and run the `bestFitDecreasing` function:**
   - It will process the data and allocate pieces to bins efficiently.

4. **View the Results in the "Output" sheet:**
   - The "Output" sheet will contain the number of stock materials needed and the cutting patterns for each bin.

5. **Important: Enable Google Apps Script API and Permissions:**
   - Before running the script, make sure to enable the Google Apps Script API in your Google Sheets document and grant any necessary permissions for the script to run successfully.

6. **Run the `bestFitDecreasing` Function:**
   - To run the `bestFitDecreasing` function, make sure it's the main function that should execute when you run the script.
   - To set the main function, click the play button (▶️) located in the toolbar at the top of the Google Apps Script editor. This will run the `bestFitDecreasing` function, which will process the data in the "Input" sheet and allocate pieces to bins efficiently.

The `bestFitDecreasing` function is responsible for processing your input data and executing the Best Fit Decreasing algorithm to efficiently allocate pieces to bins. By following these steps, you can automate this process within your Google Sheets document.


## Functions

### `bestFitDecreasing()`

- Fetches data from the "Input" sheet and processes it using the Best Fit Decreasing algorithm.
- Writes the results to the "Output" sheet.

### `fetchData()`

- Fetches data from the "Input" sheet.
- Returns an object containing pieces, quantities, and stock_length.

### `processCuts(pieces, quantities, stock_length)`

- Processes the cuts using the Best Fit Decreasing algorithm.
- Parameters:
  - `pieces`: An array of piece lengths.
  - `quantities`: An array of quantities for each piece.
  - `stock_length`: The length of the stock material.
- Returns an object containing material_needed_count and bins.

### `writeData(material_needed_count, bins)`

- Writes the results to the "Output" sheet.
- Parameters:
  - `material_needed_count`: The count of stock materials needed.
  - `bins`: An array of bins with their cutting patterns.

## To-Do

To further develop this code, consider the following areas for improvement to adhere to best practices and optimize performance:

1. **Error Handling:** Implement error handling to gracefully handle unexpected errors or exceptions that may occur during execution.

2. **Comments and Documentation:** Enhance code comments and documentation to make the code more understandable and maintainable.

3. **Refactoring:** Consider refactoring the code to break down complex functions into smaller, more focused functions, improving code modularity.

4. **Variable Names:** Ensure that variable names are descriptive and follow a consistent naming convention for better code readability.

5. **Input Validation:** Implement input validation to check for valid and expected data types, ranges, or constraints.

6. **Testing:** Develop test cases and unit tests to verify the correctness of the algorithm and ensure it handles various input scenarios effectively.

7. **Optimization:** Look for opportunities to optimize the algorithm, potentially reducing time complexity and improving runtime performance.

8. **Code Security:** Assess the code for any security vulnerabilities, especially if it handles sensitive data.

9. **Logging:** Implement a logging mechanism to record important events or data during execution for debugging and monitoring purposes.

10. **User-Friendly Messages:** Provide informative and user-friendly messages for better user experience and error reporting.

11. **Configuration Options:** Consider adding configuration options that allow users to customize algorithm parameters or behavior.

12. **Compatibility:** Ensure that the code remains compatible with the latest versions of Google Apps Script and Google Sheets.

13. **Compliance:** If the code processes personal or sensitive data, verify that it complies with relevant data protection regulations and security standards.

14. **Code Review:** Conduct a code review to identify potential issues and gather feedback from peers or experts.

15. **Documentation Update:** Keep the README and any associated documentation up to date with changes and improvements to the code.

## License

This code is provided under the [MIT License](LICENSE).

You are free to use, modify, and distribute this code for your projects, whether they are personal, open source, or commercial. The MIT License allows you to do so while providing a degree of legal protection.

Please review the [LICENSE](LICENSE) file for the full text of the MIT License and ensure compliance with its terms.


