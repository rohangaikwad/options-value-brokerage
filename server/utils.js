const fs = require("fs");
const chalk = require('chalk');

module.exports = {
    fileExists: async function (path) {
        let exists = true;
        await new Promise(resolve => {
            fs.access(path, fs.constants.F_OK, (err) => {
                if (err) exists = false;
                resolve();
            })
        });
        //console.log(chalk.blue('checkfile:', exists, path))
        return exists;
    }
}