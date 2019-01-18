// This ia a Bootcamp class project game created in Javascript
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

// (the OBVIOUS) - add background image(s) and STYLE the page (and style alerts?!)

// FIX: if team name has a space, inserting a nbsp breaks the game cycle (win not registered and new game won't launch)

//  1. maybe also have a logo display on either the page or the pop-up (maybe an animated gif red lamp + logo?)

// checking to see if a letter has already been chosen == and notification in the page == !!!

// activity once the game can be won rightfully!

// - see if there's a way to only display a wrong letter once if you make a mistake and type it multiple times. 
// Maybe an alert == or notification in the page == to let you know that you are a bone head to guess the same letter twice when you were already told it wasn't in the name?!?
// smendez92 

/* <!-- Error PopUp -->
			<div id="myPopUp" class="popUp">
					<div>ALERT<div class="popUpClose">x</div>
					</div>
					<div>
						<p id="popUpMessage"> </p>
					</div>
			</div> */

//Prepare pop-up window
			//var popUpWindow = document.getElementById("myPopUp");
			//var span = document.getElementsByClassName("popUpClose")[0];
			//var popUpText = document.getElementById("popUpMessage");
			//var isOpen;

				//Check if user has already guessed the letter they entered. If so, display error popUp and break out.
    			/* else if (isInArray(guessedLettersArray, latestGuessedLetter)){
    				popUpText.textContent = ("ＹＯＵ.  ＡＬＲＥＡＤＹ.  ＧＵＥＳＳＥＤ. ＴＨＡＴ.  ＬＥＴＴＥＲ.");
	    			popUpWindow.style.display = "block";
	    			isOpen = true;
    				return;
    			} */


// limit the valid keystrokes to letters and the space bar (in other words, 
// if the RETURN is hit that shouldn't count against you as a keypress

// - sounds! 
//   1. maybe have a sound play when the user gets an answer correct (like a fog horn);
//   2. how 'bout a final sound when the game is finished (is that even established?!)


// HARD STUFF

// making objects?


// check this tutorial https://www.youtube.com/watch?v=KJeRLolub8E


// DONE DONE DONE !!!
// - see if there's a way to get the FINAL letter (or space) of each correctly guessed team name to display:
//  once it's typed AND before the alert pops up; DONE DONE DONE!!!
//  have spaces display somehow (can the shift key trigger placement of a nbsp if the name has one??) DONE DONE DONE!!!
// DONE DONE DONE !!!
// see about eliminating previous team names that were randomly picked one by one so that there are no repeats until 
// all of the individual team names are picked 


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

	// in-page messaging setup (to replace alert popups)
		var pageAlert = document.getElementById("inPageAlert");
		var pageMessage = document.getElementById("inPageMessage");

// =============================================================

