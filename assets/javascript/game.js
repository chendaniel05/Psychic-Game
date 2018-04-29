//Arrays of the javascript
var cpuChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Variables of the javascript
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var lettersGuessed = [];
var lettersAvaliable = null;

//Computer picks a random letter from Var cpuChoices
var cpuPick = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];

//Creating a function to displaying "Guesses left: 10" in the HTML file/browser
var updateLetterGuessed = function() {
    document.querySelector('#guesses'); Element.innerHTML = "Guesses left: " + guessesLeft;
};

//taking variable lettersAvaliable and relating it to variable cpuChoices
var updateLettersAvaliable = function() {
    this.lettersAvaliable = this.cpuChoices[Math.floor(Math.random() * this.cpuChoices.length)];
};

//Creating a function and displaying the user's guesses so far. Letters are seperated by commas
var updateGuessesSoFar = function() {
    document.querySelector('#let'); Element.innerHTML = "Your guesses so far: " + lettersGuessed.join(', ');
};

//Function will be active when we reset everything
var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    lettersGuessed = [];

    updateLetterGuessed();
    updateLettersAvaliable();
    updateGuessesSoFar();
};

updateLetterGuessed();
updateLettersAvaliable();

document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = string.fromcharcode(event.keyCode).toLowercase();

    lettersGuessed.push(userGuess);
    updateLettersAvaliable();
    updateGuessesSoFar();

        if (guessesLeft > 0){
            if(userGuess == lettersAvaliable){
                wins++;
                document.querySelector('#wins').innerHTML = "wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "losses: " + losses;
            alert("You are NOT psychic, try again?!");
            reset();
        };
};