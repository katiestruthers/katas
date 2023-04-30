const makeCase = function(input, style) {
  let case1, case2;
  let string = input;
  let stringTemp = '';
  let button, spacer;

  // Check for multiplicity
  if (Array.isArray(style)) {
    case1 = style[0];
    case2 = style[1];
  }
  else {
    case1 = style;
  }

  // 1st precedence: camel, pascal, snake, kebab, & title
  if (case1 === 'camel' || case2 === 'camel' || case1 === 'pascal' || case2 === 'pascal' ||
      case1 === 'snake' || case2 === 'snake' || case1 === 'kebab' || case2 === 'kebab' ||
      case1 === 'title' || case2 === 'title') {

    // Reset string -- now will work for 2nd, whether 1st is called or not
    string = '';

    // Set differences
    if (case1 === 'camel' || case2 === 'camel') {
      button = false;
      spacer = '';
    }
    else if (case1 === 'pascal' || case2 === 'pascal') {
      button = true;
      spacer = '';
    }
    else if (case1 === 'snake' || case2 === 'snake') {
      spacer = '_';
    }
    else if (case1 === 'kebab' || case2 === 'kebab') {
      spacer = '-';
    }
    else {
      button = true;
      spacer = ' ';
    }

    for (let i = 0; i < input.length; i++) {
      // Check for a space
      if (input[i] === ' ') {
        button = true;
        string += spacer;
      }
      // If previous was a space, then uppercase on select styles
      else if (button === true && !(case1 === 'snake' || case2 === 'snake' || 
               case1 === 'kebab' || case2 === 'kebab')) {
        string += input[i].toUpperCase();
        button = false;
      }
      // If previous was not a space, add the current character as is
      else {
        string += input[i];
      }
    }
  }

  // 2nd precedence: vowel, consonant
  if (case1 === 'vowel' || case2 === 'vowel' || case1 === 'consonant' || case2 === 'consonant') {
    
    // Set differences
    if (case1 === 'vowel' || case2 === 'vowel') {
      button = true;
    }
    else {
      button = false;
    }

    // Check each letter to see if a vowel or consonant
    for (let i = 0; i < string.length; i++) {
      if ((string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') === button) {
        stringTemp += string[i].toUpperCase();
      }
      else {
        stringTemp += string[i];
      }
    }

    // Update the return string with the latest work
    string = stringTemp;
  }

  // 3rd precedence: upper, lower
  if (case1 === 'upper' || case2 === 'upper') {
    string = string.toUpperCase();
  }

  if (case1 === 'lower' || case2 === 'lower') {
    string = string.toLowerCase();
  }

  return string;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));