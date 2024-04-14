#! user/bin/env node

import inquirer from "inquirer"


const randomNumber = Math.floor (Math.random() *10 + 1)

const answer = await inquirer.prompt([
    {message: "hey guess a number",type: "number", name:"usergussednumber" }

])

if (answer.usergussednumber === randomNumber){
    console.log ("hey you win")
}

else {console.log ("you lose the chanse")}