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

			//Testing this
			console.log(blanksAndSuccesses);
		}

		


		function roundComplete() {
			console.log("Win Count: " + countWins + "  |  LossCount: " + countLosses + "  | Guesses Remaining: " + remainingGuesses);
			
			// update the html to reflect the most current stats
			document.getElementById("guessesLeft").innerHTML = remainingGuesses;
			document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
			document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");


			// check for a win
			if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
				countWins++;
				alert("You Won!");
				// reset wrong letter array
				wrongLetters = [];

				// update the win count
				document.getElementById("wincount").innerHTML = countWins;

				launchGame();
			}

			else if (remainingGuesses == 0) {
				countLosses++;
				alert("I'm sorry, but you've lost the game. \nBetter luck next time!");

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
		checkLetters(letterGuessed);
		roundComplete();

		//testing it
		console.log(letterGuessed);
	}








