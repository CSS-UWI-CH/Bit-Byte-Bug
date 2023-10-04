const gameInfo = document.getElementById("gameInfo");
const reset = document.getElementById("resetGame");
const choices = ["BIT", "BYTE", "BUG"];

const updateGameInfo = (text) => {
  const div = document.createElement("div");
  div.innerHTML = text;
  gameInfo.appendChild(div);
};

const resetGameInfo = () => {
  gameInfo.innerHTML = "";
  reset.style.visibility = "hidden";
};

const makeChoice = (choice, user = "Player") => {
  let result = choice.id == undefined ? choice.toUpperCase() : choice.id;
  updateGameInfo(`${user} chose ${result}`);
  return result;
};

const decideWinner = (playerChoice, compChoice) => {
  let playerNum = choices.indexOf(playerChoice);
  let compNum = choices.indexOf(compChoice);
  let text = null;

  if (playerNum == compNum) text = "It's a TIE!";
  else if (
    (playerNum == 0 && compNum == 1) ||
    (playerNum == 1 && compNum == 2) ||
    (playerNum == 2 && compNum == 0)
  )
    text = "PLAYER WINS!";
  else text = "COMPUTER WINS!";

  updateGameInfo(text);
  reset.style.visibility = "visible";
};

const runGame = (choice) => {
  let playerChoice = makeChoice(choice);
  let option = choices[Math.floor(Math.random() * 3)];
  let compChoice = makeChoice(option, "Computer");
  decideWinner(playerChoice, compChoice);
};

resetGameInfo();
