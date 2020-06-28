let CurrencyConverter = require('../index')

let converter = new CurrencyConverter('do-not-use-this-key')

test('converter.convert should return a float value', async () => {
    expect(typeof await converter.convert('USD', 'CNY', 1))
        .toBe('number')
})

test('converter.convert should return a object if isRaw set to be true', async () => {
    expect(typeof await converter.convert('USD', 'CNY', 1, true))
        .toBe('object')
})