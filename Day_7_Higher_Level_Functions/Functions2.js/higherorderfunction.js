// HIGHER ORDER METHODS
//FOREACH
// The forEach() method iterates through an array, invoking a function you specify for each element. 
// You pass the function as the first argument to forEach(). forEach() then invokes your 
// function with three arguments: the value of the array element, the index of the array element,
// and the array itself. If you only care about the value of the array element, you can write 
//a function with only one parameter—the additional arguments will be ignored:

let data = [1,2,3,4,5] 
let sum = 0;

// Compute the sum of the elements of the array
data.forEach((value) => sum += value);          // sum == 15

// Now increment each array element
data.forEach(function(v, i, a) {
    console.log(`this is a: ${a}, this is i: ${i}, this is v: ${v}`);
    a[i] = v + 1; 
}); // data == [2,3,4,5,6]

//MAP
// The function you pass to map() is invoked in the same way as a function passed to forEach(). 
// For the map() method, however, the function you pass should return a value. Note that map() 
// returns a new array: it does not modify the array it is invoked on. If that array is sparse, 
// your function will not be called for the missing elements, but the returned array will be 
// sparse in the same way as the original array

let a = [1, 2, 3];
let new_array = a.map(x => x*x)   // => [1, 4, 9]: the function takes input x and returns x*x
console.log(new_array);

//FILTER
// The filter() method returns an array containing a subset of the elements of the array on which 
// it is invoked. The function you pass to it should be predicate: a function that returns true 
// or false. The predicate is invoked just as for forEach() and map(). If the return value is true, 
// or a value that converts to true, then the element passed to the predicate is a member of 
// the subset and is added to the array that will become the return value. Examples:

let b = [5, 4, 3, 2, 1];
let less_than_three = b.filter(x => x < 3)         // => [2, 1]; values less than 3
let every_other = b.filter((x,i) => i%2 === 0) // => [5, 3, 1]; every other value

//REDUCE
// reduce() takes two arguments. The first is the function that performs the reduction operation. 
// The task of this reduction function is to somehow combine or reduce two values into a 
// single value and to return that reduced value.

let c = [1,2,3,4,5];
let reduce_sum = c.reduce((x,y) => x+y,0)         // => 15; the sum of the values
c.reduce((x,y) => x*y, 1)          // => 120; the product of the values
c.reduce((x,y) => (x > y) ? x : y) // => 5; the largest of the values
console.log(c.reduce((x,y) => {
    if ( x > y ) {
        return x
    } else {
        return y
    }
}));


console.log(reduce_sum);

//if no initial value is given it takes the first element of the array as the initial value

//CHAINING METHODS
// Methods can be chained together, allowing you to perform multiple operations on one array concisely
const numArray = [0, 1, 2, 3, 4]

const myNum = numArray.filter(num => num > 2).map(num => num * 3).reduce((acc, curr) => acc - curr)
console.log(myNum);