
// binary search in js

function binary(target, arr) {

    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let midIndex = Math.floor((start + end) / 2)


        if (target === arr[midIndex]) {
            return midIndex
        }

        if (arr[midIndex] < target) {
            start = midIndex + 1
        } else {
            end = midIndex - 1
        }
    }

    return -1
}

console.log(binary(7, [1, 2, 3, 5, 7]))