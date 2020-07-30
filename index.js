var flagnumbersused;
var highscore30 = localStorage.getItem("highscore30");
var highscore60 = localStorage.getItem("highscore60");
var score;
var answer;
var gamesecs;

// function to Start the Game 
function startgame() {
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
    //Testing the timer below
    //console.log(gamesecs);
    starttimercontrols(Number(gamesecs), document.querySelector("#timer"));
    $("#timer-form").remove(); 

    //Add Game Sections score, timer, flag, correct/incorrect & options to the game
    $("#score-para").append('<p id="score-unit">Score: <span id="score">'+score+'</span></p>'); 
    $("#flag-div").append('<img src="" alt="flag" id="flag-image">');
    $("#truthsection").append('<p id="truth"></p>');
    $("#button1").append('<button id="option1" class="answers" onclick="nextquestion(this.innerHTML)"></button>');
    $("#button2").append('<button id="option2" class="answers" onclick="nextquestion(this.innerHTML)"></button>');
    $("#button3").append('<button id="option3" class="answers" onclick="nextquestion(this.innerHTML)"></button>');
    $("#button4").append('<button id="option4" class="answers" onclick="nextquestion(this.innerHTML)"></button>');
    
    //Add High Score Section
    var highscoretext = '<div id="highscoretext"><p id="highscoreheader">High Score:</p><div class="row"><div class="col-6"><p id="highscore-30-section">30 Seconds: <span id="highscore-30">'+highscore30 +'</span></p></div><div class="col-6"><p id="highscore-60-section">60 Seconds: <span id="highscore-60">'+ highscore60 +'</span></p></div></div></div>';
    $("#highscoresection").append(highscoretext);

    // Run function to get flag and options and clear flag numbers used 
    flagnumbersused = [];
    getflagandoptions(); 
}    

// Get Flag and Options for user to pick from and display
function getflagandoptions() {
    //Empty all previous options and get flag and add it to the options
    var i;
    var answeroptions = [];
    var flagnumber;
    var flagothernumbers;
    //Testing if length is 10. 9 should be selected
    //var flagnumbersused = [0,1,2,3,4,5,6,7,8];
    //Testing to check which options are picked 6,7,8,9 should show
    //var flagnumbersused = [0,1,2,3,4,5];

    //It picks a random number within the length of CountryList Array and checks if the number selected has been used before
    //if it has it'll find another number which hasn't and stores it (answer, used flags and answer options)
    do {
        i = Math.floor(Math.random() * countrylist.length);
        // TEST 
        //i = Math.floor(Math.random() * 10);
        flagnumber = flagnumbersused.includes(i);
        //TEST 
        //console.log(i);
        //TEST 
        //console.log(flagnumber);
    }
    while (flagnumber === true);
    //TEST 
    //console.log(i + " has been chosen");
    answer = countrylist[i][0];
    answeroptions.push(i);
    flagnumbersused.push(i);

    //https://www.countryflags.io/ used to get country flag and reates path to flag
    var flagpath = ('https://www.countryflags.io/' + countrylist[i][1] + '/shiny/64.png');
    document.getElementById("flag-image").src = flagpath;

    //Testing 
    //console.log("Answer is " + answer);
    //console.log("Country Code is " + countrylist[i][1]);
    //console.log(flagpath);

    //Empty other flag options and fill in the answer options until we have 4 in the array 
    //which hasnt been an answer before and sort it so the answer isn't in the same place all the time
    var otherflagoptions = []; 
    do {  
        do {
            i = Math.floor(Math.random() * countrylist.length);
            //i = Math.floor(Math.random() * 10);
            flagnumber = flagnumbersused.includes(i);
            flagothernumbers = otherflagoptions.includes(i);
            //console.log(i);
            //console.log(flagnumber);
            //console.log(flagothernumbers);

        }
        while (flagnumber === true || flagothernumbers === true); 
        answeroptions.push(i);
        otherflagoptions.push(i);
        //console.log(i + " is a option");
    }
    while(answeroptions.length < 4);

    //Testing
    //console.log(answeroptions);
    answeroptions.sort(); 

    //Add answers in the answer buttons
    document.getElementById("option1").innerHTML = (countrylist[(answeroptions[0])][0]);
    document.getElementById("option2").innerHTML = (countrylist[(answeroptions[1])][0]);
    document.getElementById("option3").innerHTML = (countrylist[(answeroptions[2])][0]);
    document.getElementById("option4").innerHTML = (countrylist[(answeroptions[3])][0]);

    //Testing
    //console.log(answeroptions);
    //console.log("Option 1 = " + (countrylist[(answeroptions[0])][0]));
    //console.log("Option 2 = " + (countrylist[(answeroptions[1])][0]));
    //console.log("Option 3 = " + (countrylist[(answeroptions[2])][0]));
    //console.log("Option 4 = " + (countrylist[(answeroptions[3])][0]));
}

