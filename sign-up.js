"use strict";

const design = document.querySelector('#design');
const success = document.querySelector('#success');
const errorMessage = document.querySelector('.error-message');
const input = document.querySelector('#input');
const signUpButton = document.querySelector('#sign-up-button');
const dismissButton = document.querySelector('#Dismiss-button');
const email = document.querySelector('.email');
const gmailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[gG][mM][aA][iI][lL]\.com$/;

signUpButton.addEventListener('click', function(e){
    if(!gmailPattern.test(input.value)){
        errorMessage.classList.remove('hidden') 
        input.classList.add('active')
    }else{
        success.classList.remove('hidden')  
        design.classList.add('hidden')        
    }
    email.textContent = input.value;
})
dismissButton.addEventListener('click', function(e){
    window.location.reload();
})