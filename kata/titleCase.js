const titleCase = function(text) {
  let capitalized = '';
  let previousIsSpace = true;

  for (const letter of text.toLowerCase()) {
    if (previousIsSpace) {
      capitalized += letter.toUpperCase();
      previousIsSpace = false;
      continue;
    }

    if (letter === ' ') {
      previousIsSpace = true;
    }
    
    capitalized += letter;
  }

  return capitalized;
};

module.exports = titleCase;