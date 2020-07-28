var FlagNumbersUsed = [];
var highscore30 = localStorage.getItem("highscore30");
var highscore60 = localStorage.getItem("highscore60");
var score = 0;
var FlagNumber;
var FlagOtherNumbers;
var Answer;
var gamesecs;
var i;
var $;
var CountryList;

// function start game
function StartGame() { 
    // If Highscore is not in localStorage add it and put 0
    if(window.localStorage.getItem("highscore30") === null){
        window.localStorage.setItem("highscore30", "0"); 
        highscore30 = localStorage.getItem("highscore30");
    }
    
    if(window.localStorage.getItem("highscore60") === null){
        window.localStorage.setItem("highscore60", "0"); 
        highscore60 = localStorage.getItem("highscore60");
    }
    score = 0; // make score zero 
    //$("#seconds-select").remove(); // Remove Start Button
    $("#score-para").append('<p id="Score-Unit">Score: <span id="score">'+score+'</span></p>'); //Add Score paragraph 
    $("#flag-div").append('<img src="" id="flag-image">'); //Add img in div for flag 
    $("#TruthSection").append('<p id="Truth"></p>'); // add para to say if answered correctly or not
    //Insert Options selected buttons html
    $("#button1").append('<button id="option1" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    $("#button2").append('<button id="option2" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    $("#button3").append('<button id="option3" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    $("#button4").append('<button id="option4" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    //Add High Score Section

    var highscoretext = '<div id="HighScoreText"><p id="HighScoreHeader">High Score:</p><div class="row"><div class="col-6"><p id="HighScore-30-section">30 Seconds: <span id="HighScore-30">'+highscore30 +'</span></p></div><div class="col-6"><p id="HighScore-60-section">60 Seconds: <span id="HighScore-60">'+ highscore60 +'</span></p></div></div></div>';
    $("#HighScoreSection").append(highscoretext);


    //$("#HighScoreSection").append('<p id="HighScoreUnit">High Score: <span id="HighScore">'+highscore30 +'</span></p>');
    gamesecs = document.getElementById("timer-form").elements.seconds.value;
    console.log(gamesecs);
    startTimerControls(Number(gamesecs), document.querySelector("#timer")); // 
    $("#timer-form").remove(); // Remove timer options and start button form
    GetFlagAndOptions(); // Run GetFlagAndOptions Function
}

// Get Flag and Options for user to pick from and display
function GetFlagAndOptions() {
    var AnswerOptions = []; //empty all answer when making a question

    //Testing if length is 10. 9 should be selected
    //var FlagNumbersUsed = [0,1,2,3,4,5,6,7,8];
    //Testing to check which options are picked 6,7,8,9 should show
    //var FlagNumbersUsed = [0,1,2,3,4,5];

    //Pick random number within the length of CountryList Array
    //Check if the number has already been used (All used numbers in flagnumbersused array)
    //If the number has been used go again until number hasn't 
    do {
        i = Math.floor(Math.random() * CountryList.length);
        // TEST i = Math.floor(Math.random() * 10);
        FlagNumber = FlagNumbersUsed.includes(i);
        //TEST console.log(i)
        //TEST console.log(FlagNumber)
    }
    while (FlagNumber === true);
    //TEST console.log(i + " has been chosen")

    //Store Answer and put answer in the options (AnswerOptions)
    //Also Store answer in FlagNumbersUsed so we don't get the same queston twice
    Answer = CountryList[i][0];
    AnswerOptions.push(i);
    FlagNumbersUsed.push(i);

    //https://www.countryflags.io/ used to get country flag 
    //Create path with the flag selected. 
    var FlagPath = ('https://www.countryflags.io/' + CountryList[i][1] + '/shiny/64.png');
    document.getElementById("flag-image").src = FlagPath;

    //Testing 
    //console.log("Answer is " + Answer);
    //console.log("Country Code is " + CountryList[i][1]);
    //console.log(FlagPath);

    var OtherFlagOptions = []; // empty all other flag options before getting new ones
    //Loop until there are 4 options in the (AnswerOptions) array
    do {  
        //loop until you have a number that wasn't a preivous answer and isn't on the options twice
        do {
            i = Math.floor(Math.random() * CountryList.length);
            //i = Math.floor(Math.random() * 10);
            FlagNumber = FlagNumbersUsed.includes(i);
            FlagOtherNumbers = OtherFlagOptions.includes(i);
            OtherFlagOptions.push(i);
            //console.log(i);
            //console.log(FlagNumber);
            //console.log(FlagOtherNumbers)

        }
        while (FlagNumber === true || FlagOtherNumbers === true); 
        AnswerOptions.push(i);
        //console.log(i + " is a option")
    }
    while(AnswerOptions.length < 4);

    //Testing
    //console.log(AnswerOptions);

    // Sort all the options so the answer is not always the first option 
    AnswerOptions.sort(); 

    //Add answers in the answer buttons
    document.getElementById("option1").innerHTML = (CountryList[(AnswerOptions[0])][0]);
    document.getElementById("option2").innerHTML = (CountryList[(AnswerOptions[1])][0]);
    document.getElementById("option3").innerHTML = (CountryList[(AnswerOptions[2])][0]);
    document.getElementById("option4").innerHTML = (CountryList[(AnswerOptions[3])][0]);

    //Testing
    //console.log(AnswerOptions);
    //console.log("Option 1 = " + (CountryList[(AnswerOptions[0])][0]))
    //console.log("Option 2 = " + (CountryList[(AnswerOptions[1])][0]))
    //console.log("Option 3 = " + (CountryList[(AnswerOptions[2])][0]))
    //console.log("Option 4 = " + (CountryList[(AnswerOptions[3])][0]))

}

//When option is selected update score and go to next question 
function NextQuestion(AnswerClicked) {
    //If answer is correct or not 
    if (AnswerClicked === Answer) {
        //If correct
        score++; // Add a point to the score
        document.getElementById("score").textContent = score; // Update score on screen
        $("#Truth").removeClass().addClass('Correct'); // Change class to change color to green
        document.getElementById("Truth").innerHTML = "Correct"; // Write Correct on screen

    } else { 
        $("#Truth").removeClass().addClass('Incorrect');// Change class to change color to red
        document.getElementById("Truth").innerHTML = "Incorrect"; // Write Incorrect on screen
    }
    GetFlagAndOptions(); //do anther question
}

//Timer 
function startTimerControls(duration, timerDisplay) {
    var timer = duration,
        minutes, seconds;
    var timesRan = 0;
    var interval = setInterval(function () {
        timesRan += 1;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;


        if (--timer < 0) {
            timer = duration;
        }

        //if timer runs out, calls EndGame to end the game
        var finish = (Number(duration) + 1);
        if (timesRan === Number(finish)) {
            EndGame();
            clearInterval(interval);
        }
    }, 1000);
}

function EndGame() {
    UpdateHighScore();
    document.getElementById("cover-game").style.display = "initial"; // show style to cover the game
    //$("#FinalScoreSection").append('<h4 id="FinalScore">You Scored:<br>'+score+'</h4>'); // Add Score
    //var ScoresDisplay = '<div class="ScoresDisplayed"><h4 id="FinalScore">You Scored: '+score+ '</h4><div class="highscoreshow"><p>High Scores:</p><p>30 Seconds: '+highscore30+ '</p><p>60 Seconds: '+highscore60+ '</p></div></div>';
    
    var ScoresDisplay = '<div id="ScoresDisplayed"><h4 id="FinalScore">You Scored: '+score+ '</h4><div class="highscoreshow"><p>High Scores:</p><p>30 Seconds: '+highscore30+ '</p><p>60 Seconds: '+highscore60+ '</p></div></div>';
    
    $("#FinalScoreSection").append(ScoresDisplay); // Add Score
    $("#PlayAgain-section").append('<button id="PlayAgainBtn" onclick="ReplayGame()">Play Again</button>'); // Add play again button
}

function UpdateHighScore() {
    if (Number(gamesecs) === 30) {
        if (highscore30 < score) {
            window.localStorage.setItem("highscore30", score.toString());
            highscore30 = localStorage.getItem("highscore30");
            //console.log("highscore30 is " + highscore30)
        }
    } else if (Number(gamesecs) === 60) {
        if (highscore60 < score) {
            window.localStorage.setItem("highscore60", score.toString());
            highscore60 = localStorage.getItem("highscore60");
            //console.log("highscore60 is " + highscore60)
        }
    }
}

function ReplayGame() {
    document.getElementById("cover-game").style.display = "none";
    $("#ScoresDisplayed").remove();
    $("#PlayAgainBtn").remove();
    $("#Score-Unit").remove();
    $("#timer").empty();
    $("#flag-image").remove();
    $("#Truth").remove();
    $("#option1").remove();
    $("#option2").remove();
    $("#option3").remove();
    $("#option4").remove();
    $("#HighScoreText").remove();
    var formtext = '<form id="timer-form"><h3 class="game-instructions-header">Select how many seconds?</h3><label class="seconds-text"><input type="radio" class="timer-select" name="seconds" id="seconds" value=30 checked/> 30 Seconds</label><label class="seconds-text"><input type="radio" class="timer-select" name="seconds" id="seconds" value=60 /> 60 Seconds</label><button type="button" id="Startbtn" onclick="StartGame()">Start</button></form>';
    $("#seconds-select").append(formtext);
}

// Modal on page load 
function loadModal() {
    document.getElementById("cover-game").style.display = "none";
    $('#Modal').modal('show');
}