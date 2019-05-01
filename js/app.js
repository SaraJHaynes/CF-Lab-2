
'use strict';

var userName = prompt('Hi, what is your name?');
        alert('Welcome, ' + userName + '! Let\'s play a guessing game!');
        console.log('The user said their name is ' + userName);

var answerPizza = prompt('Do I like pizza?').toLowerCase();
    if (answerPizza === 'no' || answerPizza === 'n') {
        alert('You are incorrect, ' + userName + '! I love pizza!');
        console.log('The user got the incorrect answer to #1');
    } else {
        alert('I love pizza! Especially pepperoni pizza!');
        console.log('The user got the correct answer to #1');
    }

var userJoe = prompt('Should I have more coffee today?').toLowerCase();
    if (userJoe === 'yes' || userJoe === 'y') {
        alert('Absolutely! Hot coffee coming up!');
        console.log('The user got the correct answer to #2');
    } else {
        alert('Maybe just one more cup...');
        console.log('The user got the incorrect answer to #2');
    }

var answerPets = prompt('Do I have a dog?').toLowerCase();
    if (answerPets === 'no' || answerPets ==='n') {
        alert('You are incorrect ' + userName + '! I have a dog!');
        console.log('The user got the incorrect answer to #3');
    } else {
        alert('Yes! My dog is named Douglas. He is a Papillon, King Charles, Chihuahua!');
        console.log('The user got the correct answer to #3');
    }
var answerSports = prompt('Is my favorite football team the Seahawks?').toLowerCase();
    if (answerSports === 'yes' || answerSports ==='y') {
        alert('Go HAWKS!');
        console.log('The user got the correct answer to #4');
    } else {
        alert('No way ' + userName + '!');
        console.log('The user got the incorrect answer to #4');
    }

var answerGames = prompt('Do I like to play board games?').toLowerCase();
    if (answerGames === "yes" || answerGames === 'y') {
        alert('Absolutely ' + userName + '!' + ' Let\'s have a game night!');
        console.log('The user got the correct answer to #5');  
    } else {
        alert('Who doesn\'t love a good game night?');
        console.log('The user got the incorrect answer for #5');

    }
    

