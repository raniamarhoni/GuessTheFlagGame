# Guess the Flag Game

Stream Two Project: Interactive Front-End Development

This game test your knowledge on country flags. Users can decide if they want 30 seconds or 60 seconds on the game to guess as many of the country flags as possible, they will have 4 options to pick from.  
 
To open the game the link is https://raniamarhoni.github.io/GuessTheFlagGame/

## UX
I was inspired with the game Quiz: Logo Game which I used to play a few years ago where you are shown a logo and had to guess the company with the letters there. I wanted to do something similar, so I decided to go with flags and give the user 4 options to pick from. To make it more interesting I decided to put a timer, so they have 30 or 60 seconds to guess as many flags as possible.

The aim was to create a user-friendly minimalist design where users can focus on the game and enjoy it to the full extent without any distractions. Giving the user all the information, they need at the time and all the unnecessary information to be taken out such as the instructions there is a modal in the beginning to explain the game, so they know how to play as soon as they get on the page. There is also a brief description on top of the game. 

I wanted to create a minimalistic look so the page would not be too distracting so the user would be able to focus on the game. I decided to go with a green background as it associates with nature and earth. The colour scheme is green, white, and black making sure all of it is visible when it is needed. 

I wanted the user to be able to click start to start the game and not when they get rid of the instructions so people can prepare for the game also the same when people decide to click play again they get another chance to prepare to focus on the game. 
 
