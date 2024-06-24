/* const getUserInput = function(message) {
    return prompt(message)
} */

const sumNumbersFromUser = function(userInputFn) {
    const a = userInputFn("Enter the number a:");
    const b = userInputFn("Enter the number b:");

    const sum = parseFloat(a) + parseFloat(b)
    return sum;
}

const result = sumNumbersFromUser(function(message){
    return prompt(message);
}) /// here is the callback 
console.log(result);