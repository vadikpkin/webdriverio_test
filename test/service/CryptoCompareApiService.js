const fetch = require('node-fetch')

function getUsdValueForCurrency(currency) {
    return browser.call(async () => {
        let response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD`)
        let json = await response.json()
        return +json.USD
    })
}

module.exports = getUsdValueForCurrency