const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "/usr/bin/chromium-browser" ||
      "../../node_modules/puppeteer/.local-chromium/linux-970485/chrome-linux",
    headless: true,
  });
  this.browser = await browser.newPage();

  const page = await browser.newPage();

  await browser.close();
})();
