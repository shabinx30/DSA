class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst {
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.root == null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root,newNode){
        if(root.value > newNode.value){
            if(root.left){
                this.insertNode(root.left, newNode)
            }else{
                root.left = newNode
            }
        }else{
            if(root.right){
                this.insertNode(root.right, newNode)
            }else{
                root.right = newNode
            }
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
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        if(root.value > value){
            if(root.value === value){
                return true
            }else{
                return this.search(root.left, value)
            }
        }else{
            if(root.value === value){
                return true
            }else{
                return this.search(root.right, value)
            }
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
    
}

let bst = new Bst()
bst.insert(10)
bst.insert(5)
bst.insert(15)

// bst.preOrder(bst.root)
// console.log();

// bst.inOrder(bst.root)
// console.log();

// bst.postOrder(bst.root)

// console.log(bst.search(bst.root, 5));

console.log('minmum element',bst.min(bst.root));
console.log('maximum element',bst.max(bst.root));