With Adobe XD I was able to come up with a Skelton and design for the game on phone, tablet and webpage see [design.](https://github.com/raniamarhoni/GuessTheFlagGame/blob/ea40b9ffffb597451d5859b6cca7b610fdbc7ce8/assets/design/GuessTheflagDesign.pdf)

While building the game I saw a few things that was not consistent in the design as the border-radius was 10px expect for the game background which I later changed to have a consistent style throughout the game.

While building the game I decided to add a feature where users can pick if they want to have a 30 second game or 60 second game therefore redesigned it on Adobe XD see [updated design.](https://github.com/raniamarhoni/GuessTheFlagGame/blob/fd9303305d7e68c83d0ec8112331d617648dab7e/assets/design/Game%20Update.pdf) While redesigning I wanted to keep the design consistent so went over it and made a few changes such as all the edges to be round and all have black borders.

While building the game I decided to change some of the colours on sections of the game such as the colour text on the options of countries to white instead of black as I think it looked a lot more appealing.  

The game will keep track of your high score for both 30 second and 60 second game so the user will have something to beat to make sure they stay playing the game. 

Unfortunately, while trying to get flags I did not find a way to get flags that are bigger than 64px. Therefore, the flags will need to be stretched making them blurry. 

## How to play

Pick if you want a 30 or 60 second game to guess whose flag it is. You will be shown a flag and 4 countries to pick from. Pick who the flag belongs too to score a point. Score as many points as possible until the timer finishes. 

## Features 

There is a timing function which is set by how long the user wants the timer for the game either 30 seconds or 60 seconds. When the timer runs out the game is over. 

Flags are obtained by https://www.countryflags.io/ and an array put into another [JavaScript file](https://github.com/raniamarhoni/GuessTheFlagGame/blob/afc44a844d84f94245770742e9acd3d3095fba1e/assets/js/countrylist.js)). 
This will help the game to have access to lots of flags to create the questions. It has been put in another JavaScript file as it is too big and I don’t want the page to get overwhelmed with code.

Each question is random it will never be the same questionnaire for everyone. This is done by having an array of countries to be the answers and options and then having the answer and options selected by random but making sure the same flag does not come up twice on a questionnaire.  

### Features left to Implement

I would like to do a global high score to create competition. 

Also, to divide them in section such as Europe, Africa where people can play the same game but dedicated to continents. 

As there are so many flags, I want to add different variations of the game for example the game will end when you get a question wrong or have more timers such as 120 seconds.

## Technologies Used

1.JavaScript

2.jQuery

3.HTML

4.CSS

5.Bootstrap  

## Testing
 
### Jasmine Testing 
I wanted to do Jasmine testing, but the code did not suit the jasmine testing framework where it would be effective enough therefore all the tests are done manually 
 
### Validator 
All the coding has been put though a validator HTML, CSS, and JavaScript to make sure all errors found was fixed and no errors were uploaded. I also tested the HTML during each stage of the game as the game uses jQuery to remove and append HTML. CSS and JavaScript will not change therefore I only test the original file. (See below for more information on how I checked the appended HTML)
 
### Testing the HTML during each stage as it uses jQuery 
The games use’s jQuery to remove and append HTML on the multiple stages within the game. I made sure this is working effectively by playing the game and making sure sections are getting removed and added at the right time. I also checked the styles on different screens as well such as iPhone, iPad, iPad pro and webpage to check the responsive design work too.  
 
To check the HTML does not have any errors when it has appended HTML, I did the following below:
1.	Right click on the site and click on inspect
2.	Go to the Elements tab
3.	You should see the HTML written on the ride side
4.	Go to the html div on top and click on the 3 dots and select copy element
5.	Paste the element onto a html validator 
6.	This should point out any errors on the html 
 
I found a few errors which have been fixed on appended HTML 
1.	The img of the flag not having an alt
2.	Old HTML written which I forgot to take out as an id was put onto 2 different sections which was changed to a class for best practice therefor the id was taken out the appended HTML.
 
### Testing Local Storage and High Score updates (4 tests) 
The High Scores are stored in the local storage. If the user has not been on the site before it'll make the variable 0 to test this, you can see the local storage and delete it to see if this works. I accessed the local storage from google chrome and did the following below 
1.	Right click on the site and click on inspect
2.	Go to the Application tab 
3.	On the right side under storage look up local storage and click on the link below
4.	You should see all the local storage from the site 
5.	Delete it and refresh the page 
6.	If you play the game and it says zero on the high scores its passed test 1 
7.	If you complete a game on both timers and score 1 at least and it updates it at the end of the game, it has passed test 2 
8.	If you replay the game and your high score is still there at the bottom (both timers) it has passed test 3 
9.	If you refresh the site and play and it is still there at the bottom (both timers) it has passed test 4 
 
### Testing the timer and endgame function (3 tests)
I tested the timer as the seconds on the timer are under the variable "gamesecs" it is a global variable as will be needed later to update the high scores. 
 
1.	To test the timer on the testing branch there is a console.log on the variable gamesecs (located in the startgame function under the score variable). If it says the right number of seconds on both games on the console log it has passed test 1. 
2.	If the game ends when the timer has finished it has passed test 2
3.	When the game ends and the game has been covered, and it says your score and your high scores it has passed test 3
 
### Manual Testing done on Console log
When creating the game, I did not want users to get the same flag twice therefor whenever a flag has been displayed it goes onto the 'flagnumberused' array. So, when they go onto the next question if it selects the same flag it would go through the loop and will fail therefore will find another flag until it finds one that has not been used before. Also wanted to do the same with the options by putting all the options on the 'otherflagoptions' the same option will not come up twice.
 
Although when I got my family and friends to test it someone had said that Fiji came up twice on the options and when reviewing the code I saw that I forgot to push the country option chosen into the array 'otherflagoptions' therefor the array would always be blank and wouldn't work. So, I edited the coding and added extra testing to make sure this does not happen again. 
 
I then realised when going back on the code it was in the wrong place as it would find a country and before checking it was a country that hasn't been repeated it would already add it to the array. This can create duplicates in the array and therefore was placed after it was certain that we can have that country as an option.
 
Wherever possible I left testing through the console log to make sure if the game changes I can still run these tests to make sure the game works. I then wanted to make sure I still have access to these tests while keeping the code clean for others to see. To make this happen I added another branch and added all the testing with JavaScript on there then when ready I can take out all the testing comments and push it onto the master branch.
 
### Manual testing that have been done 
All the testing comments are in the testing branch. They have all been labelled so you know which comments belong to which tests. All the tests are detailed below to explain what they check.  
 
#### Test 1 to make sure the same flag will not come up twice.

To check the flags do not get repeated I made sure only number 9 in the array can get picked out of all of them numbers. I did this by changing what is in the 'flagnumberused' to every number between 0 to 8. Then on the loop comment out the random number picked between 0 to the 'countrylist' array and do the same code but up to the length 10. Afterwards Console log ‘i’ and ‘flagnumber’ and it should come up as 9 and false. The same flag should come up every time you click an option if this all happens it has passed the test.
 
#### Test 2 to make sure the flag path is correct, and the answer is in the options 

To check the flag path is correct in the ‘getflagandoptions’ function after the variable ‘flagpath’ has been added.  I put a console log on what the answer is, the country code is and the link to get the flag image. If the flag image is correct it will have the country code in the middle. Also, if the answer is in the options then it has passed the test. 
 
#### Test 3 to make sure the country options are all different and won’t come up twice 
To check the country options are all different so only 6, 7, 8 and 9 can be the only options at every question I did the following. I Changed what is in the 'flagnumberused’, so it has every number between 0 to 5 (located in the ‘getflagandoptions’ function under the first few variables’).On the loop to get the answer/flag I comment out when it picks a random number between zero and the 'countrylist' array length. Then I added the same code but to the length of 10. At the end of the do section of the loop I did a console log for 'i', 'flagnumber' and ‘flagothernumbers’. 

After on the do while loop to get the options I do the same thing as said above and comment out when it picks a random number between zero and the 'countrylist' array length and do the same code but to the length of 10. At the end of the do section of the loop I did a console log for 'i' and 'flagnumber' and ‘flagothernumbers’

On the while section of the do while loop afterwards I did a console log for ‘i’ and said this is the one that has passed the test. After the do while loop to get 4 options to show I did a console log for ‘answeroptions’. This console log will show flags that have failed the test as they have already been used and only options 6, 7, 8 and 9 come up as every option if it does this then the test has passed. 

 
#### Test 4 To make sure the answer is in the options
I did a console log for answer at the end of the getflagandoptions function and if the answer is always in the options it has passed
 
#### Test 5 To make a score is added and to make sure it correct and incorrect show up correctly
On the nextquestion function at the beginning I console log the current score Then during the if section where it says it is correct, I console log the answer to say it is correct and the new score. If the answer matches what I clicked, the score goes up and it says correct on the screen then it passed the test

On the else section of the if I console log what I clicked, the answer and the score. If it says incorrect on the screen, the answer was one of the options and the score stays the same it has passed the test. 
 
### Testing variables within a function in Chrome Dev Tools 
I used Chrome Dev Tools to test variables are working during a function to do this I did the following below and how it changes during the game
1.	Right click on the site and click on inspect
2.	Go onto the source tab 
3.	I opened the index.js 
4.	I paused the code where I wanted to see certain variables to pause go onto to the top right side and click the deactivate breakpoints symbol the second last symbol and go onto the code on the side and click on the line number where you want to pause the code 
5.	I went onto the watch dropdown on the right side and added variables I wanted to see
6.	Then I went onto the site and played the game where I know where the function will stop due to the pause on the DOM Breakpoints. 
7.	I can then check the variables are correct by clicking the refresh button on the side. 

 While testing this I realised when the game is being replayed it doesn't clear the variable "flagnumbersused" therefore when a user replays the game they can run out of flags as they have been through all of them. To correct this when they restart a game it will clear the variable to avoid this happening.  
 
Ad there is 240 countries on the 'countrylist' array it would be impossible to run out of flags within the 60 second mark as they would need to click on it 4 times every second. In the future when a 2-minute game has been developed then I would need to end the game when they have reached all the flags. 
 
## Deployment
To site uses GitHub pages to deploy the site,  I went within the setting tab on GitHub within the options tab I scrolled down to GitHub pages and with source I selected Master Branch and clicked save to host the site. For this to work the landing page must be named index.html. When a new commit is done on the repository it will automatically update to the master branch.

Later on I changed it to have 2 branches so now whenever a new commit is done I push it to the testingcomments branch by typing ‘git push -u origin testingcomments’ into the terminal if I wish to put this on the master branch too I go onto GitHub and within the project a notification comes up to compare & pull request. If happy with the changes to be put onto the master branch I click create a pull request, click merge pull request and then click confirm merge to add it onto the master branch. 

To run the code locally, you can clone this repository directly into the editor of your choice doing the following below 
1.	Open a terminal in the editor of your choice 
2.	Paste (git clone https://github.com/raniamarhoni/GuessTheFlagGame) onto the terminal
3.	To cut ties with this GitHub repository type (git remote rm origin) into the terminal 
4.	You will have be able to edit the GitHub repository without it being linked into this one. 

If you need more information to clone the repository use this link https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository. 

To open the game the link is https://raniamarhoni.github.io/GuessTheFlagGame/ 
## Credits 

### Contents
All contents in this site was written by me.

### Media 
All flags are from https://www.countryflags.io/ see license 

### Acknowledgements 
The startTimerControls function was taken from the game https://github.com/hschafer2017/Stream-Two-Project  
