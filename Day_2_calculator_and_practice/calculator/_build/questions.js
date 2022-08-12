const readline = require('readline') ;
const reader = readline.createInterface ({
   input: process.stdin,
   output: process.stdout,
});

reader.question('What is your age? ', (age) => {
    console.log('Your age is: ' + age);
    reader.close();
});

