// fibonacci series to n 

function fibonacci(n){
    if(n<2){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(6));


//sum of the array

function sum(arr){
    if(arr.length==0){
        return 0
    }
    return arr[0] + sum(arr.slice(1))
}

console.log(sum([1,2,3,4,5,6,7]));

//factorial of a number 

function factorial(num){
    if(num>1){
        return num * factorial(num - 1)
    }else{
        return 1
    }
}

console.log(factorial(10));

//even number from an array

function even(arr){
    if(arr.length<=0){
        return 0
    }
    if(arr[0] % 2 == 0){
        return arr[0] + even(arr.slice(1))
    }else{
        return even(arr.slice(1))
    }
}

console.log(even([1,2,3,4,5,6,7]))

