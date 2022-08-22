// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable (data) {
    // Clear out existing data
    tbody.html("");

    // Loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {

        // Append a row and cells for each value in the row
        let row = tbody.append("tr");


        // Loop through each field in the data row and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            
            let cell = row.append("td");
            cell.text(val);
        });
        // Potential error with the brackets
    });
}