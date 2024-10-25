class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

// normal tree

function isValide(root, min = -Infinity, max = Infinity) {
    if (!root) {
        return true
    }
    if (root.value < min || root.value > max) {
        return false
    }
    return isValide(root.left, min, root.value) && isValide(root.right, root.value, max)
}

// const rtree = new Node(10)

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(20);

// console.log(isValide(root));



//binary search tree

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }
        if(root.value === value){
            return true
        }else if(value < root.value){
            return this.search(root.left, value)
        }else {
            return this.search(root.right, value)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    
    min(root){
        if(!root.left){
            return root.value
        }
        return this.min(root.left)
    }

    max(root){
        if(!root.right){
            return root.value
        }
        return this.max(root.right)
    }

    depth(){
        
    }
}

let tree = new BinarySearchTree()

// console.log('tree is empty ?',tree.isEmpty());
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)

// console.log(tree.search(tree.root,3))

tree.preOrder(tree.root)