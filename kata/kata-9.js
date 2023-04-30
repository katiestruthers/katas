const camelCase = function(input) {
  let string = "";
  let button = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      button = true;
    }
    else if (button === true) {
      string += input[i].toUpperCase();
      button = false;
    }
    else {
      string += input[i];
    }
  }

  return string;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));