module.exports = {
  storybookUrl: 'http://localhost:6006',
  chromeSelector: '#storybook-root .app',
  renderTimeout: 20000,
  scenarios: [],
  configurations: {
    chromeLaptop: {
      target: 'chrome.app',
      width: 1366,
      height: 768,
    },
  },
  onReady: async ({ page }) => {
    // Ждём появления какого-то элемента на странице, например, заголовка
    await page.waitForSelector('#storybook-root', { timeout: 50000 });
  },
};
