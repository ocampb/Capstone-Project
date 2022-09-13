import React from "react";
import { combineReducers } from "redux";
import approveEmailReducer from "./approveEmailReducer";

const rootReducer = combineReducers({
  approveEmailReducer: approveEmailReducer,
});

export default rootReducer;
