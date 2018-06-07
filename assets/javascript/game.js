//create array for computerchoice

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to for wins and losses starting at 0.

var wins = 0;
var losses = 0;

// Variable for guesses left

var guessesLeft = 9;

//Creating the array for letters pressed

var lettersGuessed = [];



//Game function.
document.onkeyup = function (event) {

    //user input
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //adding to the array only if letter has not been selected yet and not deduct //from guesses if it does



    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];


    //Game logic

    if (userGuess === computerLetter) {
        wins++;
        alert("Good job! You win!");
        //to reset game again
        guessesLeft = 9;

        //resetting the array to start a new game
        lettersGuessed.length = 0;
    }


    else if (userGuess !== computerLetter) {
        if (lettersGuessed.indexOf(userGuess) < 0) {

            lettersGuessed.push(userGuess);
            guessesLeft--;

            if (guessesLeft == 0) {
                losses++
                alert("You are out of guesses. Press any key to play again");
                guessesLeft = 9;

                //resetting the array to start a new game
                lettersGuessed.length = 0;
            }
        } else {
            alert("You already guessed this letter. Try again");

        }


    }




    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<h1>The Psychic Game </h1>" +
        "<p>What letter am I thinking of? </p>" +
        "<p>Total Wins: " + wins + "</p>" +
        "<p>Total Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>You chose: " + lettersGuessed + "  " + " </p>"



    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;

}