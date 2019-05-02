class genSum{
    constructor(n){
        this.array = [];
        
        this.toss(n);
    }
    toss(n){
        for(let i = 0; i < n-1; i++){
                let num = this.pickRandNum({
                    min: 0,
                    max: 100,
                    negative: true});
                while(this.array.includes(num)) {
                    num = this.pickRandNum({
                        min: 0,
                        max: 100,
                        negative: true}) // between min/max/max in negative
                }
                this.array.push(num);
        }
        let lastNum = this.sumArray();
        
        if (lastNum == 0) {
            this.array.push(0)
        }
        if (lastNum < 0) {
            this.array.push(Math.abs(lastNum))
        }
        if (lastNum > 0) {
            this.array.push(-lastNum)
        }
    }
    pickRandNum({min,max,negative = false}){
        let num = Math.floor(Math.random()* 100) + 0;
        if(negative) num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        return num;
    }
    sumArray(){
        let sum = 0;
        for(let i = 0; i < this.array.length; i++){
            sum += this.array[i];
        }
        return sum;
    }
}

let random = new genSum(5);

console.log(random.array);
console.log(random.sumArray());