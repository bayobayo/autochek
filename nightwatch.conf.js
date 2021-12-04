module.exports = {
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": require('chromedriver').path,
    "port": 9515
  },
  "page_objects_path": "pages-objects",
  "globals_path": "",

  "test_settings" : {
    "default" : {
      "launch_url": "https://marketplace.staging.myautochek.com/ng",
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}