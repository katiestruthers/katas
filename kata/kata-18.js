const squareCode = function(message) {
  const noSpaceMessage = message.replaceAll(' ', '');
  const messageLength = noSpaceMessage.length;
  const columns = Math.ceil(Math.sqrt(messageLength));
  const rows = Math.ceil(messageLength / columns);
  const square = Array(rows).fill('');
  const remainder = messageLength % columns;
  let codedMessage = '';
  let squareCount = 0;
  let jLength, rowLength;

  // Convert message to square
  for (let i = 1; i < messageLength + 1; i++) {
    square[squareCount] += noSpaceMessage[i - 1];

    if (i % columns === 0) {
      squareCount++;
    }
  }
  console.log(square);

  // Convert square to coded message
  if (remainder === 0) {
    rowLength = columns;
  } else {
    rowLength = columns - (columns - remainder);
  }

  for (let i = 0; i < columns; i++) {
    if (i < rowLength) {
      jLength = rows;
    } else {
      jLength = rows - 1;
    }

    for (let j = 0; j < jLength; j++) {
      codedMessage += square[j][i];
    }

    codedMessage += ' ';
  }

  return codedMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));