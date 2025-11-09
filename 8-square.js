const firstArgument = process.argv[2];

// 2. Attempt to convert the argument to an integer.
const numberValue = Number(firstArgument);

// 3. Check for existence or valid conversion.
// This handles missing arguments (undefined) and non-numeric strings (NaN).
if (firstArgument === undefined || isNaN(numberValue)) {
    console.log("Missing size");
} else {
    // 4. Use the integer part for the size. We must ensure it's a positive whole number.
    const size = parseInt(firstArgument);

    // If size is 0 or negative, we treat it as missing/invalid size (or just don't print anything).
    // Assuming the intent is for size >= 1 to print a square.

    if (size > 0) {
        // We need a nested loop structure:
        // The outer loop handles the rows (vertical dimension).
        for (let i = 0; i < size; i++) {
            // The inner loop builds the string for a single row (horizontal dimension).
            let row = '';
            for (let j = 0; j < size; j++) {
                row += 'X';
            }
            // Print the completed row.
            console.log(row);
        }
    }
}