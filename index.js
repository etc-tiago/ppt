const ppt = require('puppeteer');

(() => {
  const browser = await puppeteer.launch({
    executablePath: '../../node_modules/puppeteer/.local-chromium/linux-970485/chrome-linux/chrome',
    headless: true,
  });
  this.browser = await browser.newPage();

  const page: puppeteer.Page = await browser.newPage();

  await browser.close();
})()

