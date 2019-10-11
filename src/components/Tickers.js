import React, { Component } from 'react';
import axios from 'axios';

import CryptoCurrency from './CryptoCurrency';
import './Tickers.css';

//import CryptoCurrency component

class Tickers extends Component {

    fetchCryptoCurrencyData() {
        axios.get("http://localhost:9797/lastest")
            .then(response => {
                debugger;
                console.log(response);
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        debugger;
        this.fetchCryptoCurrencyData();
    }


    render() {
        this.fetchCryptoCurrencyData();
        return <p>TEST</p>
    }
}

export default Tickers;
