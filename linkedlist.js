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

    removeDuplicates(){
        let curr = this.head
        let prev = null
        let set = new Set()

        while(curr){
            if(set.has(curr.value)){
                prev.next = curr.next
            }else{
                set.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }

    delete(index) {
        if (index < 0) {
            return null;
        }
        if (index == 0) {
            return (this.head = this.head.next);
        }
        let prev = this.head;
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }
        if(prev?.next?.next) {
            return (prev.next = prev.next.next)
        }
        prev.next = null
    }

    merge(l1) {
        let curr = this.head
        while(curr.next) {
            curr = curr.next
        }
        curr.next = l1
        return this.head
    }
}

let list1 = new LinkedList()
let list2 = new LinkedList()

// console.log(list.isEmpty());
// console.log(list.print());

list1.insert(3,0)
list1.insert(1,0)
list1.insert(2,1)

list2.insert(3,0)
list2.insert(5,0)
list2.insert(4,1)


// console.log(list1.head)
// console.log(list2.head)

console.dir(list1.merge(list2), {depth: null})

// list1.reverse()

// list1.print()

// console.log('middle of list1',list1.middle());
