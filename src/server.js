var express = require("express");
var rp = require("request-promise");

var app = express();

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

app.get("/lastest", function(req, res) {
  // res.send([
  //   {
  //     id: 1839,
  //     name: "Binance Coin",
  //     symbol: "BNB",
  //     slug: "binance-coin",
  //     is_active: 1,
  //     rank: 8,
  //     first_historical_data: "2017-07-25T04:30:05.000Z",
  //     last_historical_data: "2019-10-13T15:34:03.000Z",
  //     platform: null
  //   },
  //   {
  //     id: 1,
  //     name: "Bitcoin",
  //     symbol: "BTC",
  //     slug: "bitcoin",
  //     is_active: 1,
  //     rank: 1,
  //     first_historical_data: "2013-04-28T18:47:21.000Z",
  //     last_historical_data: "2019-10-13T15:34:01.000Z",
  //     platform: null
  //   },
  //   {
  //     id: 825,
  //     name: "Tether",
  //     symbol: "USDT",
  //     slug: "tether",
  //     is_active: 1,
  //     rank: 5,
  //     first_historical_data: "2015-02-25T13:34:26.000Z",
  //     last_historical_data: "2019-10-13T15:34:01.000Z",
  //     platform: {
  //       id: 83,
  //       name: "Omni",
  //       symbol: "OMNI",
  //       slug: "omni",
  //       token_address: "31"
  //     }
  //   }
  // ]);
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
