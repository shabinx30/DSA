//merge sort

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
//     const middle = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, middle));
//     const right = mergeSort(arr.slice(middle));
//     return merge(left, right);
//   }
  
//   function merge(left, right) {
//     let result = [];
//     while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         result.push(left.shift());
//       } else {
//         result.push(right.shift());
//       }
//     }
//     return [...result, ...left, ...right];
//   }

//   console.log(mergeSort([31,10,8,2,9,11])); 
  

  // Quik sort 

// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort([31, 10, 8, 2, 9, 11]));
  

//   function BubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 swapped = true
//             }
//         }
//     }while(swapped)
//       return arr
// }

// // let arr = [-3,0,5,-8,2,1]
// console.log(BubbleSort([-3,0,5,-8,2,1]))


// var sortPeople = function (names, heights) {
//   let swapped
//   do {
//       swapped = false
//       for (let i = 0; i < (heights.length - 1); i++) {
//           if (heights[i] < heights[i + 1]) {
//               [heights[i], heights[i + 1]] = [heights[i + 1],heights[i]];

//               [names[i], names[i + 1]] = [names[i + 1], names[i]]
//               swapped = true
//           }
//       }
//   } while (swapped);
//   console.log(heights)
//   return names
// };

// console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))


console.log(33333333333333333333333333333333333333333 % 2 != 0);
