import axios from "axios";
export const SUCCESS_LOADING = "SUCCESS_LOADING";
export const START_LOADING = "START_LOADING";
export const ERROR_LOADING = "ERROR_LOADING";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: START_LOADING });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => dispatch({ type: SUCCESS_LOADING, payload: res.data }))
      .catch((err) => dispatch({ type: ERROR_LOADING, payload: err }));
  };
};

export const addSmurf = (smurf) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => dispatch({ type: ADD_SMURF, payload: res.data }))
      .catch((err) => dispatch({ type: ERROR_LOADING, payload: err }));
  };
};
