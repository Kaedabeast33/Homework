
// let Check=true
// function hasUniqueChars(name){
    
//     for (let i=0;i<name.length;i++){
//         for(let j=1;j<name.length;i++){
//             console.log(name.charCodeAt(j))
//             console.log(name.charCodeAt(i))
//             if (name.charCodeAt(j)===name.charCodeAt(i)){
                
//             Check=false
//             break;

//             }
//         }
//     } return Check
// }

// let KaedenChecks= hasUniqueChars("Kaden")

// console.log(KaedenChecks)


const hasUniqueChars = (str)=> {
    let strarr = new Set([])
    for (let i=0;i<str.length; i++){
    strarr.add (str[i])
    }
    return str.length===strarr.size
}
console.log(hasUniqueChars("Kaee"))