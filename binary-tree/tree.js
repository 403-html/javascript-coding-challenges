class Tree {
    constructor() {}
    addValue(value) {
        if (!this.number) {
            this.number = value
            this.branchIndex = 0
        } else {
            if (this.valueIndex) this.valueIndex += 1
            else this.valueIndex = 1
            // right, higher
            if (value > this.number) {
                if (this.right) this.right.addValue(value, this.valueIndex)
                if (!this.right) this.right = new Branch(value, this.valueIndex)
            }
            // left, lower
            if (value < this.number) {
                if (this.left) this.left.addValue(value, this.valueIndex)
                if (!this.left) this.left = new Branch(value, this.valueIndex)
            }
        }
    }
}

class Branch {
    constructor(value, index) {
        this.number = value
        this.branchIndex = index
    }
    addValue(value, index) {
        // right, higher
        if (value > this.number) {
            if (!this.right) this.right = new Branch(value, index)
            if (this.right) this.right.addValue(value, index)
        }
        // left, lower
        if (value < this.number) {
            if (!this.left) this.left = new Branch(value, index)
            if (this.left) this.left.addValue(value, index)
        }
    }
}

/*
 branch (nr, index)
   -> inaczej
        -> sprawdź czy pasuje do lewego brancha (mniejszy niż numer)
            -> nie, to wstaw numerem i indexem
            -> tak, to wrzuć nowy branch, który stworzy nowy branch
        -> sprawdź czy pasuje do prawego brancha (wiekszy niż numer)
            -> nie, to wstaw nowy branch z numerem
            -> tak, to wrzuć nowy branch, który stworzy nowy branch
*/

// let tree = new Tree()

// for (let i = 0; i < 15; i++) {
//     tree.addValue(Math.floor(Math.random() * 101))
// }

// console.log(JSON.stringify(tree, null, 2))
