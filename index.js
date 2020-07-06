var FlagNumbersUsed = [];
var AnswerOptions = [];

// function start game
function StartGame() { 
    score = 0; // make score zero 
    $("#Startbtn").remove(); // Remove Start Button
    $("#score-para").append('<p>Score: <span id="score">'+score+'</span></p>'); //Add Score paragraph 
    $("#flag-div").append('<img src="" id="flag-image">'); //Add img in div for flag 
    // StartTimer();  Start Timer function 
    GetFlag(); // Run GetFlag Function
}

function GetFlag() {
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
    var FlagPath = ('https://www.countryflags.io/' + CountryList[i][1] + '/shiny/64.png');
    document.getElementById("flag-image").src = FlagPath;

    //Testing 
    console.log("Answer is " + Answer);
    console.log("Country Code is " + CountryList[i][1]);
    console.log(Flagpath);
}

// Time function
function StartTimer() {
}

// Modal on page load 
function loadModal() {
    $('#Modal').modal('show');
}
