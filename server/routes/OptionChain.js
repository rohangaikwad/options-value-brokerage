const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');


router.get('/:symbol', async (req, res, next) => {
    let { symbol } = req.params;
    console.log(symbol)
    let data = await scrapeChapterDataAsync(symbol);
    res.json(JSON.parse(data));
});

let scrapeChapterDataAsync = async (sym) => {
    await new Promise(async (resolve) => {
        let url = `https://www.nseindia.com/api/option-chain-indices?symbol=${sym}`;
        console.log(url)

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

module.exports = router;
