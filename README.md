# A Word-Guess Game (based on the classic "Hangman Game")

Published site: [https://bonnieho.github.io/Hangman-game/](https://bonnieho.github.io/Hangman-game/)

## Overview

This project is a simple word-guess game/app based on the classic "Hangman" format and uses a theme of team names from the National Hockey League. The app runs in a web browser and features dynamically updated HTML powered by basic, vanilla JavaScript that reacts to game-player keyboard input.

The requirements of this project were to set up a basic html page with linked css style sheets (one reset and one sheet of our own custom styles) as well as an external game.js script file to generate game play. Any images used in the execution of the game are saved to a linked images directory within the domain.

- - -

### Game Play

Since the concept is based on guessing all of the correct letters in the randomly chosen word, the following elements were included in the interface:

* a section ("wordToGuess") that displays underscores for each of the letters in the randomly picked team name currently in play (Once correct letters are selected by the player, the corresponding underscore "placeholder" is replaced by that letter, or multiples if the letter occurs more than once in a team name.);

* a section to display letters already guessed incorrectly;

* a section for both the number of rounds won (as determined by individual names guessed correctly before the incorrect letters limit was exhausted) and the number of rounds lost;

The javascript contains key events to listen for the letters that the players will type. Parameters are specified so that non-letter characters and keys do not register as incorrectly chosen letters and counted against the player.

Once the player either wins or loses a round (guessing a random team name), the the game automatically choses another random team name out of the remaining array and begins a new round. Rounds proceed until all names in the array are guessed correctly.



Hangman Game Bonuses

Play a sound or song when the user guesses their word correctly, like in our demo.
Write some stylish CSS rules to make a design that fits your game's theme.


HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. T


Save your whole game and its properties in an object.


Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.


Don't forget to place your global variables and functions above your object.


Remember: global variables, then objects, then calls.



- - - 


(c)2017-2019 __Bonnie Lynne Hoffman__ 

*toward the completion of The University of Texas at Austin Houston Coding Boot Camp Certificate - (June 2017 cohort)*




