let array1= [0,0];
let array2=[2,2];
let array3=[3,-2,-1];

let sum=0
let sum2=0
let sum3=0

for (i=0;i<array1.length;i++){
let one=array1[i];
     sum += one;
}
console.log(sum)
if(sum===0){
    console.log("true")
}else{
    console.log("false")}

for (i=0;i<array2.length;i++){
    sum2 += array2[i];
}console.log(sum2)
    if(sum2===0){
        console.log("true")
    }else{console.log("false")}

 for (i=0;i<array3.length;i++){
     sum3+= array3[i];
 }
console.log(sum3)
    if (sum3===0){
        console.log("true")
    }else{console.log("false")}
