import { combineReducers } from "@reduxjs/toolkit";

import employeeSlice from "./slice/employeeSlice";

const rootReducer = combineReducers({
  employee: employeeSlice,
});

export default rootReducer;
