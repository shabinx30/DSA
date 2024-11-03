
// bst ************

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Bst {
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         let newNode = new Node(value)
//         if(this.root == null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(root.value > newNode.value){
//             if(root.left){
//                 this.insertNode(root.left, newNode)
//             }else{
//                 root.left = newNode
//             }
//         }else{
//             if(root.right){
//                 this.insertNode(root.right, newNode)
//             }else{
//                 root.right = newNode
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         if(root.value > value){
//             if(root.value === value){
//                 return true
//             }else{
//                 return this.search(root.left, value)
//             }
//         }else{
//             if(root.value === value){
//                 return true
//             }else{
//                 return this.search(root.right, value)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }
//         return this.min(root.left)
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }
//         return this.max(root.right)
//     }
    
// }

// let bst = new Bst()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)

// bst.preOrder(bst.root)
// console.log();

// bst.inOrder(bst.root)
// console.log();

// bst.postOrder(bst.root)

// console.log(bst.search(bst.root, 5));

// console.log('minmum element',bst.min(bst.root));
// console.log('maximum element',bst.max(bst.root));





// trie in js **********************


// class Node{
//     constructor(){
//         this.children = {};
//         this.isEndOfWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }
//             node = node.children[char]
//         }
//         node.isEndOfWord = true
//     }

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return true
//     }

//     prefix(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return true
//     }
// }

// let trie = new Trie()
// trie.insert('cat')
// trie.insert('car')
// // console.dir(trie.root, {depth: null})

// console.log(trie.prefix('cat'));




// max Heap in 


// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getParentIndex(i) {
//         return Math.floor((i - 1) / 2);
//     }

//     getLeftChildIndex(i) {
//         return 2 * i + 1;
//     }

//     getRightChildIndex(i) {
//         return 2 * i + 2;
//     }

//     swap(i1, i2) {
//         [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     heapifyUp() {
//         let index = this.heap.length - 1;
//         // Adjust condition to ensure max-heap property
//         while (index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]) {
//             this.swap(index, this.getParentIndex(index));
//             index = this.getParentIndex(index);
//         }
//     }

//     remove() {
//         if (this.heap.length === 1) return this.heap.pop();

//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown();
//         return root;
//     }

//     heapifyDown() {
//         let index = 0;
//         while (this.getLeftChildIndex(index) < this.heap.length) {
//             let largerChildIndex = this.getLeftChildIndex(index);
//             if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] > this.heap[largerChildIndex]) {
//                 largerChildIndex = this.getRightChildIndex(index);
//             }

//             // Adjust condition to ensure max-heap property
//             if (this.heap[index] >= this.heap[largerChildIndex]) break;

//             this.swap(index, largerChildIndex);
//             index = largerChildIndex;
//         }
//     }

//     printHeap() {
//         console.log(this.heap.join(', '));  // Print heap elements as a comma-separated string
//     }
// }

// // Example usage
// const maxHeap = new MaxHeap();
// maxHeap.insert(10);
// maxHeap.insert(20);
// maxHeap.insert(5);
// maxHeap.insert(15);

// maxHeap.printHeap();  // Should print the max heap in heap array form

// console.log(maxHeap.remove());  // Removes and returns the root (largest element)
// maxHeap.printHeap();            // Prints the max heap after removal




//heap sort *************

function heapify(arr,n,i){
    let largest = i;
    let left = i*2+1;
    let right = i*2+2;
    if(left < n && arr[left] > arr[largest]){
        largest = left
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right
    }
    if(largest !== i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr, n, largest)
    }
}


function heapSort(arr){
    let n = arr.length;
    for(let i = n-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i = n-1;i>=0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,n,0)
    }
}

let arr = [12, 11, 13, 5, 6, 7];

heapSort(arr)

console.log(arr)
