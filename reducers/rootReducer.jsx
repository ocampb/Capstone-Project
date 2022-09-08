import React from "react";

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DUMMY_CASE":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

export default rootReducer;
