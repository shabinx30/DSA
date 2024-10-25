class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    prefix(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char];
        }
        return true
        // console.log('from function',node.isEndOfWord);
    }

}
const trie = new Trie();
trie.insert("car");
trie.insert("cat");
console.log('search ',trie.search("cat")); // true
// console.log(trie.search("car"));
console.log('prefix ',trie.prefix('at'));

// console.dir(trie.root, { depth: null, colors: true });