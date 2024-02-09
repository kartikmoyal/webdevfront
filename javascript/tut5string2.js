let name = "kartik"
console.log(name.length)

let name1 = "kaJSDFk";
console.log(name1.toUpperCase()); 

let name2 = "kaJSDFk";
console.log(name2.toLowerCase()); 

let name3 = "kartik";
console.log(name3.slice(1,4)); 

let name4 = "kartik";
console.log(name4.slice(3));

let name5 = "            kartik";
console.log(name5.trim());


const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false
