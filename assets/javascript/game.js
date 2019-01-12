//This ia a class project game created in Javascript
// Author: Bonnie L. Hoffman - bonnieho@rice.edu

//This is a class file detecting specific key presses
//USE THIS as an EXAMPLE for key detection
 // Let's start by grabbing a reference to the <span> below.
      // var userText = document.getElementById("user-text");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      // document.onkeyup = function(event) {
        //console.log(event);
        //userText.textContent = event.key;
      //};
// END EXAMPLE


// MVPs for this project:

// (the OBVIOUS) - add background image(s) and STYLE the page (and alerts?!)

// - see if there's a way to get the FINAL letter (or space) of each correctly guessed team name to display:
//  1. once it's typed AND before the alert pops up;
//  2. have spaces display somehow (can the shift key trigger placement of a nbsp if the name has one??) if (e.keyCode === 32 || e.key === ' ')
//  2. maybe also have a logo display on either the page or the pop-up (I think I'd prefer the alert if possible)

// - see if there's a way to only display a wrong letter once instead of a second time if you make a mistake and type it multiple times. Maybe an alert to let you know that you are a bone head to guess the same letter twice when you were already told it wasn't in the name?!?

// limit the valid keystrokes to letters and the space bar (in other words, if the return is hit when going forward to a new round, that shouldn't count against you as the first missed guess in that next round.)

// - sounds! 
//   1. maybe have a sound play when the user gets an answer correct (like a fog horn);
//   2. how 'bout a final sound when the game is finished (is that even established?!)


// HARD STUFF

// making objects?


// check this tutorial https://www.youtube.com/watch?v=KJeRLolub8E



// =============================================================

// SECTION - global variables

	// create arrays

		var gameWords = ["avalanche", "blackhawks", "blue jackets", "blues", "bruins", "canadiens", "canucks", "capitals", "coyotes", "devils", "ducks", "flames", "flyers", "golden knights", "hurricanes", "islanders", "jets", "kings", "lightning", "maple leafs", "oilers", "panthers", "penguins", "predators", "rangers", "red wings", "sabres", "senators", "sharks", "stars", "wild"];
		var randomWord = ""
		var lettersInWord = [];
		var numOfBlanks = 0;
		var blanksAndSuccesses = [];

	// game counters

		var countWins = 0;
		var countLosses = 0;
		var remainingGuesses = 8;

// =============================================================

// SECTION - functions

		function launchGame() {
			randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
			lettersInWord = randomWord.split("");
			//this figures how many blanks are required for a specific team name
			numOfBlanks = lettersInWord.length;


			// RESET guesses left

			remainingGuesses = 8;
			wrongLetters = [];
			blanksAndSuccesses = [];


			//Populate blanks and successes with the correct number of blanks.
			for (var i=0; i<numOfBlanks; i++) {
				blanksAndSuccesses.push("_");
			}


			// Change HTML to reflect round conditions
			// FYI - join will put the array members together without the unsightly comma delimiter
			document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
			document.getElementById("guessesLeft").innerHTML = remainingGuesses;
			document.getElementById("wincount").innerHTML = countWins;
			document.getElementById("losscount").innerHTML = countLosses;


			// TEST
			//console.log(gameWords);
			console.log(randomWord);
			console.log(lettersInWord);
			console.log(numOfBlanks);
			console.log(blanksAndSuccesses);

		}


		function checkLetters(letter) {

			var isLetterInWord = false;

			for (var i=0; i<numOfBlanks; i++){
				if(randomWord[i] == letter){
					isLetterInWord = true;
					// this breaks out of the for loop if a letter matches
					//console.log("letter matched - breaking out of loop now");
					break;
				}
			}

		//check index placement of existing letter(s) then populate blanksAndSuccesses
			if(isLetterInWord) {
				for (var i=0; i<numOfBlanks; i++){
					if(randomWord[i] == letter){
						blanksAndSuccesses[i] = letter;
						}
						// BAH - none of these worked
						//console.log("length of randomWord ="); 
						//console.log(randomWord.length);
					//if(randomWord.length(-1) == blanksAndSuccesses[i]){
					//	blanksAndSuccesses[i].push(letter);
					//	}				
				}
			}

			else {
				wrongLetters.push(letter);
				remainingGuesses--;
			}

			// How to determine letters that have already been chosen for the array?
			// Is this where that validation would go?
			// Then how to test??

			//Testing this
			console.log(blanksAndSuccesses);
			console.log("from inside checkLetters function");
		}

		


		function roundComplete() {
			// console.log("Win Count: " + countWins + "  |  LossCount: " + countLosses + "  | Guesses Remaining: " + remainingGuesses);
			
			// update the html to reflect the most current stats
			document.getElementById("guessesLeft").innerHTML = remainingGuesses;
			document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
			document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");

			// check for a win
			if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
				countWins++;
				// update the win count
				document.getElementById("wincount").innerHTML = countWins;



				// maybe put the push of last letter here? try uncommenting line below (check console.log)
				//document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.push(letterGuessed); WORKS but letterGuessed not defined
				//blanksAndSuccesses = letter; WORKS to place last letter but breaks after that bc letter is undefined.
				//blanksAndSuccesses[i] = letter; WORKS, but see below
				//blanksAndSuccesses.push(letter);  works but with this one, letter is not defined
				// uncommenting the line above give this error:
				// Uncaught ReferenceError: i is not defined at roundComplete (game.js:140)
    			// at HTMLDocument.document.onkeyup (game.js:189) Now line 193
				//letterGuessed.push(blanksAndSuccesses);
				
				
				// this is also where the sound effect of winning a single game should be
				//Testing for the insertion point
				//console.log("sound is playing!");
				//alert("play sound here!");
				// end test

				alert("You Won!");

				// reset wrong letter array
				wrongLetters = [];
				document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");

				launchGame();
			}

			else if (remainingGuesses == 0) {
				countLosses++;
				alert("I'm sorry, but you've lost the game. \nBetter luck next time!");

				// reset wrong letter array
				wrongLetters = [];
				document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");

				// update the loss count
				document.getElementById("losscount").innerHTML = countLosses;

				launchGame();
			}
		}

// =============================================================

// SECTION - main processes

	// this inititates the game the first time
	launchGame();


	// this registers key clicks

	document.onkeyup = function(event){
		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
		// somewhere here, validate letterGuessed for letters ONLY and SPACE

		// somewhere here, too(?) check for duplicate letters already guessed (both correct and incorrect??)
		// https://github.com/jeffreylowy/Hangman-Game/blob/master/assets/js/got-hangman.js

		/*
    to check if a letter is already in the wrong guesses array. What we want to do
    is set up an if/else conditional that will run a for loop that will iterate over
    all the letters and then use the if/else to check if it it already exists.
    */
    // from https://github.com/JulieBurk/Hangman-game/blob/master/assets/javascript/game.js

    // also check this link http://danorlovsky.tech/Articles/Javascript-Hangman-Tutorial

    // this one checks for letters only: https://smendez92.github.io/Hangman-Game/

		checkLetters(letterGuessed);

		// maybe somewhere in here to place the last letter?!?



		roundComplete();


		//is this where I want to have a check for whether a letter has been picked or not (and not let it count against you again)? (wrongLetters array)

		// also, is this where I want it to check for ONLY letters and the space bar and let errant keystrokes count against you?

		//testing it 
		console.log("letter guessed was: ")
		console.log(letterGuessed);
	}








