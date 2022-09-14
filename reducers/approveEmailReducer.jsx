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
      return { ...state, approved: { ...approved, Name: action?.payload } };
    case "SET_APPROVED_NOTES":
      return { ...state, approved: { ...approved, Notes: action?.payload } };
    case "EMAIL_LIST":
      return { ...state };
    case "REMOVE_EMAIL":
      return { ...state };
    default:
      return state;
  }
};

export default approveEmailReducer;
