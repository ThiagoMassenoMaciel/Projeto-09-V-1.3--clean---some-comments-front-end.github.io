//logic will be If the value from user that element html 
//input 
//are Not a Number (NaN) i will show error 

//If this function returns true for the input Height 
//or 
//returns True for the input Weight it means the user didn't tell me the correct data

//my way to use it
function isNotANumber(value){
    return isNaN(value);
}

// testing and understandin isNotANumber()   
console.log(` nothing ("") :${isNotANumber("")}   understood like a number `)

console.log(` nothing (23) :${isNotANumber(23)}    understood like a number`)

console.log(` nothing (2s) :${isNotANumber(`ss`)}`)

console.log(` nothing ("23") :${isNotANumber("23")}`)

console.log(` nothing (" ") :${isNotANumber(" ")}   understood like a number`)