// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "login test": browser => {
    browser
      .url(browser.launchUrl + "login")
      .waitForElementVisible("#app", 5000)
      .assert.containsText("h1", "TaskAgile")
      .end();
  }
};
