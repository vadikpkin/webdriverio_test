const BasePage = require('../basePage')

class TickerPage extends BasePage {

    get tickerInput() {
        return browser.$('#wallet')
    }

    get addButton() {
        return browser.$('#addTickerBtn')
    }

    get tickers() {
        return browser.$$('dl > div')
    }

    get graph() {
        return browser.$('#graph')
    }

    open() {
        return super.open('http://localhost:8080/');
    }

    addTicker(name) {
        this.tickerInput.setValue(name)
        this.addButton.click()
        return this
    }

    getTickerPrice(index) {
        browser.waitUntil(() => {
            return this.tickers[index].$('dd').getText() !== '-'
        }, {
            timeout: 10000,
            interval: 1000
        })
        return +this.tickers[index].$('dd').getText();
    }

}

module.exports = TickerPage