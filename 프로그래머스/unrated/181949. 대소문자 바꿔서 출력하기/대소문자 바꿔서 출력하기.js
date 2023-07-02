const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const str = input[0];
    const result = swapCase(str);
    console.log(result);
});


function swapCase(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}