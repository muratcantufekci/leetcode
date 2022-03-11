const isPalindrome =  (number) => {
    if(number >= 0){
        let result = 0;
        let takenInput = number;
        while(takenInput) {
            const digit = takenInput % 10;
            result = (result * 10) + digit;
            takenInput = Math.floor(takenInput / 10)
        }
        
        if(number == result){
            return true
        }else {
            return false
        }
    }else {
        return false
    }
}
    

const result = isPalindrome(1221)
console.log(result)