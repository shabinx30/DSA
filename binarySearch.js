// let arr = [5,3,6,8,4,9,2,7,1]

// arr.sort((a,b)=>a-b)

// console.log(arr);


// let start = 0,end = arr.length-1,middle = 0
// middle = start + (end - start) /2
// console.log(middle,arr[middle]);


// let target = 9

// while(start <= end){
//     // console.log('hai');
    
//     middle = Math.floor((start + end) /2)
//     console.log(middle);
    
//     if(arr[middle] == target){
//         console.log('final index',middle);
//         break
//     }else if(arr[middle] > target){
//         end = middle - 1
//     }else if(arr[middle] < target){
//         start = middle + 1
//     }
// }

// console.log(-1);


// binary search in js

function binary(target, arr) {

        let leftIndex = 0
        let rightIndex = arr.length - 1
        while (leftIndex <= rightIndex) {
            let midIndex = Math.floor((leftIndex + rightIndex) / 2)
    
    
            if (target === arr[midIndex]) {
                return midIndex
            }
    
            if (target < arr[midIndex]) {
                return rightIndex = midIndex - 1
            } else {
                return leftIndex = midIndex + 1
            }
        }
    
        return -1
    }
    
    console.log(binary(7, [1, 2, 3, 5, 7]))


// linear search in js

let arr = [1,2,3,4,2,9,4,6]
let target = 9

for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        console.log(i);
        break
    }
}
