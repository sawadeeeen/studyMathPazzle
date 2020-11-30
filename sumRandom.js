const reverseString = function(str) {
    return str.split("").reverse().join("");
}

var op = ["+", "-", "*", "/",""];

for(let i=1000; i<10000; i++) {
    var c = String(i);
    for (j = 0; j < op.length; j++) {
        for (k = 0; k < op.length; k++) {
            for (l = 0; l < op.length; l++) {
                let y = c.charAt(3) + op[j] + c.charAt(2) + op[k] + c.charAt(1) + op[l] + c.charAt(0); 
                if (y.length > 4)
                if (i === eval(y)){
                    console.log("var = " + reverseString(String(i)));
                }
            }
        }
    }
}

