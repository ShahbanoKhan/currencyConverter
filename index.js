#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.92,
    WON: 1351.26,
    INR: 83.30,
    PKR: 277.84,
    JPY: 151.638,
    CHF: 0.9019,
    ZAR: 18.68,
    RUB: 92.56,
    BGN: 1.80,
    SEK: 10.63,
    THB: 36.59
};
let userAns = await inquirer.prompt([
    {
        name: 'from',
        message: 'from',
        type: 'list',
        choices: ['USD', 'EUR', 'WON', 'INR', 'PKR', 'JPY', 'CHF', 'ZAR', 'RUB', 'BGN', 'SEK', 'THB']
    },
    {
        name: 'to',
        message: 'to',
        type: 'list',
        choices: ['USD', 'EUR', 'WON', 'INR', 'PKR', 'JPY', 'CHF', 'ZAR', 'RUB', 'BGN', 'SEK', 'THB']
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: 'number'
    }
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = Math.floor(baseAmount * toAmount);
console.log(convertedAmount);
