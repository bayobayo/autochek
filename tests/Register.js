module.exports = {
  'Register User' : function(browser) {
    var login = browser.page.autochekPage();
    login.navigate()
        .maximizeWindow()
        .waitForElementVisible('body')
        .assert.titleContains('Autochek')
        .click('@register')
        //.waitForElementVisible('body')
        .setValue('@firstName', 'bayo')
        .setValue('@lastName', 'Akinbi')
        .setValue('@email', 'bayo@mailinator.com')
        .setValue('@phone', '8082687230')
        .setValue('@password', 'microsoft')
        .setValue('@referral', '12WERTY')
        .click('@submit')
        .assert.containsText('body', 'Sign Out')
        .end();
    }
  };