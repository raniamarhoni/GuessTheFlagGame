# Guess the Flag Game
Stream Two Project: Interactive Front-End Development

This game test your knowledge on country flags. People have 30 seconds to guess the country flag they will have 4 options to pick from. 

## UX
I was inspired with the game Quiz: Logo Game which I used to play as a few years ago where you are shown a logo and had to guess the company with the letters there. I wanted to do something similar, so I decided to go with flags and give the user 4 options to pick from. To make it more interesting I decided to put a timer, so they have 30 seconds to guess as many flags as possible.

The aim was to create a user-friendly minimalist design where users can focus on the game and enjoy it to the full extent without any distractions. Giving the user all the information, they need at the time and all the unnecessary information to be taken out such as the instructions there is a modal in the beginning to explain the game, so they know how to play as soon as they get on the page. There is also a brief description on top of the game. 

I wanted to create a minimalistic look so the page would not be too distracting so the user would be able to focus on the game. I decided to go with a green background as it associates with nature and earth. The colour scheme is green, white, and black making sure all of it is visible when it is needed. 

I wanted the user to be able to click start to start the game and not when they get rid of the instructions so people can prepare also the same when people decide to click play again they get another chance to prepare to focus on the game. 
 
With Adobe XD I was able to come up with a Skelton for phone, tablet and webpage see [design.](https://github.com/raniamarhoni/GuessTheFlagGame/blob/ea40b9ffffb597451d5859b6cca7b610fdbc7ce8/assets/design/GuessTheflagDesign.pdf) I used Adobe XD to come up with a skeleton for the game and come up with a design at the same time.

The game will keep track of your high score so the user will have something to beat to make sure they stay playing the game. 

During building the game I saw a few things that was not consistent in the design as the border-radius of everything had a border radius of 10px expect the game background which I later changed to have a consistent style throughout the game.

Unfortunately, while trying to get flags I did not find a way to get flags that are bigger than 64px. Therefore, the flags will need to be stretched making them blurry. 

## How to play
You have 30 seconds to guess whose flag it is. You have 4 options to pick from. 

## Features 
There is a timing function which is set for 30 seconds. When the timer runs out the game is over. 

Flags are obtained by https://www.countryflags.io/ and an array put into another JavaScript file ([Countryflags](https://github.com/raniamarhoni/GuessTheFlagGame/blob/afc44a844d84f94245770742e9acd3d3095fba1e/assets/js/countrylist.js)).
This will help the game to have access to lots of flags but also be able to decide which flags can show. 

Each question is random it will never be the same questionnaire for everyone. This is done by having an array of countries to be the answers and options and then having the answer and options selected by random but making sure the answer does not come up twice and none of the previous answers are shown in the next questions so they know what to avoid if they got that question correct.  

### Features left to Implement

I would like to do a global high score to create competition. 

Also, to divide them in section such as Europe, Africa where people can play the same game but dedicated to continents. 

As there are so many flags, I want to add different variations of the game like you keep going until you get a question wrong or have different timers such as 60 seconds or 120 seconds. I want the user to have different games to pick from when opening the webpage.

## Technologies Used
1.JavaScript

2.jQuery

3.HTML

4.CSS

5.Bootstrap  
   
## Testing 
I have used console.log to check the right outcomes come out. I have left testing after each function where possible to make sure all the testing stays correct while building the rest of the game. 

While making another function to get the options the user can click, I realised it had an error as it was trying to access an array from another to make it easier I combined the 2 functions together as there was not a need to separate it. 

When I got family members to test the game someone told me the same country came twice in the options. To double check this I changed the length to 10 on the array instead of the countrylist length and saw it happen. Then I doubled checked the same flag comes up twice which it did not, so it passed. To check the same options will not come up twice I made sure the first question can only have 6,7,8,9 in the array as the only options. I saw the other options was not been stored in the OtherFlagOptions array so the array was always empty thereforethe same option will come up twice. I therfor made sure it will be pushed in the array and checked which then passed the test. 

All the coding has been put though a validator HTML, CSS, and JavaScript to make sure all errors found was fixed and no errors were uploaded. 

## Deployment
To site uses GitHub pages to deploy the site,  I went within the setting tab on GitHub within the options tab I scrolled down to GitHub pages and with source I selected Master Branch and clicked save to host the site. For this to work the landing page must be named index.html. When a new commit is done on the repository it will automatically update to the master branch 

To run the code locally, you can clone this repository directly into the editor of your choice by pasting (git clone https://github.com/raniamarhoni/GuessTheFlagGame) into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

If you need more information to clone the repository use this link https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository. 

## Credits 

### Contents
All contents in this site was written by me.

### Media 
All flags are from https://www.countryflags.io/ see [license](https://github.com/raniamarhoni/GuessTheFlagGame/blob/3a44d7e4bb9e338a4316b56adcf76933deee9f99/assets/Licenses/CountryFlags.txt)

### Acknowledgements 
The startTimerControls function was taken from the game https://github.com/hschafer2017/Stream-Two-Project 
