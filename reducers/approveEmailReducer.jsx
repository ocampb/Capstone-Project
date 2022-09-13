import React from "react";

const initialState = {
  approved: {
    Email: "",
    Name: "",
    Notes: "",
  },
  listOfApproved: [],
};

const approveEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_APPROVED_EMAIL":
      return { ...state, approved: { ...approved, Email: action?.payload } };
    case "SET_APPROVED_NAME":
      return { ...state, items: [...newItems, action?.payload] };
    case "SET_APPROVED_NOTES":
      return { ...state, items: [...newItems, action?.payload] };
    case "EMAIL_LIST":
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

export default approveEmailReducer;
