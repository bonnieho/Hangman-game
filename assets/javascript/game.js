// This ia a UT Austin @Houston Bootcamp class project game created in Javascript
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

// PRIORITY: Only display/register a wrong letter ONCE if you accidently type it multiple times. 

// FIX: modal-header parsing!

// FIX: modal content needs to pull by randomWord NOT randomNumber!

// FIX: IF team name has a space, inserting a nbsp breaks the game cycle (win not registered and new game won't launch)

// (the OBVIOUS) - add background image(s) and STYLE the page (and style alerts?!)

// clean up modal - change ice color/set breakpoints for width on smaller viewport devices?




// limit the valid keystrokes to letters and the space bar (in other words, 
// if the RETURN is hit that shouldn't count against you as a keypress

// smendez92 


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
// have a logo display on either the page or the pop-up - BETTER YET - as content in the modal!
// embedding the JSON file that contains the:
// team (data is identical to what's already in the original array) + fullname + logo image + to populate a (non-Bootstrap!) modal?
// clean up modal - placement to center DONE! colors DONE!, height DONE!, content DONE!
// clean up modal - get close span button to work DONE!

// =============================================================

// SECTION - json to an object

var logos = '{"teams": [' + 
  '{"team": "avalanche","fullname": "Colorado Avalanche","image": "assets/images/NHL_Avalanche_Primary.png"},' +
  '{"team": "blackhawks","fullname": "Chicago Blackhawks","image": "assets/images/NHL_Blackhawks_Primary.png"},' + 
  '{"team": "blue jackets","fullname": "Columbus Blue Jackets","image": "assets/images/NHL_Blue_Jackets_Primary.png"},' +
  '{"team": "blues","fullname": "St. Louis Blues","image": "assets/images/NHL_Blues_Primary.png"},' +
  '{"team": "bruins","fullname": "Boston Bruins","image": "assets/images/NHL_Bruins_Primary.png"},' +
  '{"team": "canadiens","fullname": "Montreal Canadiens","image": "assets/images/NHL_Canadiens_Primary.png"},' +
  '{"team": "canucks","fullname": "Vancouver Canucks","image": "assets/images/NHL_Canucks_Primary.png"},' +
  '{"team": "capitals","fullname": "Washington Capitals","image": "assets/images/NHL_Capitals_Primary.png"},' +
  '{"team": "coyotes","fullname": "Arizona Coyotes","image": "assets/images/NHL_Coyotes_Primary.png"},' +
  '{"team": "devils","fullname": "New Jersey Devils","image": "assets/images/NHL_Devils_Primary.png"},' +
  '{"team": "ducks","fullname": "Anaheim Ducks","image": "assets/images/NHL_Ducks_Primary.png"},' +
  '{"team": "flames","fullname": "Calgary Flames","image": "assets/images/NHL_Flames_Primary.png"},' +
  '{"team": "flyers","fullname": "Philadelphia Flyers","image": "assets/images/NHL_Flyers_Primary.png"},' +
  '{"team": "golden knights","fullname": "Vegas Golden Knights","image": "assets/images/NHL_Golden_Knights_Primary.png"},' +
  '{"team": "hurricanes","fullname": "Carolina Hurricanes","image": "assets/images/NHL_Hurricanes_Primary.png"},' +
  '{"team": "islanders","fullname": "New York Islanders","image": "assets/images/NHL_Islanders_Primary.png"},' +
  '{"team": "jets","fullname": "Winnipeg Jets","image": "assets/images/NHL_Jets_Primary.png"},' +
  '{"team": "kings","fullname": "Los Angeles Kings","image": "assets/images/NHL_Kings_Primary.png"},' +
  '{"team": "lightning","fullname": "Pittsburgh Penguins","image": "assets/images/NHL_Lightning_Primary.png"},' +
  '{"team": "maple leafs","fullname": "Toronto Maple Leafs","image": "assets/images/NHL_Maple_Leafs_Primary.png"},' +
  '{"team": "oilers","fullname": "Edmonton Oilers","image": "assets/images/NHL_Oilers_Primary.png"},' +
  '{"team": "panthers","fullname": "Florida Panthers","image": "assets/images/NHL_Panthers_Primary.png"},' +
  '{"team": "penguins","fullname": "Pittsburgh Penguins","image": "assets/images/NHL_Penguins_Primary.png"},' +
  '{"team": "predators","fullname": "Nashville Predators","image": "assets/images/NHL_Predators_Primary.png"},' +
  '{"team": "rangers","fullname": "New York Rangers","image": "assets/images/NHL_Rangers_Primary.png"},' +
  '{"team": "red wings","fullname": "Detroit Red Wings","image": "assets/images/NHL_Red_Wings_Primary.png"},' +
  '{"team": "sabres","fullname": "Buffalo Sabres","image": "assets/images/NHL_Sabres_Primary.png"},' +
  '{"team": "senators","fullname": "Ottawa Senators","image": "assets/images/NHL_Senators_Primary.png"},' +
  '{"team": "sharks","fullname": "San Jose Sharks","image": "assets/images/NHL_Sharks_Primary.png"},' +
  '{"team": "stars","fullname": "Dallas Stars","image": "assets/images/NHL_Stars_Primary.png"},' +
  '{"team": "wild","fullname": "Minnesota Wild","image": "assets/images/NHL_Wild_Primary.png"}]}';

