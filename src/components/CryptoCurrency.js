import React, { Component } from "react";

class CryptoCurrency extends Component {
  render() {
    var {
      id,
      name,
      symbol,
      rank,
      first_historical_data,
      last_historical_data
    } = this.props.data;

    return (
      <li className={`cryptocurrency${id}`}>
        <p>
          {name} {symbol}
        </p>
        <h1>Rank {rank}</h1>
        <p>
          {new Date(first_historical_data).toUTCString()} First Historical Data
        </p>
        <p>
          {new Date(last_historical_data).toUTCString()} Last Historical Data
        </p>
      </li>
    );
  }
}

export default CryptoCurrency;
