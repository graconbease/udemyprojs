const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//comments mothafucka

function getUserNum() {
  return parseInt(userInput.value);
}

function writeDesc(operator, setNum, newNum) {
  const calcDesc = `${setNum} ${operator} ${newNum}`;
  outputResult(currentResult, calcDesc);
}

function writeEntry (operator, lastNum, entNum, finNum) {
  const logEntry = {
    operation: operator,
    prevNum: lastNum,
    enteredNum: entNum,
    endNum: finNum
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function add() {
  const userNum = getUserNum();
  const setNum = currentResult;
  currentResult += userNum;
  writeDesc("+", setNum, userNum);
  writeEntry("ADD", setNum, userNum, currentResult);
}

function subtract() {
  const userNum = getUserNum();
  const setNum = currentResult;
  currentResult -= userNum;
  writeDesc("-", setNum, userNum);
  writeEntry("SUBTRACT", setNum, userNum, currentResult);
}

function multiply() {
  const userNum = getUserNum();
  const setNum = currentResult;
  currentResult *= userNum;
  writeDesc("*", setNum, userNum);
  writeEntry("MULTIPLY", setNum, userNum, currentResult);
}

function divide() {
  const userNum = getUserNum();
  const setNum = currentResult;
  currentResult /= userNum;
  writeDesc("/", setNum, userNum);
  writeEntry("DIVIDE", setNum, userNum, currentResult);
}

addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);