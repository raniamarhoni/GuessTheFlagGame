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

// function to Start the Game 
function StartGame() {
    // If the Highscores are not in localStorage add it and put 0 and make score 0
    if(window.localStorage.getItem("highscore30") === null){
        window.localStorage.setItem("highscore30", "0"); 
        highscore30 = localStorage.getItem("highscore30");
    }
    
    if(window.localStorage.getItem("highscore60") === null){
        window.localStorage.setItem("highscore60", "0"); 
        highscore60 = localStorage.getItem("highscore60");
    }
    score = 0;

    // Have selected timer set and start form removed
    gamesecs = document.getElementById("timer-form").elements.seconds.value;
    startTimerControls(Number(gamesecs), document.querySelector("#timer"));
    $("#timer-form").remove(); 

    //Add Game Sections score, timer, flag, correct/incorrect & options to the game
    $("#score-para").append('<p id="Score-Unit">Score: <span id="score">'+score+'</span></p>'); 
    $("#flag-div").append('<img src="" id="flag-image">');
    $("#TruthSection").append('<p id="Truth"></p>');
    $("#button1").append('<button id="option1" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    $("#button2").append('<button id="option2" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    $("#button3").append('<button id="option3" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    $("#button4").append('<button id="option4" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    
    //Add High Score Section
    var highscoretext = '<div id="HighScoreText"><p id="HighScoreHeader">High Score:</p><div class="row"><div class="col-6"><p id="HighScore-30-section">30 Seconds: <span id="HighScore-30">'+highscore30 +'</span></p></div><div class="col-6"><p id="HighScore-60-section">60 Seconds: <span id="HighScore-60">'+ highscore60 +'</span></p></div></div></div>';
    $("#HighScoreSection").append(highscoretext);

    // Run function to get flag and options 
    GetFlagAndOptions(); 
}    

// Get Flag and Options for user to pick from and display
function GetFlagAndOptions() {
    //Empty all previous options and get flag and add it to the options
    var AnswerOptions = [];

    //It picks a random number within the length of CountryList Array and checks if the number selected has been used before
    //if it has it'll find another number which hasn't and stores it (answer, used flags and answer options)
    do {
        i = Math.floor(Math.random() * CountryList.length);
        FlagNumber = FlagNumbersUsed.includes(i);
    }
    while (FlagNumber === true);

    Answer = CountryList[i][0];
    AnswerOptions.push(i);
    FlagNumbersUsed.push(i);

    //https://www.countryflags.io/ used to get country flag and reates path to flag
    var FlagPath = ('https://www.countryflags.io/' + CountryList[i][1] + '/shiny/64.png');
    document.getElementById("flag-image").src = FlagPath;

    //Empty other flag options and fill in the answer options until we have 4 in the array 
    //which hasnt been an answer before and sort it so the answer isn't in the same place all the time
    var OtherFlagOptions = []; 
    do {  
        do {
            i = Math.floor(Math.random() * CountryList.length);
            FlagNumber = FlagNumbersUsed.includes(i);
            FlagOtherNumbers = OtherFlagOptions.includes(i);
            OtherFlagOptions.push(i);

        }
        while (FlagNumber === true || FlagOtherNumbers === true); 
        AnswerOptions.push(i);
    }
    while(AnswerOptions.length < 4);
    AnswerOptions.sort(); 

    //Add answers in the answer buttons
    document.getElementById("option1").innerHTML = (CountryList[(AnswerOptions[0])][0]);
    document.getElementById("option2").innerHTML = (CountryList[(AnswerOptions[1])][0]);
    document.getElementById("option3").innerHTML = (CountryList[(AnswerOptions[2])][0]);
    document.getElementById("option4").innerHTML = (CountryList[(AnswerOptions[3])][0]);
}

//When option is selected update score and go to next question 
function NextQuestion(AnswerClicked) {

    //If answer is correct add point to score and update and say correct (green) if not say incorrect (red)
    if (AnswerClicked === Answer) {
        score++;
        document.getElementById("score").textContent = score;
        $("#Truth").removeClass().addClass('Correct');
        document.getElementById("Truth").innerHTML = "Correct";
    } else { 
        $("#Truth").removeClass().addClass('Incorrect');
        document.getElementById("Truth").innerHTML = "Incorrect";
    }

    // Fill in the next question function
    GetFlagAndOptions();
}

//Timer this function was found on https://github.com/hschafer2017/Stream-Two-Project 
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

//Timer Finshed end game, update and show scores and show play again button
function EndGame() {
    UpdateHighScore();
    document.getElementById("cover-game").style.display = "initial";
    var ScoresDisplay = '<div id="ScoresDisplayed"><h4 id="FinalScore">You Scored: '+score+ '</h4><div class="highscoreshow"><p>High Scores:</p><p>30 Seconds: '+highscore30+ '</p><p>60 Seconds: '+highscore60+ '</p></div></div>';
    $("#FinalScoreSection").append(ScoresDisplay);
    $("#PlayAgain-section").append('<button id="PlayAgainBtn" onclick="ReplayGame()">Play Again</button>'); 
}

//Update High Scores
function UpdateHighScore() {
// Check which timer game was played then if score is higher than highscore update on screen and local storage
    if (Number(gamesecs) === 30) {
        if (highscore30 < score) {
            window.localStorage.setItem("highscore30", score.toString());
            highscore30 = localStorage.getItem("highscore30");
        }
    } else if (Number(gamesecs) === 60) {
        if (highscore60 < score) {
            window.localStorage.setItem("highscore60", score.toString());
            highscore60 = localStorage.getItem("highscore60");
        }
    }
}

// Replay Game Function
function ReplayGame() {
    //It stops covering the game and removes all game sections and score and appends timer selection and start form 
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

//Block the cover game style and show modal
//Used when coming onto site
function loadModal() {
    document.getElementById("cover-game").style.display = "none";
    $('#Modal').modal('show');
}