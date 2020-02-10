function feeding(totalWheat = 0){
    let pigeonsTotal = 0;
    let nextPigeonGroup = 1;
    let currWheat = totalWheat;
    while(pigeonsTotal < currWheat) {
        if(pigeonsTotal+nextPigeonGroup>totalWheat) break;
        pigeonsTotal += nextPigeonGroup;
        currWheat -= pigeonsTotal;
        nextPigeonGroup++;
    }
    return console.log(`With ${totalWheat} wheat you can feed ${pigeonsTotal} pigeons - last group of pigeons is equal to ${nextPigeonGroup} `)
}


// 1 pigeon - 1 wheat
// total wheat 10 - 1 = 9
// 2 next pigeons group + 1 curr pigeon = 3 pigeons - 3 wheat
// total wheat 9 - 3 = 6
// 3 next pigeons group + 3 curr pigeons = 6 pigeons - 6 wheat
// total wheat 6 - 6 = 0
// total wheat < pigeonsTotal = break

feeding(10);