class BasePage {
    open(path) {
        return browser.url(path)
    }

    getCurrentPageTitle() {
        return browser.getTitle()
    }
}

module.exports = BasePage