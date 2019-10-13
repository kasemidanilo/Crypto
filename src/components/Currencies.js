import React, { Component } from "react";

import CryptoCurrency from "./CryptoCurrency";
import { connect } from "react-redux";
import getData from "../actions/index";

//import CryptoCurrency component

const mapStateToProps = state => {
  return { data: state.data };
};

class Currencies extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    debugger;
    if (this.props.data !== []) {
      return (
        <div>
          {this.props.data.map((item, index) => (
            <CryptoCurrency key={index} data={item} />
          ))}
        </div>
      );
    }
    return <p>LOADING ....</p>;
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Currencies);
