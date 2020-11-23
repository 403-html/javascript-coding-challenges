const feeding = (totalWheat = 0) => {
    let pigeonsTotal = 0
    let nextPigeonGroup = 1
    let currWheat = totalWheat
    while (pigeonsTotal < currWheat) {
        if (pigeonsTotal + nextPigeonGroup > totalWheat) break
        pigeonsTotal += nextPigeonGroup
        currWheat -= pigeonsTotal
        nextPigeonGroup++
    }
    return pigeonsTotal
}

module.exports = feeding
