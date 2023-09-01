export default class Page {
    async open(path) {
        await browser.maximizeWindow();
        return browser.url(path);
    }
}
