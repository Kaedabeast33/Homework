let turtwig = "Kaeden"
let gengar = "Lukas"

if(turtwig === "Kaeden"){
    console.log ("This is Kaeden's Pokemon");
} else 
console.log("This is Lukas' Poekmon");

let turtwigAtk = 30
let gengarAtk = 40

let turtwigHP = 300
let gengarHP = 220

if(turtwigAtk > gengarAtk) {
    gengarHP -= turtwigAtk
    console.log (gengarHP)
} else if (gengarAtk>turtwigAtk){
    turtwigHP -= gengarAtk
    console.log(`Turtwig's HP is ${turtwigHP}`);
}else (gengarAtk===turtwigAtk)
{
 console.log = (`They both Missed`);
}



let furySwipes = 35

for (i=0; i<3; i++){
    console.log(`Gengar used Fury Swipes!`);
    turtwigHP -= furySwipes;
    console.log (`Turtwigs HP is now ${turtwigHP}`);
}


let lowKick = 60

for(i=0; i<2; i++){
    console.log("Turtwig used Low Kick!")
    gengarHP -= lowKick
    console.log("Gengar's Hp is now " + gengarHP
}
