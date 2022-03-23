const DEFAULT_NAME = "friend";
const DEFAULT_GREETING = "Hello";

const sayHello = (name = DEFAULT_NAME) => console.log("Hi " + name);

const sayHello1 = (
                  name = DEFAULT_NAME, 
                  greeting = DEFAULT_GREETING
                  ) => {
  console.log(greeting + " " + name);
};

const sayHello2 = () => {
  const name = "friend";
  const greeting = "Hello";
  console.log(greeting + " " + name + "!");
}

const sayHello3 = (name = DEFAULT_NAME) => {
  const helloString = "Hello " + name + "!";
  return helloString;
}

const checkInput = (...strings) => {
  for (const string of strings) {
    if (string === "") {
      return;
    } else {
      break;
    }
  }
  console.log("Input is sound");
}

sayHello();
sayHello1();
sayHello2();
sayHello3();
checkInput("");

sayHello("Max");
sayHello1("Max", "Yo");
sayHello2();
sayHello3("Max");
checkInput("string", "uh string");