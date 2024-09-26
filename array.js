// find secnnd largest  element from an array*****************************

// function findTheSecondLargest(arr){
//     if(arr.length<2){
//         return null
//     }else{

//         let first = -Infinity
//         let second = -Infinity

//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>first){
//                 second = first
//                 first = arr[i]
//             }else if(arr[i] > second && arr[i] != first){
//                 second = arr[i]
//             }
//         }

//         return second
//     }
// }

// console.log(findTheSecondLargest([1,5,3,5,2,8,6]));

// reversing an array without using in build methods***************************

// let nums = [1,2,3]
// let temp = 0
// for(let i=0;i<nums.length/2;i++){
//     temp = nums[i]
//     nums[i] = nums[(nums.length-1)-i]
//     nums[(nums.length-1)-i] = temp
// }

// console.log(nums);


// finding the second smallest element from an array******************

// let arr = [0,3,4,1,9,3]

// let first = Infinity
// let second = Infinity

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<first){
//         second = first
//         first = arr[i]
//     }else if(arr[i]<second && arr[i] != first){
//         second = arr[i]
//     }
// }

// console.log(second);


// find the third largest number from the array ***********************

// let arr = [2,5,1,4,5,8,3,2]

// let first = -Infinity,second = -Infinity,third = -Infinity

// for(let num of arr){
//     if(num > first){
//         third = second
//         second = first
//         first = num
//     }else if(num > second && num < first){
//         third = second
//         second = num
//     }else if(num > third && num < second){
//         third = num
//     }
// }

// console.log(first,second,third);


// extract all string from the array

// let arr = ['hello',3,5,'world',7]

// console.log(arr.filter((val)=> typeof(val)=='string'));

// remove the special characters from the array************************

// let arr = ['$',5,'d','@',4,'%']

// arr.forEach((ele,i)=>{
//     if((/[^a-zA-Z0-9 ]/g).test(ele)){
//         arr.splice(i,1)
//     }
// })

// console.log(arr);


// find the missing number from the array**************************8

// let arr = [0, 1, 3, 4, 5, 6, 8, 12];
// let res = []

// let min = Math.min(...arr)
// let max = Math.max(...arr)

// for(let i=min;i<max;i++){
//     if(!arr.includes(i)){
//         res.push(i)
//     }
// }

// console.log(res);

// convert arr to object **********************************

// let arr = [[0,'hello'],[1,'world'],[2,'!']]

// console.log(Object.fromEntries(arr));


let arr = [1,2,3,4,5,6,7,8,9]


// for(let i=0;i<arr.length;i++){
//     if()
// }