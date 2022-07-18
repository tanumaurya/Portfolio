// Q1 print the result 
// npm i request jsdom 
const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom");
let url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard';
// main page request 
request(url, cb);
console.log('Before')
// data recieve 
function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("content recieved");
        // console.log(body);
        extractData(body);
    }
}
// data recieve -> convert into two bolwing innings
function extractData(body) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM 
    let dom = new JSDOM(body);
    // 2. // no meaning 
    // document represent the whole html page 
    let document = dom.window.document;
    //  4 matches -> batting,bowling 
    let allTables = document.querySelectorAll
        ("table.ds-w-full.ds-table.ds-table-xs.ds-table-fixed");

    let firstInningBowling = allTables[1]; // bowling table 1
    let secondInningBowling = allTables[3]; //bowlling table 2
    // element  -> ke anadr jo bhi html wo inne html se  aa jayegi 
    let newHtmlString = "<table>" + firstInningBowling.innerHTML + "</table>"
        + "<table>" + secondInningBowling.innerHTML + "</table>";

    // fs.writeFileSync("tables.html", newHtmlString);
    // console.log(newHtmlString);
    getDataFromBowlingTables(newHtmlString);
    // how to narrow;
    // using document and your selectors you find element in html page 
    // console.log("reached for parsing");
}



// two bolwing innings-> every bowler ke bio page ka link
//  request -> to their page
function getDataFromBowlingTables(newHtmlString) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM
    let dom = new JSDOM(newHtmlString);
    // 2. // no meaning
    // document represent the whole html page
    let document = dom.window.document;

    let allRows = document.querySelectorAll("tbody tr.ds-text-tight-s");
    for (let i = 0; i < allRows.length; i++) {
        let singlePlayerDetailElem = allRows[i];
        let anchorArr = singlePlayerDetailElem.querySelectorAll("td a");
        // all -> returns an array ->  [a]
        let href = anchorArr[0].getAttribute("href");
        let fullLink = "https://www.espncricinfo.com" + href;
        console.log(fullLink);
        request(fullLink, bcb);
    }

}
// response of each palyer page at a time
function bcb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        // console.log("content recieved");
        // console.log(body);
        // console.log("````````````````````````````````");
        // console.log("````````````````````````````````");
        // console.log("````````````````````````````````");
        // console.log("````````````````````````````````");
        extractBirthdays(body);
    }
}
// birthday extract -> print 
function extractBirthdays(body) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM
    let dom = new JSDOM(body);
    // 2. // no meaning
    // document represent the whole html page
    let document = dom.window.document;
    // selector find -> put -> data print 

}