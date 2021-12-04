const elements = {
    register: {
        selector: "//a[text()='Register']",
        locateStrategy: "xpath selector",
    },
    signIn: 'a[class=mr-20]'

};

const commands = [

];

module.exports = {
    elements: {
        signIn: 'a[class=mr-20]',
        firstName: 'input[type=firstname]',
        lastName: 'input[type=lastname]',
        email: 'input[type=email]',
        password: 'input[type=password]',
        submit: 'button[type=submit]',
        //register: "//a[text()='Register']",
        register: {
            selector: '//*[@id="__next"]/div/div[1]/div[2]/div/div[3]/a[2]',
            locateStrategy: 'xpath',
        },
        phone: 'input[type=tel]',
        referral: 'input[type=text]',
        profile: 'a[class=mr-10]',
        address: 'input[name=address]'
    },
    commands: commands,
    url: function() {
        return `${this.api.launchUrl}`
    }
}