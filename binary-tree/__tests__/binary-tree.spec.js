const fs = require('fs')

const Tree = require('../tree')
const fixtures = JSON.parse(fs.readFileSync(__dirname + '/fixtures.json'))

const getTreeOf = (arr) => {
    const tree = new Tree()

    arr.forEach((elem) => tree.addValue(elem))

    return tree
}

test('empty input should get empty obj', () => {
    expect(getTreeOf(fixtures.zero.input)).toEqual(fixtures.zero.output)
})

test('one input should match output tree', () => {
    expect(getTreeOf(fixtures.one.input)).toEqual(fixtures.one.output)
})

test('one-smaller input should match output tree', () => {
    expect(getTreeOf(fixtures['one-smaller'].input)).toEqual(
        fixtures['one-smaller'].output
    )
})

test('one-greater input should match output tree', () => {
    expect(getTreeOf(fixtures['one-greater'].input)).toEqual(
        fixtures['one-greater'].output
    )
})

test('greater-and-lower input should match output tree', () => {
    expect(getTreeOf(fixtures['greater-and-lower'].input)).toEqual(
        fixtures['greater-and-lower'].output
    )
})

test('inherit-greater input should match output tree', () => {
    expect(getTreeOf(fixtures['inherit-greater'].input)).toEqual(
        fixtures['inherit-greater'].output
    )
})

test('many-values input should match output tree', () => {
    expect(getTreeOf(fixtures['many-values'].input)).toEqual(
        fixtures['many-values'].output
    )
})
