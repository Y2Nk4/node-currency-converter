let axios = require('axios')

class CurrencyConverter {
    // You may get your free API key at free.currencyconverterapi.com
    constructor (apiKey) {
        if (!apiKey) {
            throw new Error('APIKey is required. You may get your free API key at free.currencyconverterapi.com')
        }
        this.apiKey = apiKey
    }

    convert (fromCurrency, toCurrency, baseAmount = 1.0, isRaw = false) {
        // validate baseAmount
        baseAmount = parseFloat(baseAmount)
        if (!baseAmount || isNaN(baseAmount)) {
            baseAmount = 1.0
        }

        // request api
        return axios.get(
            `https://free.currconv.com/api/v7/convert?apiKey=${this.apiKey}&q=${fromCurrency}_${toCurrency}&compact=ultra`
        ).then((res) => {
            if (isRaw) {
                return Promise.resolve(res.data)
            }

            let exchangeRate = res.data[`${fromCurrency}_${toCurrency}`]
            if (!exchangeRate) {
                return Promise.reject(new Error('Currency may be wrong or not supported.'))
            }

            return Promise.resolve(exchangeRate * baseAmount)
        })
    }
}

module.exports = CurrencyConverter