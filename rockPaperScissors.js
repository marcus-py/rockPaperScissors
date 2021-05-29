const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    return "Error.";
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "You tied!";
  }
  if (userChoice === "bomb") {
    console.log("Computer: ...")
    console.log("You: lol get rekt")
    console.log(`
                            *************
                      ******,.';.,.;',';.******
                  ****';.,.;'';.<>:":><.;';.,>;****
                **';.,.;':><>:";.,.;':><>:":.,.;';.**
               *';.,.;';.,,,,.;":><>:":><>:";.,.;';.,*
              *';.,.:":><>:";.,.;|  |';.,>:":><>:';.,,*
              **';.,.;';.,.;;*| :|' |||*';.,..":><>:;**
              ***';.,.;':><;* || ||.| | *';.,.;';.,;***
                **":.,.;'":*  |>|| || |  *.,.;.,.;;**
                 ***;.,.;**   ||  | |||   **:><>:***
                   ******     |  |||| |     ******
                              ||||  | |
                              |   |||||
                              || |  | |
                              | |||||||
                              || |  | |
                              |  | || |
                              ||| | |||
                              |  | || |
                           .*#|| || |||#*.
                         .*#@@| || || |@@#*.
     --------------------------------------------------------------
     KABOOM!
You won!`)
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lost.";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lost.";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost.";
    } else {
      return "You won!";
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice("bomb"); // put your choice here
  const computerChoice = getComputerChoice();
  console.log(`You played: ${userChoice}.`);
  console.log(`The computer plays: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
