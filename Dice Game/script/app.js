// /* Let's write my thought my thought process while handling this dice game problem.
// Step1:Let's bring all the buttons to their working
// */

// "use stict";

// /*First let's select the buttons using id's and classes */

// const newGameBtn = document.querySelector(".newGame");
// const rollDiceBtn = document.querySelector(".rollDice");
// const holdScoreBtn = document.querySelector(".holdScore");

// /*let's select scores to current as well as real time to make changes to them accordingly */
// const player1Score = document.querySelector(".score1");
// const player2Score = document.querySelector(".score2");

// // player1Score.textContent = 5;

// // console.log(player1Score);

// /*we also have to keeo track of our current score let's select those also */
// const currentScore1 = document.querySelector(".currentScore1");
// const currentScore2 = document.querySelector(".currentScore2");

// // console.log(currentScore1);
// // currentScore1.textContent = 0;
// const dice = document.getElementById("dice");
// // console.log(dice);
// // dice.src = `/Images/dice5.png`;
// // we also need to access the palyers section which handles the active player part

// const player1El = document.querySelector("player1");
// const player2El = document.querySelector("player2");

// /*So when page is loaded or new hame is clicked we nedd to rest all the things back to thier original state */

// /*we need some starting variables */
// let scores, currentScore, activePlayer, playing;

// // Starting conditions which load as soon as the page loads
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   player1Score.textContent = 0;
//   player2Score.textContent = 0;
//   currentScore1.textContent = 0;
//   currentScore2.textContent = 0;

//   //   console.log(player1El.classList);
//   dice.classList.add("hidden");
//   player1El.classList.remove("player--winner");
//   player2El.classList.remove("player--winner");
//   player1El.classList.add("player--active");
//   player2El.classList.remove("player--active");
// };
// init();
// // switching players to continue the match
// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player1El.classList.toggle("player--active");
//   player2El.classList.toggle("player--active");
// };
// /*============================
// Rolling Dice functionality
// ==============================
//  */
// // Rolling dice functionality
// rollDiceBtn.addEventListener("click", function () {
//   //   console.log("HEy");
//   if (playing) {
//     // 1. Generating a random dice roll
//     const randomDice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     dice.classList.remove("hidden");
//     dice.src = `/Images/dice${randomDice}.png`;

//     // 3. Check for rolled 1
//     if (randomDice !== 1) {
//       // Add dice to current score
//       currentScore += randomDice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });
// // functionality of hold button
// holdScoreBtn.addEventListener("click", function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       dice.classList.add("hidden");

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add("player--winner");
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove("player--active");
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener("click", init);

// // function newGame() {
// //   player1Score.textContent = 0;
// //   player2Score.textContent = 0;

// //   currentScore1.textContent = 0;
// //   currentScore2.textContent = 0;

// //   dice.classList.add("hidden");
// // }

// // /*writing a rollDice()function which will just give us random dice values
// //  */

// // function rollDice() {
// //   // we want random numbers between 1-6 to handle the dice images
// //   const random = randomDiceGenerator();
// //   dice.classList.remove("hidden");
// //   dice.src = `Images/dice${random}.png`;
// // }

// // // function randomDiceGenerator()will just return values between 1-6.

// // function randomDiceGenerator() {
// //   return Math.floor(Math.random() * 6) + 1;
// // }

// // newGameBtn.addEventListener("click", newGame());

// // rollDiceBtn.addEventListener("click", function () {
// //   rollDice();
// // });

/*===========================================
Optimized Code
=============================================
 */

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `/Images/dice${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
