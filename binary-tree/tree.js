class Node {
    constructor(val, index) {
        this.number = val || null;
        this.left = null;
        this.right = null;
        this.index = index || null;
    }
}

class Tree {
    constructor() {
        this.tree = new Node();
    }
    addValue({value,index}) {
        if(index == 0){
            this.tree.index = index;
            this.tree.number = value;
        }
        else {
            if(value < this.tree.number) this.tree.left = new Node(value,index);
            if(value > this.tree.number) this.tree.right = new Node(value,index);
        }
    }
}

let tree = new Tree();

for(let i = 0; i<15; i++){
    tree.addValue({
        "value": Math.floor(Math.random()*101),
        "index": i
    });
}

console.log(tree.tree);