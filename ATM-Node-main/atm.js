"use strict"
const account = require("./account");
const wallet = require("./wallet");
const prompt = require("prompt-sync")();

function getBalance(){
    console.log(`Your current balance is $${account.balance}.`);
}

function withdraw(){
    let withdrawAmount = parseInt(prompt("How much would you like to withdraw?\t"));
    if (withdrawAmount <= account.balance){
        account.balance = account.balance - withdrawAmount;
        wallet.amount = wallet.amount + withdrawAmount;
        console.log(`You have withdrew $${withdrawAmount}. Your new balance is $${account.balance}`);
    }
    else{
        console.log(`Insufficent funds. Please Try Again`);
        withdraw();
    }
}

function deposit(){
    let depositAmount = parseInt(prompt("How much would you like to deposit?\t"));
    if (depositAmount <= wallet.amount ){
        account.balance = account.balance + depositAmount;
        wallet.amount = wallet.amount - depositAmount;
        console.log(`You have deposited $${depositAmount}. Your new balance is $${account.balance}`);
    }
    else{
        console.log("Please enter a valid amount");
        deposit();
    }
}

function validatePin(){
    let userPin = parseInt(prompt("Enter Your Pin\t"));
    if(userPin === account.pin){
        console.log("Pin Entered Correctly");
    }
    else{
        console.log("Incorrect Pin. Try Again");
        validatePin()
    }
}

//exports
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;