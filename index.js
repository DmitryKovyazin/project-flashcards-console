const fs = require("fs").promises;
const path = require("path");

async function readFile() {
  const needFile = await fs.readdir(path.join(__dirname, "topics"));
  const result = [];
  // console.log(needFile);
  for (let i = 0; i < needFile.length; i++) {
    const dataFiles = await fs.readFile(
      path.join(__dirname, `topics/${needFile[i]}`),
      `utf-8`
    );
    const arrayData = dataFiles.split("\n");
    result.push(arrayData);
  }

  return result;
}
readFile();
async function readFileQuestion() {
  const allThemeQuestion = [];
  const readQuestion = await readFile();
  for (let i = 0; i < readQuestion[0].length; i += 2) {
    allThemeQuestion.push(readQuestion[0][i]);
  }
  console.log(allThemeQuestion);
}
readFileQuestion();

async function readFileAns() {
  const allThemeAns = [];
  const readQuestion = await readFile();
  for (let i = 1; i < readQuestion[0].length; i += 2) {
    allThemeAns.push(readQuestion[0][i]);
  }
  console.log(allThemeAns);
}
readFileAns();
