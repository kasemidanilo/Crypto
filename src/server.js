var express = require("express");
var rp = require("request-promise");

var app = express();

app.listen(9797, () => {
    console.log("Server running on port 9797");
});

const lastestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
        'start': '1',
        'limit': '1',
        'convert': 'USD,BTC'
    },
    headers: {
        'X-CMC_PRO_API_KEY': '4869c7be-b2f1-4243-aa1a-41d728c5df0d'
    },
    json: true,
    gzip: true
};

const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
    qs: {
        'symbol': 'BTC,USDT,BNB'
    },
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
        'X-CMC_PRO_API_KEY': '4869c7be-b2f1-4243-aa1a-41d728c5df0d'
    },
    json: true,
    gzip: true
};



app.get("/url", (req, res, next) => {
    rp(requestOptions).then(response => {
        console.log('API call response:', response);
    }).catch((err) => {
        console.log('API call error:', err.message);
    });
});

const test = async () => {
    rp(lastestOptions)
        .then(response => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

app.get("/lastest", async (req, res, next) => {

    const c = await test();
    res.json(c);
})