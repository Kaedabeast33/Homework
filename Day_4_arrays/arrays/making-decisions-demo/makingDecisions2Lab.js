// For problems 1-2 use the following lines of code:
var arr = [10,20,30,40,50,60]

////////// PROBLEM 1 //////////
/*
  Create a variable named 'firstItem' and set it equal to the first value of the 'arr' array.
*/

let firstItem = arr[0];
console.log (firstItem)


////////// PROBLEM 2 //////////
/*
  Remove the last item from the 'arr' array and store it in a variable named 'lastItemRemoved'. Console.log the array to verify you no longer have the last item.
*/

let lastItemRemoved = arr.pop()
console.log (arr)

////////// PROBLEM 3 //////////

// Do not edit the code below.
var family = ['Tyler', 'Jordan', 'Ryan', 'Alice', 'Ireland'];
// Do not edit the code above.

/*
  Loop through the 'family' array and console.log every item.
*/
console.log ('-----------')
family.forEach((item)=>{
  console.log(item);
})




////////// PROBLEM 4 //////////

// Do not edit the code below.
var nums = [1,2,3,6,22,98,45,23,22,12];
let evensArr = []
// Do not edit the code above.

/*
  Use a for-loop to iterate through each number in the 'nums' array, if the number is even, append it to the 'evensArr'.
*/

nums.forEach ((item)=>
{
  if (item % 2 == 0){
    console.log(item)
    evensArr.push(item)

  }
}
)
console.log (evensArr)

////////// PROBLEM 5 //////////

// Do not edit the code below.
var score = 50
// Do not edit the code above.

/*
  Determine if the letter grade of the given variable 'score'. If the variable is a 90 or above, console log an 'A', between 80 and 89, console log a 'B',
   between 70 and 79, 'C', between 60 and 69, 'D', and anything below 60 should console log an 'F'.
*/

if(score>=90){
  console.log(`A`)
}else if(score<89 &&(score>80)){
  console.log(`B`)
}else if(score<=80 & score>70){
  console.log(`C`)
}else if(score<=70 & score>60){
  console.log(`D`)}
  else if(score<=60){
    console.log(`F`)}


////////// Intermediate Problems //////////

////////// PROBLEM 6 //////////

// Do not edit the code below.
var myFavoriteNumbers = [4,8,12,16,20,24];
// Do not edit the code above.

/*
  Create a variable named 'someNum' and set it equal to the fifth value of the 'myFavoriteNumbers' array.
*/
let i =4
let someNum = myFavoriteNumbers[i]


////////// PROBLEM 7 //////////

// Subscripting (accessing values using their index) an array can fail. What happens if you subscript to the 7th element, but there are not 7 elements in the array? Let's write some code to check for that. 
// Use an if statement to check the length of the 'myFavoriteNumbers' array. If it's less than 7, log 'There are not enough elements in this array'
// to the console. If the length is more than 7, reassign the value of 'someNum' to the value of the 7th element in the array. (
 // Hint: how can you make sure that your code works for exactly 7 elements? What index do you use to get the 7th element?)

if(myFavoriteNumbers.length<7){
  console.log (`There are not enough elements in this array`);
  return
}else {someNum= myFavoriteNumbers[6]
  
}


////////// PROBLEM 8 //////////

// Do not edit the code below.
var listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// Do not edit the code above.

// Use a for-loop to iterate through 'listOfNumbers', checking to see if each number is divisible by 3. If it is, console.log '{number} is divisible by 3.'

listOfNumbers.forEach((item)=>{
if(item%3 ===0){
  console.log(item, `is divisible by 3`)
}
}
)

////////// PROBLEM 9 //////////
// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Loop backwards, starting at the end of the 'letters' array. Console log every item in the array.
*/

for(let i=4;i>=0;i--){
   console.log(letters[i])
 }


//  letters.slice().reverse().forEach((item)=>{console.log(item)
// })

// })


////////// Advanced Problems //////////

////////// PROBLEM 10 //////////
// Switch statements can be excellent alternatives to if blocks. Look up switch statements (I recommend W3 Schools) and try to implement one for the following.

// Do not edit the code below.
let letterGrade = 'D'
// Do not edit the code above.

/* Use a switch statement on 'letterGrade' and console.log the appropriate response.

If A: "The student is doing excellently."
If B: "The student is doing well."
If C: "The student is doing alright."
If D: "The student is not doing very well."
If F: "The student is failing."
If the letter grade is not one of the above letters, console.log 'Not an eligible grade.'
*/

switch(true) {
  case letterGrade === 'B':
    console.log("The student is doing well.");
    break;
  case letterGrade === 'A':
    console.log("The student is doing excellently.");
    break;
  case letterGrade === 'C':
    console.log("The student is doing alright.");
    break;
  case letterGrade === 'D':
    console.log("The Studen is alright");
    break;
}
////////// PROBLEM 11 //////////
/* The famous FizzBuzz, Devmountain style!
  Create a for loop that iterates from 1 to 100. In this for loop, using some conditional logic, 
  if the number your for loop is currently on is divisible by 3, console.log 'Dev'. 
  If the number is divisible by 5, console.log 'mountain'. 
  If the number is divisible by 5 & 3, console.log 'Devmountain'. 
  If the number is not divisible by 5 or 3, console.log the number itself. Hint: Look up the modulo operator.

  for 

 
*/
for (let i=0;i<=100;i++){
  i%15 === 0 ? console.log(i,"DevMountain")
  :
 i%3 === 0 ? console.log(i,"Dev")
:
i%5 === 0 ? console.log(i,"Mountain")
:
console.log (i);
}


let rotateNumber = 1
let arraryToRotate = [2,6,4,78,2]

arraryToRotate.shift(rotateNumber)
console.log (arraryToRotate)