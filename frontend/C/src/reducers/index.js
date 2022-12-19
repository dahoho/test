import { combineReducers } from "redux";
import { leftArryReducer } from "./arry";
import { rightArryReducer } from "./arry";

export const allReducers = combineReducers({
  leftArry: leftArryReducer,
  rightArry: rightArryReducer,
});
