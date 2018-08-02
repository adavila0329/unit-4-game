// console.log("Testing Page Connection");

// Variables
var crystals = {
  blue: {
    name: "Blue",
    value: 0
  },
  green: {
    name: "Green",
    value: 0
  },
  red: {
    name: "Red",
    value: 0
  },
  yellow: {
    name: "Yellow",
    value: 0
  }
};

// Scores
var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

// FUNCTIONS

// Helper Function for Random #s
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts and ReStarts Game
var startGame = function() {

// Reset Current Score
currentScore = 0;

// Set New Target Score 
targetScore = getRandom(19, 120);

// Set diffrent values to each Crystal
crystals.blue.value = getRandom(1, 12);
crystals.green.value = getRandom(1, 12);
crystals.red.value = getRandom(1, 12);
crystals.yellow.value = getRandom(1, 12);

// Set HTML to reflect changes
$("#yourScore").text(currentScore);
$("#targetScore").text(targetScore);

// Testing Console --------------------------------------------------------------

// console.log("---------------Testing---------------");
// console.log("Target Score: " + targetScore);
// console.log(
//     "Blue: " + crystals.blue.value + 
//     " | Green: " + crystals.green.value + 
//     " | Red: " + crystals.red.value + 
//     " | Yellow: " + crystals.yellow.value);

};

// Check if User Won or Lost and Reset Game
var checkWin = function() {
    
    // check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        alert("Sorry... You lost! Better luck next time...");
        // Add 1 to lossCount
        lossCount++;
        // Set lossCount to HTML
        $("#lossCount").text(lossCount);
        // ReStart Game
        startGame();
    }

    // if user won
    else if (currentScore === targetScore) {
        alert("Congratulations! You Won!!!");
        // add to winCount
        winCount++;
        // Set winCount to HTML
        $("#winCount").text(winCount);
        // ReStart Game
        startGame();
    }
};

// Respond to clicks on crystals
var addValues = function(clickedCrystals) {
    // Change currentScore
    currentScore += clickedCrystals.value;
    // Set  yourScore HTML to reflect currentScore changes
    $("#yourScore").text(currentScore);
    // call the checkWin Funcntion
    checkWin();
    // Testing Console ==============================================
    // console.log("Your Score: " + currentScore);
    
};

// MAIN PROCESS

// Starts the Game the First Time.
startGame();

$("#blue").click(function() {
  addValues(crystals.blue);
});

$("#red").click(function() {
  addValues(crystals.red);
});

$("#green").click(function() {
  addValues(crystals.green);
});

$("#yellow").click(function() {
  addValues(crystals.yellow);
});