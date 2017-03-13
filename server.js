const path = require('path');
const express = require('express');
const fs = require("fs");
const port = (process.env.PORT || 8080);

const app = express();
const indexPath = path.join(__dirname, '/dist/index.html');
const publicPath = express.static(path.join(__dirname, '/dist'));

function readJsonFileSync(filepath, encoding) {
    if (typeof (encoding) == 'undefined') {
        encoding = 'utf8';
    }
    const file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getJson(file) {
    const filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

app.use('/', publicPath);
app.get('/', (_, res) => {
    res.sendFile(indexPath);
});

app.get('/stats/common', function (req, res) {
    let response = getJson('json-mocks/donutStats.json');
    res.json(response);
})

app.get('/stats/sales/monthly', function (req, res) {
    let response = getJson('json-mocks/monthlySales.json');
    res.json(response);
})

app.get('/stats/revenue/compare', function (req, res) {
    let response = getJson('json-mocks/revenueCompare.json');
    res.json(response);
})

app.get('/stats/geo', function (req, res) {
    let response = getJson('json-mocks/sampleData.json');
    res.json(response);
})

app.get('/stats/summary', function (req, res) {
    let response = getJson('json-mocks/summaryRevenue.json');
    res.json(response);
})

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config = require('./conf/webpack.conf.js');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    stats: {colors: true},
    publicPath: config.output.publicPath
  }));
}

app.listen(port);
console.log(`Listening at http://localhost:${port}`);