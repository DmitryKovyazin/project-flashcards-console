const fs = require("fs").promises;
const path = require("path");
const readlineSync = require("readline-sync");

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

  needFile,
    (index = readlineSync.keyInSelect(
      needFile,
      "Выберете пожалуйста тему вопросов"
    ));
  console.log("Вы выбрали тему " + needFile[index]);

  return result[index];
}

async function readFileQuestion(arrAll) {
  const allThemeQuestion = [];
  // const readQuestion = await readFile();
  for (let i = 0; i < arrAll.length; i += 2) {
    allThemeQuestion.push(arrAll[i]);
  }
  return allThemeQuestion;
}

async function readFileAns(arrAll) {
  const allThemeAns = [];
  // const readQuestion = await readFile();
  for (let i = 1; i < arrAll.length; i += 2) {
    allThemeAns.push(arrAll[i]);
  }
  return allThemeAns;
}

async function makeConsoleQuestion() {
  const arrAll = await readFile();
  const arrQuestions = await readFileQuestion(arrAll);
  const arrAns = await readFileAns(arrAll);
  let score = 0;
  for (let i = 0; i < arrQuestions.length; i++) {
    console.log(arrQuestions[i]);
    let answer = readlineSync.question();
    if (answer.toUpperCase()== arrAns[i].toUpperCase()) {
      score += 100;
        console.log(`Да, это ${arrAns[i]} 💫 +100 , очки-паточки:${score}`);
    } else {console.log(`Ответ неверен 🐒, верный ответ: ${arrAns[i]} `)}
  }
  if (score > 400) {
    console.log(`🤟 Красавчики : ${score}`);
  } else console.log(`Попробуй ещё раз... 🙏`);
}
makeConsoleQuestion()