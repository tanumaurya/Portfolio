// browser control
// controls a headless browser -> browser that is by default not visible 
// npm i puppeteer
const puppeteer = require("puppeteer");
// nearly every function of puppeteer returns a promise
// const credObj = require("./cred");
// module.exports = {
//     password: "",
//     email: ""
// }
    const credObj={
    email : "tdelakog231@runqx.com",
    password : "Suman@123"
    }


async function log(){
    console.log(credObj);
    // const pathToExtension = require('path').join(__dirname, 'my-extension');
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        defaultViewport: null,
        args: ["--start-maximized", "--start-in-incognito"],
        slowMo: 50
    });
    const tab = await browser.newPage();
    // // to go google's home page 
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("input[type='text']", credObj.email, { delay: 20 });
    await tab.type("input[type='password']", credObj.password, { delay: 20 });
    await tab.keyboard.press("Enter");
  };
  log();
// keyboard ,mouse ,scroll
