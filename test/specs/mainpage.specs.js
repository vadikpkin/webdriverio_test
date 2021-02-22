let chai = require('chai'),
    should = chai.should();
const getUsdValueForCurrency = require('../service/CryptoCompareApiService.js')
const TickerPage = require('../pages/tickerpage/tickerpage')
const tickerPage = new TickerPage()

describe('Tests for Main page', () => {
    beforeEach(() => {
        tickerPage.open()
    })

    it('should open mainpage', () => {
        tickerPage.getCurrentPageTitle()
            .should.eql('hello-world')
    })

    it('should input value to ticket input box', () => {
        const expectedInputText = 'BTC'
        tickerPage.tickerInput
            .setValue(expectedInputText)
        tickerPage.tickerInput
            .getValue()
            .should.be.equal(expectedInputText);
    })

    it('should add card with ticket', () => {
        const expectedInputText = 'BTC'
        tickerPage.addTicker(expectedInputText)
            .tickers[0]
            .getText()
            .should.contain('BTC')
    })

    it('should show graph when we chose any of ticket', () => {
        const expectedInputText = 'BTC'
        tickerPage.addTicker(expectedInputText)
            .tickers[0]
            .click()
        tickerPage.graph
            .isDisplayed()
            .should.be.equal(true)
    })

    it('should have proper USD value', () => {
        const expectedInputText = 'BTC'
        const actualPrice = tickerPage.addTicker(expectedInputText)
            .getTickerPrice(0)
        getUsdValueForCurrency(expectedInputText)
            .should.be.closeTo(actualPrice, actualPrice / 100 * 5)
    })
})
