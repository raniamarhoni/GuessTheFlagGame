# Guess the Flag Game
Stream Two Project: Interactive Front-End Development

This game test your knowledge on country flags. Users can decide if they want 30 seconds or 60 seconds on the game to guess as many of the country flags as possible, they will have 4 options to pick from. 

## UX
I was inspired with the game Quiz: Logo Game which I used to play a few years ago where you are shown a logo and had to guess the company with the letters there. I wanted to do something similar, so I decided to go with flags and give the user 4 options to pick from. To make it more interesting I decided to put a timer, so they have 30 or 60 seconds to guess as many flags as possible.

The aim was to create a user-friendly minimalist design where users can focus on the game and enjoy it to the full extent without any distractions. Giving the user all the information, they need at the time and all the unnecessary information to be taken out such as the instructions there is a modal in the beginning to explain the game, so they know how to play as soon as they get on the page. There is also a brief description on top of the game. 

I wanted to create a minimalistic look so the page would not be too distracting so the user would be able to focus on the game. I decided to go with a green background as it associates with nature and earth. The colour scheme is green, white, and black making sure all of it is visible when it is needed. 

I wanted the user to be able to click start to start the game and not when they get rid of the instructions so people can prepare for the game also the same when people decide to click play again they get another chance to prepare to focus on the game. 
 
With Adobe XD I was able to come up with a Skelton for phone, tablet and webpage see [design.](https://github.com/raniamarhoni/GuessTheFlagGame/blob/ea40b9ffffb597451d5859b6cca7b610fdbc7ce8/assets/design/GuessTheflagDesign.pdf) I used Adobe XD to come up with a skeleton for the game and come up with a design at the same time.

While building the game I decided to add a feature where users can pick if they want to have a 30 second game or 60 second game therefore redesigned it on Adobe XD see [updated design.](https://github.com/raniamarhoni/GuessTheFlagGame/blob/fd9303305d7e68c83d0ec8112331d617648dab7e/assets/design/Game%20Update.pdf). While redesigning I wanted to keep the design consistent so went over it and made a few changes such as all the edges to be round and all have black borders.

The game will keep track of your high score for both 30 second and 60 second game so the user will have something to beat to make sure they stay playing the game. 

During building the game I saw a few things that was not consistent in the design as the border-radius of everything had a border radius of 10px expect the game background which I later changed to have a consistent style throughout the game.

Unfortunately, while trying to get flags I did not find a way to get flags that are bigger than 64px. Therefore, the flags will need to be stretched making them blurry. 

## How to play
Pick if you want a 30 or 60 second game to guess whose flag it is. You have 4 options to pick from. 

## Features 
There is a timing function which is set by how long they want the game either 30 seconds or 60 seconds. When the timer runs out the game is over. 

Flags are obtained by https://www.countryflags.io/ and an array put into another JavaScript file ([Countryflags](https://github.com/raniamarhoni/GuessTheFlagGame/blob/afc44a844d84f94245770742e9acd3d3095fba1e/assets/js/countrylist.js)).
This will help the game to have access to lots of flags but also be able to decide which flags can show. It has been put in another JavaScript file as it is too big and don’t want the page to get overwhelmed with code.

Each question is random it will never be the same questionnaire for everyone. This is done by having an array of countries to be the answers and options and then having the answer and options selected by random but making sure the answer does not come up twice and none of the previous answers are shown in the next questions so they know what to avoid if they got that question correct.  

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
I have used console.log to check the right outcomes come out. I have left testing after each function where possible to make sure all the testing stays correct while building the rest of the game. I then cleared the testing when done with the project to avoid confusion on the code while but can revert back to the old commit if i need to test it. 

When I got family members and friends to test the game someone told me the same country came twice in the options. To double check this I changed the length to 10 on the array instead of the countrylist length and saw it happen. Then I doubled checked the same flag comes up twice which it did not, so it passed. To check the same options will not come up twice I made sure the first question can only have 6,7,8,9 in the array as the only options. I saw the other options was not been stored in the OtherFlagOptions array so the array was always empty therefore the same option will come up twice. I therfor made sure it will be pushed in the array and checked which then passed the test. 

All the coding has been put though a validator HTML, CSS, and JavaScript to make sure all errors found was fixed and no errors were uploaded. 

As the high score is added to the local storage I wanted to put zero if it hasn’t been added to the local storage yet and update it as you play so when you start the game it has a if function to check if it’s in the local storage and adds it if it’s not. To test this, I deleted it from the local storage by right clicking on the screen and going to inspect then going on the application tab, Once on the application tab I can see what is on the local storage and delete it when the high score is deleted and the page is refreshed to see if the high score will say 0 before if displays it. 

As jQuery is used a lot to remove html or append it this can be tested by the web browser to see html get removed and appended when it should be. 

As there are over 240 countries on the Country List array it would be impossible to run out of flags within the 60 seconds mark as they would need to click on 4 every second. In the future when a 2-minute game has been developed then I would need go end the game when they have reached all the flags. 

## Deployment

To site uses GitHub pages to deploy the site,  I went within the setting tab on GitHub within the options tab I scrolled down to GitHub pages and with source I selected Master Branch and clicked save to host the site. For this to work the landing page must be named index.html. When a new commit is done on the repository it will automatically update to the master branch 

To run the code locally, you can clone this repository directly into the editor of your choice by pasting (git clone https://github.com/raniamarhoni/GuessTheFlagGame) into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

If you need more information to clone the repository use this link https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository. 

To open the game the link is https://raniamarhoni.github.io/GuessTheFlagGame/ 

## Credits 

### Contents
All contents in this site was written by me.

### Media 
All flags are from https://www.countryflags.io/ see license 

### Acknowledgements 
The startTimerControls function was taken from the game https://github.com/hschafer2017/Stream-Two-Project  
