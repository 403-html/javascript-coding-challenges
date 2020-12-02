class Tree {
    constructor() {}
    addValue(value) {
        if (!this.number && value) {
            this.number = value
            this.nodeIndex = 0
        } else if (this.number && value) {
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
        this.nodeIndex = index
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

module.exports = Tree
