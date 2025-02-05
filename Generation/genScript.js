import { Characterss, Numberss, Specials, charQuan, genQuan, tempSelected, joinType, Uppers } from '/YC-PG/Generation/GenPage.html';

let GIGI = "GIGI-CodeAce";
let ty = "Thanks-ForUsingYC&PG";
let ArrayUI = [];
const nrScUI = document.getElementById("GIGI");
const codeBoard = document.querySelector(".code-board");
let int = 0;
let charactersBN = false;
let numbersBN = true;
let specialsBN = false;
let capsBN = false
let count = 0;

switch (Numberss) {
  case 1:
    numbersBN = true;
    break;
  default:
    numbersBN = false
    break;
}
switch (Characterss) {
  case 1:
    charactersBN = true;
    break;
    default:
    charactersBN = false
    break;
}
switch (Specials) {
  case 1:
    specialsBN = true;
    break;
    default:
    specialsBN = false
    break;
}
switch (Uppers) {
  case 1:
    capsBN = true
    break;
    default:
    capsBN = false
    break;
}

const alphabetArray = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
];

let alphabet

if (capsBN) {
  alphabet = alphabetArray.map(letter => letter.toUpperCase());
} else {
  alphabet = alphabetArray.map(letter => letter.toLowerCase());
}

const specialCharacters = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\',
  ';', ':', '"', '\'', ',', '.', '/', '?'
];

function getRandomItemFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


document.body.addEventListener("click", event => {
  if (event.target.classList.contains(`copy-btn`)) {
    event.target.textContent = "soon.";
    setTimeout(() => {
      event.target.textContent = "copy";
    }, 696);
  }
});


function render() {
  let availableNums = [0, 1, 2];
  function cut(number){
    const indexToRemove = availableNums.indexOf(number);
    if (indexToRemove !== -1) {
      availableNums.splice(indexToRemove, 1);
    }
  }
  if (!specialsBN) {
    cut(2)
  }if (!charactersBN) {
    cut(1)
  }if (!numbersBN) {
    cut(0)
  }

  if (count < genQuan) {
    count++;
    let liContent = "";
    let temp = 0;

    for (let i = 0; i < charQuan; i++) {
      let randIndex = Math.floor(Math.random() * availableNums.length);
      let randomNum = availableNums[randIndex];

if (randomNum === 0) {
        liContent += Math.floor(Math.random() * 10);
      } else if (randomNum === 1) {
        liContent += getRandomItemFromArray(alphabet);
      } else {
        liContent += getRandomItemFromArray(specialCharacters);
      }

      if (tempSelected == 1) {
        temp++;
        if (temp % 3 === 0 && temp > 0) {
          liContent += joinType
        }
      }

      if (tempSelected == 2) {
        temp++;
          if (temp % 4 === 0 && temp > 0) {
            liContent += joinType
      
         }}

    }

    let listItems = `<button class = "copy-btn" >copy</button><li id="li#${count}">${liContent}</li>`;
      codeBoard.innerHTML += listItems;
  }
}

setInterval(render, 25);

function background() {
  int++;
  ArrayUI.push(GIGI);
  ArrayUI.push(ty);
  nrScUI.textContent = ArrayUI.join(" // ");

  if (int < 250) {
    setTimeout(background, 2);
  }
}

background();