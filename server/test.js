const fs = require("fs");
const fsp = require("fs").promises;
const puppeteer = require('puppeteer');

let symbol = 'NIFTY';
let scrapeChapterDataAsync = async (sym) => {
    await new Promise(async (resolve) => {
        let url = `https://www.nseindia.com/api/option-chain-indices?symbol=${sym}`;

        let browser = await puppeteer.launch({ headless: true });
        let page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36');

        try {
            await page.goto(url);
        } catch (err) {
            console.log(err.message);
        }
        await page.content();

        let nsejson = await page.evaluate(() => {
            return document.querySelector("body").innerText;
        });
        browser.close();
        data = nsejson;
        resolve();
    });
    return data;
}
// (async () => {
//     let data = await scrapeChapterDataAsync(symbol);
//     fs.writeFile(`./${symbol}.json`, data, (err, result) => {
//         if (err) console.log('error', err);
//     });
// })()


let scrapeSymbols = async () => {
    await new Promise(async (resolve) => {
        let url = `https://www.samco.in/option_fair_value_calc`;

        let browser = await puppeteer.launch({ headless: true });
        let page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36');

        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
        });

        try {
            await page.goto(url);
        } catch (err) {
            console.log(err.message);
        }

        let symbols = await page.evaluate(() => {
            return SMBL;
        });
        browser.close();
        data = symbols;
        resolve();
    });
    return data;
}
(async () => {
    let data = await scrapeSymbols();
    fs.writeFile(`./Symbols.json`, JSON.stringify(data, null, 4), (err, result) => {
        if (err) console.log('error', err);
    });
})()