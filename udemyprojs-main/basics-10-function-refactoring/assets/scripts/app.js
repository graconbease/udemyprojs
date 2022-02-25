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

function calcResult (calcType) {
  const userNum = getUserNum();
  const setNum = currentResult;

  if (calcType === "ADD") {
    currentResult += userNum;
    writeDesc("+", setNum, userNum);
    writeEntry("ADD", setNum, userNum, currentResult);
  } else if (calcType === "SUBTRACT") {
    currentResult -= userNum;
    writeDesc("-", setNum, userNum);
    writeEntry("SUBTRACT", setNum, userNum, currentResult);
  } else if (calcType === "MULTIPLY") {
    currentResult *= userNum;
    writeDesc("*", setNum, userNum);
    writeEntry("MULTIPLY", setNum, userNum, currentResult);
  } else if (calcType === "DIVIDE") {
    currentResult /= userNum;
    writeDesc("/", setNum, userNum);
    writeEntry("DIVIDE", setNum, userNum, currentResult);
  } else {
    alert("ERROR");
  }
}

function add() {
  calcResult("ADD");
}

function subtract() {
  calcResult("SUBTRACT");
}

function multiply() {
  calcResult("MULTIPLY");
}

function divide() {
  calcResult("DIVIDE");
}

addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);