// SECTION - functions

		function launchGame() {

			// check to see if all teams have shown up (the whole game is completed). 
			if (gameWords.length === 0){
				alert("OMG - you successfully guessed the names of all of the teams in the NHL!");
			}

			// in-page message trigger
			pageMessage.textContent = ("Starting this round... Good luck!");
	    	pageMessage.style.display = "block";

	    	// generate a random element from the gameWords array
	    	randomNumber = (Math.floor(Math.random() * gameWords.length));

			// randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
			randomWord = gameWords[randomNumber];

			
			// ?? if else loop here to check if word has been selected already?

			lettersInWord = randomWord.split("");
			// this figures how many blanks are required for a specific team name
			numOfBlanks = lettersInWord.length;



			// RESET guesses left

			remainingGuesses = 8;
			wrongLetters = [];
			blanksAndSuccesses = [];


			//Populate blanks and successes with the correct number of blanks.
			for (var i=0; i<numOfBlanks; i++) {
				blanksAndSuccesses.push("_");
			}

			// check for blanks in name
			var isBlankInWord = false;

			if(isBlankInWord) {
				for (var i=0; i<numOfBlanks; i++){
					// checking for space and inserting nbsp
					if(randomWord[i] == " "){
							isBlankInWord = true;
							letter = '&#160;';	
							} // the space character check HERE breaks game cycle IF there's a space in the team name
						blanksAndSuccesses[i] = letter;
						}			
				}
			// END check for blanks in name


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

			// removing array element to leave the unused?
			//gameWords = gameWords.splice([i-randomNumber]);
			//console.log(gameWords);

			//testing the tossing out of current randomly picked member of the gameWords array
			var i = gameWords.length; // initialize counter to array length 

			while (i--) // decrement counter 
			{
  				if (gameWords[i] === gameWords[randomNumber]) {
    			console.log("gameWords Array after removal of RandomNumber element: ");
    			gameWords = gameWords.slice(0, i).concat(gameWords.slice(i + 1));
    			console.log(gameWords);
  				}
			}
			// this seems to work!


		}


		function checkLetters(letter) {

			// clearing in-page message 
			//pageMessage.textContent = ("<p>&#160;</p>");
			pageMessage.textContent = ('&#160;');
			pageMessage.style.display = "block";
	    	// NOT working to place (encoded) nbsp in PageMessage div (it just puts the literal string)

			var isLetterInWord = false;

			for (var i=0; i<numOfBlanks; i++){
				if(randomWord[i] == letter){
					isLetterInWord = true;
					// this breaks out of the for loop if a letter matches
					//console.log("letter matched - breaking out of loop now");
					break;
				}
			}
		
		//is this where I want to have a check for whether a letter has been picked or not (and not let it count against you again)? (wrongLetters array)
		// also, is this where I want it to check for ONLY letters and the space bar and let errant keystrokes count against you?
		

		// check index placement of existing letter(s) then populate blanksAndSuccesses
			if(isLetterInWord) {
				for (var i=0; i<numOfBlanks; i++){
					if(randomWord[i] == letter){
						// checking for space and inserting nbsp
						if (letter == " "){
							letter = '&#160;';	
							} // the space character check HERE breaks game cycle IF there's a space in the team name
						blanksAndSuccesses[i] = letter;
						}			
				}
			}

			// the space character check works here (doesn't break game cycle)
			// this may be removed later if I can get the blanks to insert automatically if there's one in the team name.
			else {
				if (letter == " "){
					letter = '[space]&#160;';	
					}
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

				// in-page message trigger
				pageMessage.textContent = ("You won this round!");
	    		pageMessage.style.display = "block";

			/* Developer note: There was a timing issue with the win/loss alert happening before the last letter
			displayed (either right or wrong). By enclosing everything in a function that specifically delays the 
			alert activating by 1/2 a second, the letters, correct or incorrect, are now having a chance to populate 
			their divs as I had hoped. */

			/* that said, I may take out the alerts anyway (in favor of the pageMessage div). */

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

				// in-page message trigger
				pageMessage.textContent = ("Sorry. You've run out of chances on this round.");
	    		pageMessage.style.display = "block";

				setTimeout(function(){ 
					alert("I'm sorry, but you've lost the round. \nBetter luck next time!");
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

		// FIRST, let's create a loop to check for letters and SPACEBAR ONLY BEFORE sending to letterGuessed

				// var latestGuessedLetter = event.key.toLowerCase();

		// var key = event.key || event.keyCode;
		//var key = event.key || event.keyCode; key is current; keyCode is deprecated.

		// testing for letters only in console.log
		if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 32) {
			console.log("This is an OK key");
		}

		else if (event.keyCode <= 65 && event.keyCode >= 90 || event.keyCode !== 32) {
			// in-page message trigger
			// pageMessage.textContent = ("Sorry. That's not a letter.");
	    	// pageMessage.style.display = "block";
			console.log("This NOT a good key");
		}
		// END testing for only letters

		// testing for the enter/return key
		if (event.keyCode === 13) {
			// in-page message trigger
			pageMessage.textContent = ("Sorry. That's not a letter.");
	    	pageMessage.style.display = "block";
		}

		// END loop checking for letters and spacebar


		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();


		// Check if user has already guessed the letter they entered.

		// somewhere here, too(?) check for duplicate letters already guessed (both correct and incorrect??)
		// https://github.com/jeffreylowy/Hangman-Game/blob/master/assets/js/got-hangman.js

		/*
    to check if a letter is already in the wrong guesses array. What we want to do
    is set up an if/else conditional that will run a for loop that will iterate over
    all the letters and then use the if/else to check if it it already exists.
    */
    // from https://github.com/JulieBurk/Hangman-game/blob/master/assets/javascript/game.js

    // also check this link http://danorlovsky.tech/Articles/Javascript-Hangman-Tutorial

    //space key is keyCode === 32) check it first, though
    // KeyboardEvent.key Value for spacebar returns " " also some older browsers may return Spacebar

    // 65 - 90 lc letters

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


		//testing it 
		console.log("letter guessed was: ")
		console.log(letterGuessed);
	}


// =============================================================
// ========================= END ===============================









