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
        .end();
    }
  };