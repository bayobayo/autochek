module.exports = {
    'Register User' : function(browser) {
      var login = browser.page.autochekPage();
      login.navigate()
          .maximizeWindow()
        .waitForElementVisible('body')    
        .assert.titleContains('Autochek')
        .click('@signIn')
        .waitForElementVisible('body')
        .setValue('@email', 'bayo@mailinator.com')
        .setPassword('@password', 'microsoft')
        .click('@submit')
        .assert.containsText('body', 'Sign Out')
        .waitForElementVisible('@profile')
        .click('@profile')
        .setValue('@address', '1, Oluwatobi Street, Lagos')
        .selectDropdown('@country1', '@country2')
        .selectDropdown('@state1', '@state2')
        .selectDropdown('@city1', '@city2')
        .click('button[type=submit]')
        .waitForElementVisible('@success')
        .assert.containsText('@success', "Success")
        .end();
    }
  };