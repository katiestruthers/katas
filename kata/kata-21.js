let prompt = require("prompt-sync")();
let random = Math.floor(Math.random() * 101);
let answer = prompt("Guess a number: ");

function numberGuesser (random, answer) {
  let attempts = 1;
  let guessed = false;
  const log = [];

  while (true) {
    for (let i = 0; i < log.length; i++) {
      if (answer === log[i]) {
        guessed = true;
        break;
      }
    }
    log.push(answer);

    if (isNaN(answer)) {
      console.log("Not a number! Try again!");
    }
    else if (guessed === true) {
      guessed = false;
      console.log("Already Guessed!");
    }
    else if (answer > random) {
      attempts++;
      console.log("Too High!");
    }
    else if (answer < random) {
      attempts++;
      console.log("Too Low!");
    }
    else {
      console.log("You got it! It took " + attempts + " attempts!");
      break;
    }

    answer = prompt("Guess a number: ");
  }

}

numberGuesser (random, answer);