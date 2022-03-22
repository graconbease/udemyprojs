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
  console.log("Input is sound");
}

sayHello();