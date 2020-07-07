// function start game
function StartGame() { 
    score = 0; // make score zero 
    $("#Startbtn").remove(); // Remove Start Button
    $("#score-para").append('<p>Score: <span id="score">'+score+'</span></p>'); //Add Score paragraph 
    $("#flag-div").append('<img src="" id="flag-image">'); //Add img in div for flag 
    //Insert Options selected buttons html
    $("#button1").append('<button id="option1" class="answers"></button>');
    $("#button2").append('<button id="option2" class="answers")"></button>');
    $("#button3").append('<button id="option3" class="answers")"></button>');
    $("#button4").append('<button id="option4" class="answers")"></button>');
    // StartTimer();  Start Timer function 
    GetFlag(); // Run GetFlag Function
    GetOptions() //Run GetOptions Function
}

function GetFlag() {
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
}

function GetOptions() {
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

// Time function
function StartTimer() {
}

// Modal on page load 
function loadModal() {
    $('#Modal').modal('show');
}
