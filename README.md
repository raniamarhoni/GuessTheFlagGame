# Guess the Flag Game
Stream Two Project: Interactive Front-End Development

This game test your knowledge on country flags. 
People have 30 seconds to guess the country flag they 
will have 4 options to pick from. 

## UX
I was inspired with the game Quiz: Logo Game which I used 
to play as a child where you are shown a logo and had to 
guess the company with the l etters there. I wanted to do 
something similar so I decided to go with flags and give
the user 4 options to pick from. To make it more interesting
I decided to put a timer, so they have 30 seconds to guess 
as many flags as possible.

The game will keep track of your high score so the user 
will have something to beat. 

I wanted to create a minimalistic look so the page 
would not be too distracting. and the user would be 
able to focus on the game. 

I used adobe XD to decide the design here is the [design](https://github.com/raniamarhoni/GuessTheFlagGame/blob/f2ca1ea5b6c6cf5621ee7e22341138bf28aef229/assets/design/Game.xd)

I included a modal which explains the game, so they know 
how to play as soon as they get on the page. 
There is also a small description on top of the game. 

## How to play
 You have 30 seconds to guess whose flag it is. 
 You have 4 options to pick from. 

## Features 
There is a timing function which is set for 30 seconds. 
When the timer runs out the game is over. 

Flags are obtained by https://www.countryflags.io/ and 
a array put into another js file 
([Countryflags](https://github.com/raniamarhoni/GuessTheFlagGame/blob/afc44a844d84f94245770742e9acd3d3095fba1e/assets/js/countrylist.js)).
This will help the game to have access to lots of flags but 
also be able to decide which flags can show. 

High Score ... 

### Features left to Implement


## Technologies Used
1.JavaScript

2.jQuery

3.HTML

4.CSS

5.Bootstrap  

## Testing 
I've used console.log to check the right outcomes come out.
I've left testing after each function to make sure all the 
testing stays correct while building the rest of the game.

While making another function to get the options the user 
can click, I realised it had an error as it was trying to 
access an array from another to make it easier i combined the 
2 functions together as there wasn't a need to seperate it. 

When I got family members to test the game someone told me 
the same country came twice in the options. To double check this 
I changed the length to 10 on the array instead of the countrylist 
length and saw it happen. Then I doubled checked the same flag comes 
up twice which it didn't so it passed. To check the same options 
won't come up twice I made sure the first question can only have 6,7,8,9 
in the array as the only options. I saw the other options wasn't been stored 
in the OtherFlagOptions array so the array was always empty therfor 
the same option will come up twice. I therfor made sure it will be 
pushed in the array and checked which then passed the test. 

## Deployment

## Credits 

### Contents

### Media 

### Acknowledgements 
