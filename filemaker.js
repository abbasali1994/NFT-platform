var fs = require("fs");

// READ CSV INTO STRING
var data = fs.readFileSync("csv_data.csv").toLocaleString();

// STRING TO ARRAY
var rows = data.split("\n");

// SPLIT ROWS
rows.forEach((row, id) => {
  const line = row.replace("\r", "").replace(".png", "");

  const url = line.split("?")[0];
  const filename = line.split("?filename=")[1];
  const attributes = filename.split("_");

  const metadata = {
    name: `${id + 1}`,
    description:
      "Welcome to Kami World, a vibrant and enchanted realm! A collection of 1000 Kamis all hand made and created in blender! Explore the Kamiverse and enjoy your stay at the Citadel.",
    image: url,
    attributes: {
      Race: attributes[0],
      Skin: attributes[1],
      Eyes: attributes[2],
      "Enchanted Tool": attributes[3],
      Dye: attributes[4],
      Garments: attributes[5],
      Background: attributes[6],
    },
  };
  let json = JSON.stringify(metadata, null, 2);
  fs.writeFile(`metadata/metadata${id + 1}.json`, json, function (err) {
    if (err) throw err;
  });
});
