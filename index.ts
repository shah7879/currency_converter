import inquirer from 'inquirer';

const currency: any  ={
    USD:1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer= await inquirer.prompt(
    [
        {
            name: "from",
            message: "enter from currency",
            type: "list",
            choices: ['USD','EUR','GBP','INR','PKR']



        },
        {
           name: "to",
           message: "enter from currency",
           type: "list",
           choices: ['USD','EUR','GBP','INR','PKR']

        },
        {
            name: 'amount',
            message: "enter your amount",
            type: 'number',
        }


    ]
);
let fromamount = currency[user_answer.from]// exchange rate
let toamount = currency[user_answer.to]// exchange rate
let amount = user_answer.amount
let baseamount = amount / fromamount //usd base currency
let convertedamount = baseamount * toamount
console.log(convertedamount);
console.log(fromamount);
console.log(toamount);
console.log(amount);