//When option is selected update score and go to next question 
function nextquestion(answerclicked) {

    //If answer is correct add point to score and update and say correct (green) if not say incorrect (red)
    if (answerclicked === answer) {
        score++;
        document.getElementById("score").textContent = score;
        $("#truth").removeClass().addClass('correct');
        document.getElementById("truth").innerHTML = "correct";
    } else { 
        $("#truth").removeClass().addClass('incorrect');
        document.getElementById("truth").innerHTML = "incorrect";
    }

    // Fill in the next question function
    getflagandoptions();
}

//Timer this function was found on https://github.com/hschafer2017/Stream-Two-Project 
function starttimercontrols(duration, timerdisplay) {
    var timer = duration,
        minutes, seconds;
    var timesRan = 0;
    var interval = setInterval(function () {
        timesRan += 1;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerdisplay.textContent = minutes + ":" + seconds;


        if (--timer < 0) {
            timer = duration;
        }

        //if timer runs out, calls endgame to end the game
        var finish = (Number(duration) + 1);
        if (timesRan === Number(finish)) {
            endgame();
            clearInterval(interval);
        }
    }, 1000);
}

//Timer Finshed end game, update and show scores and show play again button
function endgame() {
    updatehighscore();
    document.getElementById("cover-game").style.display = "initial";
    var ScoresDisplay = '<div id="scoresdisplayed"><h4 id="finalscore">You Scored: '+score+ '</h4><div class="highscoreshow"><p>High Scores:</p><p>30 Seconds: '+highscore30+ '</p><p>60 Seconds: '+highscore60+ '</p></div></div>';
    $("#finalscoresection").append(ScoresDisplay);
    $("#playagain-section").append('<button id="playagainbtn" onclick="replaygame()">Play Again</button>'); 
}

//Update High Scores
function updatehighscore() {
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
function replaygame() {
    //It stops covering the game and removes all game sections and score and appends timer selection and start form 
    document.getElementById("cover-game").style.display = "none";
    $("#scoresdisplayed").remove();
    $("#playagainbtn").remove();
    $("#score-unit").remove();
    $("#timer").empty();
    $("#flag-image").remove();
    $("#truth").remove();
    $("#option1").remove();
    $("#option2").remove();
    $("#option3").remove();
    $("#option4").remove();
    $("#highscoretext").remove();
    var formtext = '<form id="timer-form"><h3 class="game-instructions-header">Select how many seconds?</h3><label class="seconds-text"><input type="radio" class="timer-select" name="seconds" value=30 checked/> 30 Seconds</label><label class="seconds-text"><input type="radio" class="timer-select" name="seconds" value=60 /> 60 Seconds</label><button type="button" id="startbtn" onclick="startgame()">Start</button></form>';
    $("#seconds-select").append(formtext);
}

//Block the cover game style and show modal
//Used when coming onto site
function loadmodal() {
    document.getElementById("cover-game").style.display = "none";
    $('#modal').modal('show');
}