import React from "react";
import { combineReducers } from "redux";
import approveEmailReducer from "./approveEmailReducer";
import cancelMessageReducer from "./cancelMessageReducer";

const rootReducer = combineReducers({
  approveEmailReducer: approveEmailReducer,
  cancelMessageReducer: cancelMessageReducer,
});

export default rootReducer;
