//This ia a class project game created in Javascript
// Author: Bonnie L. Hoffman - bonnieho@rice.edu

//This is a class file detecting specific key presses
//USE THIS as an EXAMPLE for key detection
 // Let's start by grabbing a reference to the <span> below.
      var userText = document.getElementById("user-text");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        console.log(event);
        userText.textContent = event.key;
      };
// END EXAMPLE


/* my own notes for Hangman: 
		make panels/divs for:
				- word to guess
				- letters already guesses
				- wrong guesses
				- guesses remaining
				- win counter
				- loss counter
				*/


// SECTION - global variables

	// create arrays

		var gameWords = ["avalanche", "blackhawks", "blue jackets", "blues", "bruins", "canadiens", "canucks", "capitals", "coyotes", "devils", "ducks", "flames", "flyers", "golden knights", "hurricanes", "islanders", "jets", "kings", "lightning", "maple leafs", "oilers", "panthers", "penguins", "predators", "rangers", "red wings", "sabres", "senators", "sharks", "stars", "wild"];
		var randomWord = ""
		var lettersInWord = [];
		var numOfBlanks = 0;
		var blanksAndSuccesses = [];

	// game counters

		var CountWins = 0;
		var CountLosses = 0;
		var remainingGuesses = 8;

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
			for (var i=0; i<numOfBlanks; i++){
				blanksAndSuccesses.push("_");
			}


			// Change HTML to reflect round conditions
			// FYI - join will put the array members together without the unsightly comma delimiter
			document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
			document.getElementById("guessesLeft").innerHTML = remainingGuesses;
			document.getElementById("wincount").innerHTML = CountWins;
			document.getElementById("losscount").innerHTML = CountLosses;


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
				remainingGuesses--
			}

			//Testing this
			console.log(blanksAndSuccesses);
		}

		


		function roundComplete(){
			console.log("Win Count: " + CountWins + "  |  LossCount: " + CountLosses + "  | Guesses Remaining: " + remainingGuesses);
			
			// update the html to reflect the most current stats
			document.getElementById("guessesLeft").innerHTML = remainingGuesses;
			document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
			document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");


			// check for a win
			if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
				CountWins++;
				alert("You Won!");

				// update the win count
				document.getElementById("wincount").innerHTML = CountWins;

				launchGame();
			}

			else if (remainingGuesses == 0) {
				CountLosses++;
				alert("I'm sorry, but you've lost the game.");

				// update the loss count
				document.getElementById("losscount").innerHTML = CountLosses;

				launchGame();
			}
		}



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








