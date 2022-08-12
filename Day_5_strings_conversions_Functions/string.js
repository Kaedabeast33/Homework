//SOME AWESOME METHODS FOR STRINGS
let practice_with_some_strings = "Hello, world"
//obtaining portions of a string
 let result = practice_with_some_strings.substring(1,4)
 console.log (result)

let result2 = practice_with_some_strings.slice(7,-1)
console.log (result2)
//split and return an array of both words -----> 
let result3 = practice_with_some_strings.split(", ")
console.log (result3)
//Bonus: what method can take an array of words and put them back together


//searching a string
//indexOf "H" ---->
console.log(practice_with_some_strings.indexOf("lo"))

//lastIndexOf "l" ----> 
console.log(practice_with_some_strings.lastIndexOf("l"))
//boolean searching funtions
//startsWith "Hello" gives us?---> 
console.log(practice_with_some_strings.startsWith("Hello"))
//endsWith "!" ---> 

//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"
//toLowerCase ---> take a guess lol
//toUpperCase ---> take another guess

//inspecting individual characters of a string
//charAt 0 ---> 
//charCodeAt 0  --->
//Bonus: find the range of lower and uppercase letters

//space trim funtctions
//bonus mess with these methods
let test = "   test "
//trim test --->
//Bonus: mess with the other trims
//trimStart and trimEnd