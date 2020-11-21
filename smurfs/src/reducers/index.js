import {
  SUCCESS_LOADING,
  START_LOADING,
  ERROR_LOADING,
  ADD_SMURF,
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  isError: false,
  error: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR_LOADING:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload.message,
      };
    case SUCCESS_LOADING:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        isError: false,
        error: "",
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
