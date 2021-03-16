const express = require('express');
const router = express.Router();
const fs = require("fs");
const puppeteer = require('puppeteer');

const utils = require('./../utils');
const cwd = process.cwd();
const dataDir = `${cwd}/server/public/data`;

/* GET Symbols. */
router.get('/', async (req, res, next) => {
    let filePath = `${dataDir}/Symbols.json`;
    let exists = await utils.fileExists(filePath);
    if (exists) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
            } else {
                res.json(JSON.parse(data))
            }
        })
    } else {
        let data = await scrapeSymbols();
        fs.writeFile(filePath, JSON.stringify(data, null, 4), (err, result) => {
            if (err) console.log('error', err);
            res.json(data);
        });
    }
});

/* Refresh Symbols. */
router.get('/refresh', async (req, res, next) => {
    let filePath = `${dataDir}/Symbols.json`;
    let data = await scrapeSymbols();
    fs.writeFile(filePath, JSON.stringify(data, null, 4), (err, result) => {
        if (err) console.log('error', err);
        res.json(data);
    });
});

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

module.exports = router;
