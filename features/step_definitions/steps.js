var assert = require('assert');

module.exports = function () {
  this.Given(/^I visit google$/, function() {
    return this.driver.get('http://www.google.com');
  });

  this.Then(/^I should see Google in title$/, function() {
    this.driver.getTitle().then(function (title) {
      assert.equal(title, "Google");
      return title;
    });
  });
};
