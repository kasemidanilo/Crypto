var express = require("express");
var rp = require("request-promise");
var cors = require('cors');


var app = express();
app.use(cors());

app.listen(9797, () => {
    console.log("Server running on port 9797");
});

const requestMapData = {
    method: "GET",
    uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
    qs: {
        symbol: "BTC,USDT,BNB"
    },
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": "4869c7be-b2f1-4243-aa1a-41d728c5df0d"
    },
    json: true,
    gzip: true
};

app.get("/lastest", function (req, res) {
    rp(requestMapData)
        .then(result => {
            res.send(result.data);
        })
        .catch(err => {
            console.log(err);
            res.send(err.message);
            res.sendStatus(501);
        });
});
