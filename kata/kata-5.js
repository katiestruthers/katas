const urlEncode = function(text) {
  let string = "";
  const test = text.trim();

  for (let i = 0; i < test.length; i++) {
    if (test[i] === ' ') {
      string += '%20';
    } else {
      string += test[i];
    }
  }

  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));