const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const optionsRouter = require('./routes/OptionChain');
const symbolsRouter = require('./routes/Symbols');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/options', cors(), optionsRouter);
app.use('/api/symbols', cors(), symbolsRouter);

module.exports = app;
