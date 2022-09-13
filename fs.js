const fs = require ("fs");
const path = require("path");

const fileName = path.join (__dirname,'sample.json');
//console.log(filename);
fs.readFile(fileName, (err, contenue) => {
    console.log(String(contenue))
})

