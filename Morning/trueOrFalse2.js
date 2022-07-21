let array=[28,12,43,-12,28];

addToZero=false;

for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        console.log(array[j]+array[i])
        if(array[j]+array[i]===0){
        
            
            console.log(true);
            break;
            
        }
    }
}