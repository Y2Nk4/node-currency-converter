# node-currency-converter
A currency converter based on [currencyconverterapi.com](http://currencyconverterapi.com)'s api

[![Build Status](https://travis-ci.com/Y2Nk4/node-currency-converter.svg?branch=master)](https://travis-ci.com/Y2Nk4/node-currency-converter)
[![Coverage Status](https://coveralls.io/repos/github/Y2Nk4/node-currency-converter/badge.svg?branch=master)](https://coveralls.io/github/Y2Nk4/node-currency-converter?branch=master)

## About
#### Feature
:fire: Support most of the currency

:smiley: Using Promise
#### What is this module doing?
This module is based on [currencyconverterapi.com](http://currencyconverterapi.com), it will request this api to get the exchange rate between two currency.

**You can get the api key from [free.currencyconverterapi.com](https://free.currencyconverterapi.com/)**

The key used in the example is an example key from [currencyconverterapi.com](http://currencyconverterapi.com). But according to [currencyconverterapi.com](http://currencyconverterapi.com), you **MUST NOT** use this key, and it will get you banned.

## Install via npm
```
npm i @y2nk4/currency-converter
```

## Examples
```javascript
let CurrencyConverter = require('@y2nk4/currency-converter')

// Please don't use this sample API key in your environment. 
// Doing so will get you banned.
// You may get your free API key at free.currencyconverterapi.com
let converter = new CurrencyConverter('do-not-use-this-key')

converter.convert('USD', 'CNY', 100)
    .then(console.log, console.error)
// returns 654.0698

// Query with date
converter.convert('USD', 'AUD', 1, false, '2019-12-26')
    .then(console.log, console.error)
// returns 1.439797
```

## Methods

**convert(fromCurrency, toCurrency, [baseAmount = 1.0], [isRaw = false], [date])**
 - `fromCurrency` - three-digit currency code for currency you want to convert from, ex: `USD`
 - `toCurrency` - three-digit currency code for currency you want to convert to, ex: `CNY`
 - `baseAmount` - the amount you want to exchange, float, default: `1.0`
 - `isRaw` - set it to be `true` if you want it to return raw data from the api, default: `false`
 - `date` - historical single date for data to be pulled from, ex: `2020-07-15`
 
This method returns the conversion amount in a float number
 - `conversion_amount` - Float Number if `isRaw` set to be false
