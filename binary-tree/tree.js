class Root {
    constructor(val) {
        this.number = val || null;
        this.left = null;
        this.right = null;
    }
    addValue(val) {
        if(this.number == null) this.number = val;
        if (val < this.number) {
            this.left = new Root(val);
        } else if (val > this.number) {
            this.right = new Root(val);
        }
    }
}

let tree = new Root();

for(let i = 0; i<15; i++){
    tree.addValue(Math.floor(Math.random()*101));
}

console.log(tree);