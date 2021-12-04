module.exports = {
  'Register User' : function(browser) {
    var login = browser.page.autochekPage();
    login.navigate() //run url
        .maximizeWindow() //maximise window
        .waitForElementVisible('body')  //wait for landing page to load  
        .assert.titleContains('Autochek') //check if browser is on Autochek website successfully
        .click('@register') //click the register button
        //.waitForElementVisible('body')
        .setValue('@firstName', 'bayo') // input first name
        .setValue('@lastName', 'Akinbi') // input last name
        .setValue('@email', 'bayo1@mailinator.com') // input email address, always change email or write script for random emails
        .setValue('@phone', '8082687230') // input phone number
        .setValue('@password', 'microsoft') // input password
        .setValue('@referral', '12WERTY') // input referral code
        .click('@submit') // click register button
        .assert.containsText('body', 'Sign Out') //check is user is registered and logged in successfully
        .end(); //close browser
    }
  };
