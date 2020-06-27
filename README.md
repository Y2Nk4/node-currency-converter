# node-currency-converter
A currency converter based on [currencyconverterapi.com](http://currencyconverterapi.com)'s api

## About
#### Feature
:fire: Support most of the currency

:smiley: Using Promise
#### What is this module doing?
This module is based on [currencyconverterapi.com](http://currencyconverterapi.com), it will request this api to get the exchange rate between two currency.

**You can get the api key from [free.currencyconverterapi.com](https://free.currencyconverterapi.com/)**

## Examples
```
let CurrencyConverter = require('../index')

let converter = new CurrencyConverter('do-not-use-this-key')

converter.convert('USD', 'CNY', 100)
    .then(console.log, console.error)

# 707.8404
```

## Methods

**convert(fromCurrency, toCurrency, [baseAmount = 1.0, [isRaw = false]])**
 - `fromCurrency` - three-digit currency code for currency you want to convert from, ex: `USD`
 - `toCurrency` - three-digit currency code for currency you want to convert to, ex: `CNY`
 - `baseAmount` - the amount you want to exchange, float, default: `1.0`
 - `isRaw` - set it to be `true` if you want it to return raw data from the api, default: `false`
 
This method returns the conversion amount in a float number
 - `conversion_amount` - Float