// =============================================================

// SECTION - global variables

	// create arrays

		var gameWords = ["avalanche", "blackhawks", "blue jackets", "blues", "bruins", "canadiens", "canucks", "capitals", "coyotes", "devils", "ducks", "flames", "flyers", "golden knights", "hurricanes", "islanders", "jets", "kings", "lightning", "maple leafs", "oilers", "panthers", "penguins", "predators", "rangers", "red wings", "sabres", "senators", "sharks", "stars", "wild"];
		// newGameWords array holding team names not guessed yet
		var newGameWords = [];
		var randomWord = ""
		var lettersInWord = [];
		var numOfBlanks = 0;
		var blanksAndSuccesses = [];
		// new array to hold missed team names to give the player a chance to get them correct
		var missedNames = [];

	// game counters

		var countWins = 0;
		var countLosses = 0;
		var remainingGuesses = 8;

	// in-page messaging setup (in-page div to replace alert popups)
		var pageAlert = document.getElementById("inPageAlert");
		var pageMessage = document.getElementById("inPageMessage");
		var winLampShowL = document.getElementById("win-lamp_L");
		var winLampShowR = document.getElementById("win-lamp_R"); 


// ======= modal set up ==========

	// in-page messaging setup (to replace alert popups) 
		var modal = document.getElementById("myModal");

	// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// stuff I tested
		// var span = document.getElementById('mySpan').getElementsByTagName('span');
// var objectHTMLCollection = document.getElementById("mySpan"),
		/* var span = document.getElementById("mySpan"),
    string = [].map.call( span, function(node){
        return node.textContent || node.innerText || "";
    }).join(""); */

    // console.log("this is the value for span:");
	// console.log(span);


	// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";

		  	// Get the div element with id="modal-header"
			// var clearNodeStuff = document.getElementById("modal-header");

			// As long as modal-header has a child node, remove it
			// while (clearNodeStuff.hasChildNodes()) {  
			// clearNodeStuff.removeChild(clearNodeStuff.childNodes[1]);
			//} 
		}

	// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
		    modal.style.display = "none";
		  }

		  	// Get the div element with id="modal-header"
			//var clearNodeStuff = document.getElementById("modal-header");
			
			// As long as modal-header has a child node, remove it
			//while (clearNodeStuff.hasChildNodes()) {  
			// clearNodeStuff.removeChild(clearNodeStuff.childNodes[1]);
			//} 
		}

