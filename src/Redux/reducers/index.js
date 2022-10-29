import {combineReducers} from "redux";
import { fetchedDataReducer } from "./dataReducer";

const reducers = combineReducers({
    allData: fetchedDataReducer
});


export default reducers;
