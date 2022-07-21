let array =[1,2,3,4,5,6,7]
let smallest = array[0]
let largest = array[0]

console.log(largest);
console.log (smallest);
for (let i=0; i<array.length; i++){
    let number_im_looking_at = array[i]
    if (number_im_looking_at > largest){
        largest = number_im_looking_at;
    }
    
    if (number_im_looking_at < smallest){
        smallest = number_im_looking_at
    }
    }