// ======= END modal set up ========== 


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

			// reset randomNumber
			// NOT WORKING randomNumber = null;

			// reset node (text that populates modal header - if not, it repeats the earlier ones.)
			// NOT WORKING var node = "";


			// check to see if all teams have shown up (the whole game is completed). 
			if (gameWords.length === 0){
				alert("OMG - you successfully guessed the names of all of the teams in the NHL!");
			}

			// in-page message trigger
			pageMessage.textContent = ("Starting this round... Good luck!");
	    	pageMessage.style.display = "block";
	    	winLampShowL.style.display = "none";
	    	winLampShowR.style.display = "none";

			console.log("new round starting");

	    	// generate a random element from the gameWords array
	    	randomNumber = (Math.floor(Math.random() * gameWords.length));

	    	// debugging to see why the wrong image comes up after a couple of correct images.
	    	// it's likely because the original array is decreased but the JSON file is not, so the number doesn't match after the first few in the array are removed.
	    	console.log("The random number is:");
	    	console.log(randomNumber);

			// randomWord = gameWords[Math.floor(Math.random() * gameWords.length)]; // changed to what's below to allow the countdown of names already shown.
			randomWord = gameWords[randomNumber];
			console.log("The random Word is:");
	    	console.log(randomWord);


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
				
				// also try this https://stackoverflow.com/questions/5308797/detect-nbsp-and-space-with-javascript
				// https://stackoverflow.com/questions/1495822/replacing-nbsp-from-javascript-dom-text-node
				// https://stackoverflow.com/questions/5237989/how-is-a-non-breaking-space-represented-in-a-javascript-string
				// THIS MIGHT JUST DO IT! https://appendto.com/2016/02/replace-spaces-underscores-javascript/

				/* NOT WORKING yet - maybe double == or single = instead???
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
				
 				// not working yet, but I think this is promising (to find a space in the randomWord array and insert it into blanksAndSuccesses automatically)
				randomWord = randomWord.replace(/\s/g, " ");
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
			console.log("the random team name is:");
			console.log(randomWord);
			console.log(lettersInWord);
			console.log(numOfBlanks);
			console.log(blanksAndSuccesses);


			//testing the tossing out of current randomly picked member of the gameWords array
			var i = gameWords.length; // initialize counter to array length 

			while (i--) // decrement counter 
			{
  				if (gameWords[i] === gameWords[randomNumber]) {
	    			console.log("NEW gameWords Array after removal of RandomNumber element: ", gameWords[i]);
	    			gameWords = gameWords.slice(0, i).concat(gameWords.slice(i + 1));
	    			console.log(gameWords);
  				}
			}
			// this seems to work!

		}

		/* function checkForSpace(){

		} */

