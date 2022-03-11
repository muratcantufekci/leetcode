symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

const romanToInt = (romanChars) => {
    let result = 0;
    for (let i = 0; i < romanChars.length; i++) {
        if(symbols[romanChars[i]] < symbols[romanChars[i +1]]) {
            result = result - symbols[romanChars[i]]
        }else {
            result = result + symbols[romanChars[i]]
        } 
    }
    return result
}



