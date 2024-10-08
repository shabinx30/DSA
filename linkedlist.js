// finding the samllest number among three variables ************

// let a = 10;
// let b = 30;
// let c = 20;

// console.log(a<b&&a<c?'a':b<c?'b':'c')


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let a = curr.next
            curr.next = prev
            prev = curr
            curr = a
        }
        this.head = prev
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('it is empty');
        }else{
            let curr = this.head
            let result = ''

            while (curr) {
                result += `${curr.value} `
                curr = curr.next
            }

            console.log(result);
            
        }
    }

    append(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head

            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index > this.size){
            return null
        }else{
            if(index==0){
                this.prepend(value)
            }else{
                const node = new Node(value)
                let prev = this.head

                for(let i=0;i<index-1;i++){
                    prev = prev.next
                }
                node.next = prev.next
                prev.next = node
                this.size++
            }
        }
    }

    middle(){
        if(this.isEmpty()){
            console.log('it is empty now.');
            return null
        }
        let slow = this.head
        let fast = this.head

        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        
        return slow.value
    }
}

let list = new LinkedList()

// console.log(list.isEmpty());
// console.log(list.print());

list.insert(3,0)
list.insert(5,0)
list.insert(4,1)

list.print()

list.reverse()

list.print()

console.log('middle of list',list.middle());
