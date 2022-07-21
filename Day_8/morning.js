// let palindrome = false
// let word = "word"
// let checkForPalBackwards = checkForPalBckwrd(word)

// function checkForPalBckwrd (word){
//     for (let j=word.length-1; j>(-1);j--){
        
//         return word[j]
//     }
// }

// function checkForPal (word,checkForPalBckwrd){

// for(let i=0;i<word.length;i++){
    
//     console.log (checkForPalBckwrd)
//     if(word[i]===checkForPalBckwrd){
//         let palindrome = true;
//     }
// }
// }



// console.log(checkForPal(word,checkForPalBackwards))

// function isPal(str){
//     let newStr = (``);
//     for (let i = str.length - 1; i> -1; i--){
//         newStr+=str[i]
//         console.log(newStr)
//     }
//     if new
// }console.log (isPal("word"))



function isPal(word){
    for(let i=0; i<Math.floor(word.length/2);i++){

        if(word[i]!==word[word.length-1-i]){
            return false
        }else{
            
        }
    }return true
}
console.log(isPal("noon"))