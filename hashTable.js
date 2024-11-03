class HashTable{
    constructor(size){
        this.table = new Array(size)
    }

    hash(key){
        let hashValue = 0
        for(let i=0;i<key.length;i++){
            hashValue += key.charCodeAt(i)
        }

        return hashValue % this.table.length
    }

    insert(key,value){
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }

        this.table[index].push([key,value])
    }

    get(key){
        let index = this.hash(key)
        if(!index) return undefined
        for(let pair of this.table[index]){
            if(pair[0] == key){
                return pair[1]
            }
        }
        return undefined
    }

    has(key){
        let index = this.hash(key)
        if(!index) return false
        for(let pair of this.table[index]){
            if(pair[0] == key){
                return true
            }
        }
        return false
    }
}

let table = new HashTable(5)

table.insert('name','shabin')
table.insert('age','19')
table.insert('place','kerala')
table.insert('place1','kerala')
table.insert('place2','kerala')
table.insert('place3','kerala')

// console.log(table.table);


// console.log(table.get('name'));
console.log(table.has(''));
