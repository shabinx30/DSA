// class Stack{
//     constructor(){
//         this.items = []
//         this.count = 0
//     }

//     isEmpty(){
//         return this.count == 0
//     }

//     push(value){
//         this.items[this.count] = value
//         this.count ++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 'stack is empty now'
//         }
//         this.count --
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 'stack is empty now'
//         }

//         return this.items[this.count-1]
//     }

//     size(){
//         return this.count
//     }
// }

// let stack = new Stack()

// console.log(stack.size());

// stack.push(5)
// stack.push(6)
// stack.push(7)
// // console.log(stack.items);


// stack.pop()
// // console.log(stack.items);
// console.log(stack.isEmpty());

// console.log('size of the stack',stack.size());
// console.log('peek element in the stack',stack.peek());



// queue using stack 

class QueueWithStack{
    constructor(){
        this.s1 = []
        this.s2 = []
    }

    enqueue(value){
        this.s1.push(value)
    }

    isEmpty(){
        return this.s1.length == 0
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Queue is empty now'
        }

        while(this.s1.length > 0){
            this.s2.push(this.s1.pop())
        }

        this.s2.pop()

        while(this.s2.length > 0){
            this.s1.push(this.s2.pop())
        }
    }
}

let queue = new QueueWithStack

queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log('s1 before enqueue',queue.s1);


queue.dequeue()

console.log('s1 after enqueue',queue.s1);
console.log('s2 after enqueue',queue.s2);


// class midOfStack{
//     constructor(){
//         this.s1 = []
//         this.s2 = []
//         this.count = 0
//     }

//     isEmpty(){
//         return this.count === 0
//     }

//     push(value)    {
//         this.s1[this.count] = value
//         this.count ++
//     }

//     pop(){
//         if(this.isEmpty()){
//             console.log('stack is empty');
//         }else{
//             this.s1[this.count] = null
//             this.count --
//         }
//     }

//     removeMid(){
//         if(this.isEmpty()){
//             console.log('stack is empty');
//         }else{
//             let mid = Math.floor(this.count/2)
//             for(let i=0;i<mid;i++){
//                 // console.log(i);
                
//                 this.s2.push(this.s1.pop())
//             }
//             this.s1.pop()
//             for(let i=0;i<mid;i++){
//                 this.s1.push(this.s2.pop())
//             }
//         }
//     }
// }

// let stack = new midOfStack()

// stack.push(1)
// stack.push(2)
// stack.push(3)

// stack.removeMid()

// console.log(stack.s1);
// console.log(stack.s2);
