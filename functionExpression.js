function getUserInput(messageForUser) {
    const userInput = prompt(messageForUser)
    return userInput
}

const fn = getUserInput;

const inputFromUser = fn("Ile masz lat?");
console.log(InputFromUser) 


/// other way of assigning the variable 

const fn2 = function getUserInput(messageForUser) {
    const userInput = prompt(messageForUser)

    return userInput
}

const inputFromUser2 = fn2("Where are you from?")
console.log(inputFromUser2)

