let CurrencyConverter = require('../index')

let converter = new CurrencyConverter('do-not-use-this-key')

converter.convert('USD', 'CNY', 100)
    .then(console.log, console.error)