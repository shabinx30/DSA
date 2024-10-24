// class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(value){
//         this.items.push(value)
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue is empty now'
//         }

//         return this.items.shift()
//     }

//     front(){
//         if(this.isEmpty()){
//             return 'queue is empty now'
//         }

//         return this.items[0]
//     }

//     size(){
//         return this.items.length
//     }
// }


// let queue = new Queue

// console.log('size of the queue',queue.size());

// queue.enqueue(5)

// console.log(queue.items);
// console.log('size of the queue',queue.size());

// // console.log(queue.dequeue());

// console.log('first element in queue',queue.front());



//circular queue****************************

class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.currentLength === 0
    }

    isFull(){
        return this.capacity === this.currentLength
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = value
            this.currentLength ++
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }

        let item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength --
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            console.log('queue is empty');
        }
        let i
        let result = ''
        for(i = this.front;i !== this.rear;i = (i+1) % this.capacity){
            result += `${this.items[i]} `
        }
        result += `${this.items[i]}`
        console.log(result);
    }
}

let circularQueue = new CircularQueue(5)

// console.log(circularQueue.isEmpty());

circularQueue.enqueue(1)
circularQueue.enqueue(2)
circularQueue.enqueue(3)
circularQueue.enqueue(4)
circularQueue.enqueue(5)

console.log(circularQueue.isFull());


// console.log(circularQueue.items);

console.log(circularQueue.dequeue());

console.log(circularQueue.peek());

circularQueue.print()
console.log(circularQueue.dequeue());
circularQueue.print()
