var fs = require("fs");

// READ CSV INTO STRING
var data = fs.readFileSync("csv_data.csv").toLocaleString();

// STRING TO ARRAY
var rows = data.split("\n");

// SPLIT ROWS
let lines = "\n";
rows.forEach((row, id) => {
  lines += `/metadata/${id + 1} /metadata/metadata${id + 1}.json  200\n`;
});

fs.writeFile(`new_redirects`, lines, function (err) {
  if (err) throw err;
});
