const gameInfo = document.getElementById("gameInfo");
const reset = document.getElementById("resetGame");
const buttons = document.getElementsByTagName("button");
const choices = ["BIT", "BYTE", "BUG"];

const updateGameInfo = (text) => {
  const div = document.createElement("div");
  div.innerHTML = text;
  gameInfo.appendChild(div);
};

const resetGameInfo = () => {
  gameInfo.innerHTML = "";
  for (let button of buttons) button.style.visibility = "visible";
  reset.style.visibility = "hidden";
};

const hideGameButtons = () => {};

const makeChoice = (choice, user = "Player") => {
  let result = choice.id == undefined ? choice : choice.id.toUpperCase();
  updateGameInfo(`${user} chose ${result}`);
  return result;
};

const decideWinner = (playerChoice, compChoice) => {
  let playerNum = choices.indexOf(playerChoice);
  let compNum = choices.indexOf(compChoice);
  let text = null;

  if (playerChoice == compChoice) text = "It's a TIE!";
  else if (
    (playerChoice == "BIT" && compChoice == "BYTE") ||
    (playerChoice == "BYTE" && compChoice == "BUG") ||
    (playerChoice == "BUG" && compChoice == "BIT")
  )
    text = "PLAYER WINS!";
  else text = "COMPUTER WINS!";

  updateGameInfo(text);
  for (let button of buttons) button.style.visibility = "hidden";
  reset.style.visibility = "visible";
};

const runGame = (choice) => {
  let playerChoice = makeChoice(choice);
  let option = choices[Math.floor(Math.random() * 3)];
  let compChoice = makeChoice(option, "Computer");
  decideWinner(playerChoice, compChoice);
};

resetGameInfo();
