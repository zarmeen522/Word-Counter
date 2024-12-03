import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Lets begin your sentence to find out how long you go! :"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);
