const fs = require('fs').promises
const path = require('path')

async function readFile() {
    const needFile = await fs.readdir(path.join(__dirname, 'topics'));
    // console.log(needFile); 
    for (let i= 0; i< needFile.length; i++) {
        const dataFiles = await fs.readFile(path.join(__dirname, `topics/${needFile[i]}`), `utf-8`);
        const arrayData = dataFiles.split('\n');
        console.log(arrayData);
    }
    

}
readFile()