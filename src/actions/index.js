import { GET_DATA, FAILED_TO_LOAD_DATA } from "../constants/action-types";

import axios from "axios";

export default function getData() {
  return function(dispatch) {
    axios
      .get("http://localhost:9797/lastest")
      .then(response => {
        return dispatch({
          type: GET_DATA,
          payload: response.data.sort((a, b) => a.rank - b.rank)
        });
      })
      .catch(err => {
        alert("FAILED TO LOAD DATA FROM API !!!!");
        return dispatch({
          type: FAILED_TO_LOAD_DATA,
          payload: []
        });
      });
  };
}
