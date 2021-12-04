const elements = {
    register: {
        selector: "//a[text()='Register']",
        locateStrategy: "xpath selector",
    },
    signIn: 'a[class=mr-20]'

};

const commands = [      {
    /**
     * Enters the given name and message into the left form feilds
     * 
     * @param {String} name
     * @param {String} message
     */
    enterNameAndMessage(name, message){
          return this
                  .setValue('@leftFormName', name)
                  .setValue('@leftFormMessage', message)
    },

    submitLeftForm(){
          return this.click('@btnSubmit')
    }
}

];

module.exports = {
    elements: {
        signIn: 'a[class=mr-20]',
        firstName: 'input[type=firstname]',
        lastName: 'input[type=lastname]',
        email: 'input[type=email]',
        password: 'input[type=password]',
        submit: 'button[type=submit]',
        phone: 'input[type=tel]',
        referral: 'input[type=text]',
        profile: 'a[class=mr-10]',
        address: 'input[name=address]',
        success: 'h2[class=swal2-title]',
        //register: "//a[text()='Register']",
        register: {
            selector: '//*[@id="__next"]/div/div[1]/div[2]/div/div[3]/a[2]',
            locateStrategy: 'xpath',
        },
        country1: { //first click of the country dropdown
            selector: '//*[@id="__next"]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[1]/div/div',
            locateStrategy: 'xpath',
        },
        country2: { //second click of the country dropdown which selects the country
            selector: '//*[@id="__next"]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[1]/ul/li[1]',
            locateStrategy: 'xpath',
        },
        state1: { //first click of the state dropdown
            selector: '//*[@id="__next"]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[2]/div/div',
            locateStrategy: 'xpath',
        },
        state2: { //second click of the state dropdown which selects the state
            selector: '//*[@id="__next"]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[2]/ul/li[3]',
            locateStrategy: 'xpath',
        },
        city1: { //first click of the city dropdown
            selector: '//*[@id="__next"]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[3]/div/div',
            locateStrategy: 'xpath',
        },
        city2: { //second click of the city dropdown which selects the city
            selector: '//*[@id="__next"]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[5]/div[3]/ul/li[3]',
            locateStrategy: 'xpath',
        },
    },
    commands: [{
        selectDropdown(firstClick,secondClick){
            return this
                    .click(firstClick)
                    .click(secondClick)
        }
    }],
    url: function() {
        return `${this.api.launchUrl}`
    }
}