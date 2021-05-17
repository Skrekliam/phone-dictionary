import contactsReducer from "./contacts";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    contact: contactsReducer,
})

export default allReducers;