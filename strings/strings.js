
const sayHelloErrorMsg = "no data in argument error TDD";

function sayHelloTo(person) {
  if (!person) {
    return sayHelloErrorMsg;
  }
  return `Hi, ${person}!`;
}

module.exports = { sayHelloTo, sayHelloErrorMsg };