module.exports = function (a, b, operand) {
  let result = 0;

  if (operand == "+") {
    result = a + b;
  } else if (operand == "-") {
    result = a - b;
  } else if (operand == "/") {
    result = a / b;
  } else if (operand == "*") {
    result = a * b;
  }

  return result;
}