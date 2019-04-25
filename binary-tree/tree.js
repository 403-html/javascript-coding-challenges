class Root {
    constructor() {
        this.number = null;
        this.left = null;
        this.right = null;
    }
    addValue(val) {
        console.log(val);
        if(this.number == null) this.number = val;
        if (val < this.number) {
            this.left = this.addValue(val);
        } else if (val > this.number) {
            this.right = this.addValue(val);
        }
    }
}

let tree = new Root();

for(let i = 0; i<5; i++){
    tree.addValue(Math.floor(Math.random()*101));
}

console.log(tree);