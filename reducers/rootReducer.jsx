import React from "react";

const initialState = {
  counter: 0,
  items: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DUMMY_CASE":
      return { ...state, counter: state.counter + 1 };
    case "ADD_EMAIL":
      const newItems = state.items;
      console.log(newItems);
      return { ...state, items: [...newItems, action?.payload] };
    case "REMOVE_EMAIL":
      return {
        ...state,
        items: [...state.items].filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
