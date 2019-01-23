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

//  1. maybe also have a logo display on either the page or the pop-up.

// Only display/register a wrong letter ONCE if you accidently type it multiple times. 

// limit the valid keystrokes to letters and the space bar (in other words, 
// if the RETURN is hit that shouldn't count against you as a keypress

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



// GAME PLAY MVPs

// Since all names should be guessed successfully before the game can be won...
// keep record of names that are missed and add them back into the gameWords array so the player has a chance to get them right?

// - sounds! 
//   1. maybe have a sound play when the user gets an answer correct (like a fog horn);
//   2. how 'bout a final sound when the game is finished (all teams have been successfully guessed).


// HARD STUFF

// making objects?


// check this tutorial https://www.youtube.com/watch?v=KJeRLolub8E


// DONE DONE DONE !!!
// - see if there's a way to get the FINAL letter (or space) of each correctly guessed team name to display:
//  once it's typed AND before the alert pops up; DONE DONE DONE!!!
//  have spaces display somehow (can the space key trigger placement of a nbsp if the name has one??) YES, but if it displays, it breaks the game cycle.
// DONE DONE DONE !!!
// see about eliminating previous team names that were randomly picked one by one so that there are no repeats until 
// all of the individual team names are picked (throw out successfully guessed name as player wins that round using decrement of array members)
// alert is displayed once all names have been displayed from the gameWords array
// an animated gif red lamp when a round is WON! (then 'disabled' once the next round begins.)


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
		var winLampShow = document.getElementById("win-lamp");

		// var x = document.getElementsByClassName("example");
		// var i;
			//for (i = 0; i < winLampShow.length; i++) {
  			//winLampShow[i].style.display = "inline-block";
			//}

	// converting non-breaking space to something that the browser understands - NOT USING RIGHT NOW
		// var SpaceCharacterNode = document.createTextNode("\u00a0")


		// researching on how to bring in info from JSON file: https://stackoverflow.com/questions/14519041/how-to-read-a-json-object-in-js

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
	    	winLampShow.style.display = "none";



	    	// generate a random element from the gameWords array
	    	randomNumber = (Math.floor(Math.random() * gameWords.length));

			// randomWord = gameWords[Math.floor(Math.random() * gameWords.length)]; // changed to what's below to allow the countdown of names already shown.
			randomWord = gameWords[randomNumber];


			lettersInWord = randomWord.split("");
			// this figures how many blanks are required for a specific team name
			numOfBlanks = lettersInWord.length;



			// RESET remainingGuesses total and wrongLetters and blanksAndSuccesses arrays

			remainingGuesses = 8;
			wrongLetters = [];
			blanksAndSuccesses = [];


			//Populate blanks and successes with the correct number of blanks.
			for (var i=0; i<numOfBlanks; i++) {
				blanksAndSuccesses.push("_");
				
				/* NOT WORKING yet
				// check for blanks in name
				var isBlankInWord = false;

				if(isBlankInWord) {
					for (var i=0; i<numOfBlanks; i++){
						// checking for space and inserting nbsp
						//if(randomWord[i] === " "){
						if(lettersInWord[i] === " "){
							isBlankInWord = true;
							lettersInWord[i] = '\xa0';	
							} // the space character check HERE breaks game cycle IF there's a space in the team name
							//blanksAndSuccesses[i] = letter;
							blanksAndSuccesses[i].push('\xa0');
						}			
				}
				// END check for blanks in name */
			}
			// END populate blanks and successes with the correct number of blanks.
			


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


			//testing the tossing out of current randomly picked member of the gameWords array
			var i = gameWords.length; // initialize counter to array length 

			while (i--) // decrement counter 
			{
  				if (gameWords[i] === gameWords[randomNumber]) {
	    			console.log("gameWords Array after removal of RandomNumber element: ", gameWords[i]);
	    			gameWords = gameWords.slice(0, i).concat(gameWords.slice(i + 1));
	    			console.log(gameWords);
  				}
			}
			// this seems to work!

		}

		/* function checkForSpace(){

		} */


		function checkLetters(letter) {

			// RE-ENABLE this message if we don't want to list message stating which letter was chosen OR if the key pressed was NOT a letter key.
			
			// clearing in-page message - this successfully blanks out the pageMessage div WITHOUT the unsightly shift
			// of having no content inside. The code within sends a nbsp! (finally!)
			//pageMessage.textContent = ("\xa0");
			//pageMessage.style.display = "block";


			// checking to see if guessed letter has been picked already
			// (is already in the blanksAndSuccesses array OR the wrongLetters letter array)
			var alreadyChosen = false;
			for (var i=0; i<numOfBlanks; i++){
				if(letter == wrongLetters[i] || letter == blanksAndSuccesses[i]){
					alreadyChosen = true;
					// in-page message trigger
					pageMessage.textContent = ("You've already picked that letter!");
	    			pageMessage.style.display = "block";
				}
				break;
			}

			//if (alreadyChosen = true){
				// in-page message trigger
				//	pageMessage.textContent = ("You've already picked that letter!");
	    		//	pageMessage.style.display = "block";
			//}

			// Cool. This is sort of working. 
			// The only problem is that it's still counting multiple choices of an incorrect letter against the player 
			// (decrementing total guess remaining).

// additional notes for debugging
			// checking for duplicate letters already guessed (both correct and incorrect??)
			// https://github.com/jeffreylowy/Hangman-Game/blob/master/assets/js/got-hangman.js
			/*
		    to check if a letter is already in the wrong guesses array. What we want to do
		    is set up an if/else conditional that will run a for loop that will iterate over
		    all the letters and then use the if/else to check if it it already exists.
		    */
		    // from https://github.com/JulieBurk/Hangman-game/blob/master/assets/javascript/game.js
			


			var isLetterInWord = false;

			for (var i=0; i<numOfBlanks; i++){
				if(randomWord[i] == letter){
					isLetterInWord = true;
					// this breaks out of the for loop if a letter matches
					//console.log("letter matched - breaking out of loop now");
					break;
				}
				//if(isLetterInWord = false){
					//not pushing if this is here
					//wrongLetters.push(letter);
					//remainingGuesses--;
					// in-page message trigger
					//pageMessage.textContent = ("You've already picked that letter!");
	    			//pageMessage.style.display = "block";
	    			//break;
				//}
			}
		
		
		// check index placement of existing letter(s) then populate blanksAndSuccesses
			if(isLetterInWord) {
				for (var i=0; i<numOfBlanks; i++){
					if(randomWord[i] == letter){
						// look into this: https://stackoverflow.com/questions/6116474/how-to-find-if-an-array-contains-a-specific-string-in-javascript-jquery
						// checking for space and inserting nbsp --- this WORKS to insert space if name has one 
						// BUT it BREAKS ability to win the round!
						// if (letter === " "){
						//	letter = '\xa0';	
						//	} 

						// capitalize first letter?
							//if(randomWord[0] == letter){
							//	letter = String.toUpperCase();
							//}
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
				//else if (alreadyChosen = true) {
					// in-page message trigger
				//	pageMessage.textContent = ("You've already picked that letter!");
	    		//	pageMessage.style.display = "block";
				//}
			}
			
			

			//Testing this
			console.log(blanksAndSuccesses);
			// console.log("from inside checkLetters function");
		}

		


		function roundComplete() {
			
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
	    		// display goal lamp animated gif
	    		winLampShow.style.display = "inline-block";
	    		

			/* Developer note: There was a timing issue with the win/loss alert happening before the last letter
			displayed (either right or wrong). By enclosing everything in a function that specifically delays the 
			alert activating by 1/2 a second, the letters - correct or incorrect - are now having a chance to populate 
			their divs as I had hoped. */

			/* that said, I may take out the alerts anyway (in favor of the pageMessage div). */

				setTimeout(function(){ 
					alert("You won!");
					// 'disable' goal lamp animated gif -- NOTE - this action is now associated with the popup alert.
					// winLampShow.style.display = "inline-block";

					// this is also where the sound effect of winning a single game should be
					//Testing for the insertion point
					//console.log("sound is playing!");

					// reset wrongLetters array
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
					// reset wrongLetters array
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

	// clear red goal lamp if starting new round/game.
	// winLampShow.style.display = "none";

	// function to check for a nbsp in the team name
	//checkForSpace();


	// this registers key clicks

	document.onkeyup = function(event){

		// FIRST, let's create a loop to check for letters (maybe not... and SPACEBAR) ONLY BEFORE sending to letterGuessed

		//var key = event.key || event.keyCode;
		//var key = event.key || event.keyCode; key is current; keyCode is deprecated.

		// this conversion to upperCase lets us validate for event.code since letters are all "KeyA", "KeyB", "KeyC", etc.
		var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();

		// testing for event.code helps bulletproof this verification because:
		// The value of event.key can change depending on the language or CapsLock enabled. 
		// Also, the value of event.code is strictly bound to the key,
		if (event.code == "Key"+letterGuessed){
			console.log(event.code);
			// in-page message trigger - This works and displays UpperCase letter, which looks a little nicer in the message area.
			pageMessage.textContent = ("You've chosen letter: "+letterGuessed);
	    	pageMessage.style.display = "block";
		}

		// put this in a listener ?? Because we don't want to send non-letter entries to the incorrect guesses array and have them count against the player.
		else if (event.code !== "Key"+letterGuessed){
			console.log(event.code);
			// in-page message trigger - THIS IS working!
			pageMessage.textContent = ("That's NOT a letter. Please choose a letter between a-z.");
	    	pageMessage.style.display = "block";
		}

// ORIGINAL test
/*
		// testing for letters only in console.log
		if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 32) {
			// in-page message trigger - THIS IS NOT working
			// pageMessage.textContent = ("That IS a letter.");
	    	// pageMessage.style.display = "block";
			console.log("This is an OK key");
		}

		else if (event.keyCode <= 65 && event.keyCode >= 90 || event.keyCode !== 32) {
			// in-page message trigger - THIS IS NOT working
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
*/

		// var latestGuessedLetter = event.key.toLowerCase();

		// converts the letterGuessed back to LowerCase before sending to the checkLetter() function 
		// (because letters in array are all LC).
		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();



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
	}


// =============================================================
// ========================= END ===============================









