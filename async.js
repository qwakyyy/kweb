const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const printFileSize = async filename => {
    try {
        constdata= await readFile(filename);
        console.log(`Datalength: ${data.length} bytes`);
        } catch (err) {
            console.error(err);
        }
};

console.log('String1');
printFileSize('./file.bin');
console.log('String2');