/* =========   Function to check letter that were typed in  ================  */

		function checkLetters(letter) {

			// RE-ENABLE this message if we don't want to list message stating which letter was chosen OR if the key pressed was NOT a letter key.
			
			// clearing in-page message - this successfully blanks out the pageMessage div WITHOUT the unsightly shift
			// of having no content inside. The code within sends a nbsp! (finally!)
			//pageMessage.textContent = ("\xa0");
			//pageMessage.style.display = "block";


			// checking to see if guessed letter has been picked already
			// (is already in the blanksAndSuccesses array OR the wrongLetters letter array)
			// LOOK AT THIS TO SPLIT THE LOOP - one condition and response for wrong letter and one other condition for blanksSuccesses
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
				// tried this - what's wrong?!?
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

						// capitalize first letter? WORK ON THIS!!!
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
				// This WORKS to place a space in the wrongLetters array if there's not one in the team name
					remainingGuesses--; 
					wrongLetters.push(letter);
					// in-page message trigger
					// LOOK INTO THIS MESSAGE - when do I want it to be called???
					pageMessage.textContent = ("You've already picked that letter!");
	    			pageMessage.style.display = "block";

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

		
/* =========   Function when the round is complete (either won or not) ================  */

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

				// modal trigger
				modal.style.display = "block";
				logo = JSON.parse(logos);


//IS THIS WORKING?!?
				console.log(logo);

				// trying to synch up updated gameWords with full set of names, fullnames, and images in logos object
				/*function findObjectByKey(logo, team, value) {
				    for (var i = 0; i < logo.length; i++) {
				        if (logo[i][team] === randomWord) {
				            return logo[i][fullname];
				            return logo[i][image];
				        }
				    }
				    return null;
				} */

				//console.log(logo[i][fullname]);
				//console.log(logo[i][image]);


				var newElemH2 = document.createElement("h2");
				var newElemBR = document.createElement("BR");
				var node = document.createTextNode("Congratulations!" + newElemBR + "You won this round by successfully guessing"+ newElemBR +"the <style='font-size: x-large;'><strong>" + logo.teams[randomNumber].fullname + "</strong></style>!");
				var head2 = newElemH2.appendChild(node);


				//works but with tags as strings
				//var textnode = document.createTextNode("<h2>Congratulations!<br />You won this round by successfully guessing<br /> the <style='font-size: x-large;'><strong>" + logo.teams[randomNumber].fullname + "</style></strong>!</h2>");
				//works but with tags as strings
				//document.getElementById("modal-header").appendChild(textnode);

				document.getElementById("modal-header").appendChild(head2);

				// works but with no close button!
				// document.getElementById("modal-header").innerHTML = "<h2>Congratulations!<br />You won this round by successfully guessing<br /> the <style='font-size: x-large;'><strong>" + logo.teams[randomNumber].fullname + "</style></strong>!</h2>";

				// WORKS (red lamps + team logo)
				document.getElementById("modal-body").innerHTML = "<p><img src='assets/images/animated-police-light-image-0004.gif' alt='light the lamp animated gif' class='win-lamp' style='position: relative; top: 50%; transform: translateY(-120%);'/><img style='margin-right: 54px; margin-left: 54px;' src='"+logo.teams[randomNumber].image+"' alt='logo of "+logo.teams[randomNumber].fullname+"'/><img src='assets/images/animated-police-light-image-0004.gif' alt='light the lamp animated gif' class='win-lamp' style='position: relative; top: 50%; transform: translateY(-120%);'/></p>";



				// in-page message trigger
				pageMessage.textContent = ("You won this round!");
	    		pageMessage.style.display = "block";
	    		// display goal lamp(s) animated gif
	    		winLampShowL.style.display = "inline-block";
	    		winLampShowR.style.display = "inline-block";
	    		

			/* Developer note: There was a timing issue with the win/loss ALERT happening before the last letter
			displayed (either right or wrong). By enclosing everything in a function that specifically delays the 
			alert activating by 1/2 a second, the letters - correct or incorrect - are now having a chance to populate 
			their divs as I had hoped. */

			/* that said, I may take out the alerts anyway (in favor of the pageMessage div AND/OR a modal). */

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
				// pushing missed team name into missedName array to give the player a chace to get it right later.
				// not working - does this need to be in a loop? does it need to be elsewhere?
				missedName.push(randomWord);
				console.log(missedName);

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

// ===============================================================================

// SECTION - main processes

// launchGame();
// then onkeyup event triggers checkLetters then roundComplete functions

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
		//if (event.code == "Key"+letterGuessed && event.keyCode >= 65 && event.keyCode <= 90){
			console.log(event.code);
			// in-page message trigger - This works and displays UpperCase letter, which looks a little nicer in the message area.
			pageMessage.textContent = ("You've chosen letter: "+letterGuessed);
	    	pageMessage.style.display = "block";
		}

		// put this in a listener ?? Because we don't want to send non-letter entries to the incorrect guesses array and have them count against the player.
		else if (event.code !== "Key"+letterGuessed){
		//else if (event.code !== "Key"+letterGuessed && event.keyCode <= 65 && event.keyCode >= 90){
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

// NOT WORKING, but promising
     // Make sure we didn't use this letter yet
       /* if (letterGuessed.indexOf(event) === -1) {
            letterGuessed.push(event);
            checkLetters(event);
        } */
  

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


/* trying out a modal to replace the js alert 

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

*/









