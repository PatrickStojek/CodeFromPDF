function isEven(num){
    if(num % 2 == 0) {
        console.log(`the number:${num} is even`)
        return true
    } 
    return false
}

function showEvenNumbers(start, stop){
    let evenNumbers = []
    for(let i=start; i<stop; i++) {
        if(isEven(i)) {
            evenNumbers.push(i)
            console.log(`the current even numbers list is ${evenNumbers}`)
        }
    }
}

showEvenNumbers(0,10)