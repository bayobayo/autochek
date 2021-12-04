module.exports = {
    'Register User' : function(browser) {
      var login = browser.page.autochekPage();// set page object
      login.navigate() //run url
        .maximizeWindow() //maximise window
        .waitForElementVisible('body')  //wait for landing page to load  
        .assert.titleContains('Autochek') //check if browser is on Autochek website successfully
        .click('@signIn') //click signin button
        .waitForElementVisible('body') //wait till signin page loads successfully
        .setValue('@email', 'bayo@mailinator.com') //input email address
        .setPassword('@password', 'microsoft')// input password
        .click('@submit') //click Log in button
        .assert.containsText('body', 'Sign Out') //check is user is logged in successfully
        .end(); //close browser
    }
  };