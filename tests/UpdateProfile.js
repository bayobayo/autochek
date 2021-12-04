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
        .useXpath()     // every selector now must be XPath
        .click("//*[@id='__next']/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[1]/div/div")
        .click("//*[@id='__next']/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[1]/ul/li[1]")
        .useCss()      // we're back to CSS now
        .useXpath()     // every selector now must be XPath
        .click("//*[@id='__next']/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[2]/div/div")
        .click("//*[@id='__next']/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[2]/ul/li[3]")
        .useCss()      // we're back to CSS now
        .useXpath()     // every selector now must be XPath
        .click("//*[@id='__next']/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[3]/div/div")
        .click("//*[@id='__next']/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[3]/ul/li[3]")
        .useCss()      // we're back to CSS now
        .click('button[type=submit]')
        .waitForElementVisible('h2[class=swal2-title]')
        .assert.containsText('h2[class=swal2-title]', "Success")
        .end();
    }
  };