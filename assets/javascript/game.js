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
//  once it's typed AND before the alert pops up; DONE DONE DONE!!!

//  1. have spaces display somehow (can the shift key trigger placement of a nbsp if the name has one??) if (e.keyCode === 32 || e.key === ' ')
//  2. maybe also have a logo display on either the page or the pop-up (I think I'd prefer the alert if possible)

// - see if there's a way to only display a wrong letter once instead of a second time if you make a mistake and type it multiple times. Maybe an alert to let you know that you are a bone head to guess the same letter twice when you were already told it wasn't in the name?!?

// limit the valid keystrokes to letters and the space bar (in other words, if the return is hit when going forward to a new round, that shouldn't count against you as the first missed guess in that next round.)
// limit
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


			/* Developer note: There was a timing issue with the win/loss alert happening before the last letter
			displayed (either right or wrong). By enclosing everything in a function that specifically delays the 
			alert activating by 1/2 a second, the letters, correct or incorrect, are now having a chance to populate 
			their divs as I had hoped. */

				setTimeout(function(){ 
					alert("You won!");
					// this is also where the sound effect of winning a single game should be
					//Testing for the insertion point
					//console.log("sound is playing!");
					// reset wrong letter array
					wrongLetters = [];
					document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
					launchGame();
				}, 500);				
			}
			
			else if (remainingGuesses == 0) {
				countLosses++;
				// update the loss count
				document.getElementById("losscount").innerHTML = countLosses;

				setTimeout(function(){ 
					alert("I'm sorry, but you've lost the game. \nBetter luck next time!");
					// reset wrong letter array
					wrongLetters = [];
					document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
					launchGame();
				}, 500);		
			}			
		}

// =============================================================

// SECTION - main processes

	// this inititates the game the first time
	launchGame();


	// this registers key clicks

	document.onkeyup = function(event){
		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

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
	//Check to see if user input is a letter before moving on.
			    	//if (event.keyCode >= 65 && event.keyCode <= 90) {
    //Display warning popUp if user input is not a letter, except for ENTER key.
			    	//else if (event.keyCode !== 13){
			    	//	popUpText.textContent = ("ＬＥＴＴＥＲＳ 　ＯＮＬＹ，　ＰＬＥＡＳＥ");
			    	//	popUpWindow.style.display = "block";
			    	//	isOpen = true;
			    	//	return;
			    	//}

		checkLetters(letterGuessed);

		roundComplete();

		//is this where I want to have a check for whether a letter has been picked or not (and not let it count against you again)? (wrongLetters array)

		// also, is this where I want it to check for ONLY letters and the space bar and let errant keystrokes count against you?

		//testing it 
		console.log("letter guessed was: ")
		console.log(letterGuessed);
	}


// =============================================================
// ========================= END ===============================









