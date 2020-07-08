var FlagNumbersUsed = [];

// function start game
function StartGame() { 
    score = 0; // make score zero 
    $("#Startbtn").remove(); // Remove Start Button
    $("#score-para").append('<p id="Score-Unit">Score: <span id="score">'+score+'</span></p>'); //Add Score paragraph 
    $("#flag-div").append('<img src="" id="flag-image">'); //Add img in div for flag 
    $("#TruthSection").append('<p id="Truth"></p>'); // add para to say if answered correctly or not
    //Insert Options selected buttons html
    $("#button1").append('<button id="option1" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    $("#button2").append('<button id="option2" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    $("#button3").append('<button id="option3" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    $("#button4").append('<button id="option4" class="answers" onclick="NextQuestion(this.innerHTML)"></button>');
    startTimerControls(30, document.querySelector("#timer")); // 
    GetFlagAndOptions(); // Run GetFlagAndOptions Function
}

// Get Flag and Options for user to pick from and display
function GetFlagAndOptions() {
    var AnswerOptions = []; //empty all answer when making a question

    //Pick random number within the length of CountryList Array
    //Check if the number has already been used (All used numbers in flagnumbersused array)
    //If the number has been used go again until number hasn't 
    do {
        i = Math.floor(Math.random() * CountryList.length);
        var FlagNumber = FlagNumbersUsed.includes(i);
    }
    while (FlagNumber === true);

    //Store Answer and put answer in the options (AnswerOptions)
    //Also Store answer in FlagNumbersUsed so we don't get the same queston twice
    Answer = CountryList[i][0];
    AnswerOptions.push(i);
    FlagNumbersUsed.push(i);

    //https://www.countryflags.io/ used to get country flag 
    //Create path with the flag selected. 
    FlagPath = ('https://www.countryflags.io/' + CountryList[i][1] + '/shiny/64.png');
    document.getElementById("flag-image").src = FlagPath;

    //Testing 
    console.log("Answer is " + Answer);
    console.log("Country Code is " + CountryList[i][1]);
    console.log(FlagPath);

    var OtherFlagOptions = [] // empty all other flag options before getting new ones
    //Loop until there are 4 options in the (AnswerOptions) array
    do {  
        //loop until you have a number that wasn't a preivous answer and isn't on the options twice
        do {
            i = Math.floor(Math.random() * CountryList.length);
            var FlagNumber = FlagNumbersUsed.includes(i);
            var FlagOtherNumbers = OtherFlagOptions.includes(i);
        }
        while (FlagNumber === true || FlagOtherNumbers === true); 
        AnswerOptions.push(i)
    }
    while(AnswerOptions.length < 4);

    //Testing
    console.log(AnswerOptions);

    // Sort all the options so the answer is not always the first option 
    AnswerOptions.sort(); 

    //Add answers in the answer buttons
    document.getElementById("option1").innerHTML = (CountryList[(AnswerOptions[0])][0])
    document.getElementById("option2").innerHTML = (CountryList[(AnswerOptions[1])][0])
    document.getElementById("option3").innerHTML = (CountryList[(AnswerOptions[2])][0])
    document.getElementById("option4").innerHTML = (CountryList[(AnswerOptions[3])][0])

    //Testing
    console.log(AnswerOptions);
    console.log("Option 1 = " + (CountryList[(AnswerOptions[0])][0]))
    console.log("Option 2 = " + (CountryList[(AnswerOptions[1])][0]))
    console.log("Option 3 = " + (CountryList[(AnswerOptions[2])][0]))
    console.log("Option 4 = " + (CountryList[(AnswerOptions[3])][0]))

}

//When option is selected update score and go to next question 
function NextQuestion(AnswerClicked) {
    //If answer is correct or not 
    if (AnswerClicked === Answer) {
        //If correct
        score++; // Add a point to the score
        document.getElementById("score").textContent = score; // Update score on screen
        $("#Truth").removeClass().addClass('Correct') // Change class to change color to green
        document.getElementById("Truth").innerHTML = "Correct" // Write Correct on screen

    } else { 
        $("#Truth").removeClass().addClass('Incorrect')// Change class to change color to red
        document.getElementById("Truth").innerHTML = "Incorrect" // Write Incorrect on screen
    }
    GetFlagAndOptions(); //do anther question
}

//Timer 
function startTimerControls(duration, timerDisplay) {
    let timer = duration,
        minutes, seconds;
    let timesRan = 0;
    let interval = setInterval(function () {
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
        if (timesRan === 31) {
            EndGame();
            clearInterval(interval);
        }
    }, 1000);
}

function EndGame() {
    //UpdateHighScore();
    document.getElementById("cover-game").style.display = "initial"; // show style to cover the game
    $("#FinalScoreSection").append('<h4 id="FinalScore">You Scored:<br>'+score+'</h4>'); // Add Score
    $("#PlayAgain-section").append('<button id="PlayAgainBtn" onclick="ReplayGame()">Play Again</button>'); // Add play again button
}

function ReplayGame() {
    document.getElementById("cover-game").style.display = "none";
    $("#FinalScore").remove();
    $("#PlayAgainBtn").remove();
    $("#Score-Unit").remove();
    $("#timer").empty();
    $("#flag-image").remove();
    $("#Truth").remove();
    $("#option1").remove();
    $("#option2").remove();
    $("#option3").remove();
    $("#option4").remove();
    $(".startbtn-section").append('<button type="button" id="Startbtn" onclick="StartGame()">Start</button>')
}

// Modal on page load 
function loadModal() {
    document.getElementById("cover-game").style.display = "none";
    $('#Modal').modal('show');
}
