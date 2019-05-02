function genSum(n){
    let randArray = [];
    
    for (let index = 0; index < n; index++) {
        
        if(index != n-2){
            //trzeba dodac "uniq"
            let num = Math.floor(Math.random()* 100) + 0;
            num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
            randArray.push(num);
        }
    }

    let lastNum = 0;
    for (let index = 0; index < randArray.length; index++) {
        lastNum += randArray[index];
    }

    if (lastNum == 0) {
        randArray.push(0)
    }
    if (lastNum < 0) {
        randArray.push(Math.abs(lastNum))
    }
    if (lastNum > 0) {
        randArray.push(-lastNum)
    }

    return randArray;
}

let random = genSum(5);

console.log(random);

for (let index = 0, num = 0; index < random.length; index++) {
    num += random[index];
    if(index == random.length-1) console.log(num)
}
