numbers = [2, 4, 9, 2, 0, 16, 24]
var largest = numbers[0];
var smallest = numbers[0];
for (var i = 0; i < numbers.length; i++){
    var temp = numbers[i];
    if (temp > largest)
    {
        largest = numbers[i];
    }
    if (temp < smallest)
    {
        smallest = numbers[i];
    }
}
console.log(largest);
console.log(smallest);