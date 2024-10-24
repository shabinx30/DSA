// reversing an string wihout using any methods******************

// let str = 'hello'
// let res = ''

// for(let i=str.length-1;i>=0;i--){
//     res += str[i]
// }

// console.log(res);


// manipulating the first letter in the words**************

// let str = 'hello world.'

// let spl = str.split(' ')

// let temp

// for(let i=0;i<spl.length;i++){
//     temp = spl[i].split('')
//     temp[0] = temp[0].toUpperCase()
//     spl[i] = temp.join('')
// }

// console.log(spl.join(' '));


// finding the lengthy word in a sentence**************

// let str = 'eda mone entha varthanam'
// let spl = str.split(' ')

// let largest = 0
// let largestW 

// for(let i=0;i<spl.length;i++){
//     if(largest<spl[i].length){
//         largest = spl[i].length
//         largestW = spl[i]
//     }
// }
// console.log(largestW);

// count the vowels *************************


// let str = 'eda moneeeee'
// let regex = /[aeiou]/g
// let count = 0

// for(let i=0;i<str.length;i++){
//     if(regex.test(str[i])){
//         count++
//     }
// }

// console.log(count);


// palidrome *****************************

// let str = 'malayalam'

// let res = ''

// console.log(str.split('').reverse().join('')==str);

// for(let i= str.length-1;i>=0;i--){
//     res+=str[i]
// }

// console.log(res==str);


// count the hello from the string**************************


// let str = 'hello guys, hai hello'
// let spl = str.split(' ')
// console.log(spl);
// let count = 0

// for(let i=0;i<spl.length;i++){
//     if(spl[i]=='hello'){
//         count++
//     }
// }

// console.log(count);

// remove special characters from the string *******************

// let str = '$##9hel lo##'

// console.log(str.replace(/[^a-zA-Z0-9 ]/g,''));

// replace all the vowels with 0*****************************

// let str = 'hello guys'

// console.log(str.replace(/[aeiou]/g,0));

