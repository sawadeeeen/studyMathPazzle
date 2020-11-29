
const reverseString = function(str){
    return str.split("").reverse().join("");
}

let number = 11;

while (true) {
     if (parseInt(number.toString(2)) === parseInt(reverseString(number.toString(2))) && 
         parseInt(number.toString(8)) === parseInt(reverseString(number.toString(8))) && 
         parseInt(number.toString(10)) === parseInt(reverseString(number.toString(10))) )
 {
        console.log(parseInt(number.toString(10)));
        break;
    }
        number = number + 2;
}