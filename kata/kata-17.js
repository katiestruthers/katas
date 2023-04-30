const urlDecode = function(text) {
  let tempProp = '';
  let tempVal = '';
  const decoded = {};

  // false = tempProp, true = tempVal
  let button = false;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '=') {
      button = true;
    }
    else if (text[i] === '&') {
      decoded[tempProp] = tempVal;
      tempProp = '';
      tempVal = '';
      button = false;
    }
    else if (button === true) {
      if (text[i] === '%' && text[i + 1] === '2' && text[i + 2] === '0') {
        tempVal += ' ';
        i += 2;
      }
      else {
        tempVal += text[i];
      }
    }
    else {
      tempProp += text[i];
    }
  }

  decoded[tempProp] = tempVal;

  return decoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);