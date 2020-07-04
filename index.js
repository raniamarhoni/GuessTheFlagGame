//Start Game activated 
function StartGame() { 
    score = 0;
    PlayGame();
}

// function start game
function PlayGame() { 
    $("#Startbtn").remove();
    $("#score-para").append('<p>Score: <span id="score">'+score+'</span></p>');
    // StartTimer();  Start Timer function 
}

// Time function
function StartTimer() {
}

// Modal on page load 
function loadModal() {
    $('#Modal').modal('show');
}