import { combineReducers, createStore } from "redux";
import { forecastReducer } from "./forecast/forecastReducer";

const rootReducer = combineReducers({
   forecast: forecastReducer,
})

export const store = createStore(rootReducer);