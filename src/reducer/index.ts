import { combineReducers } from "redux";
import calc from "./calc";

const rootReducer = combineReducers({ calc });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
