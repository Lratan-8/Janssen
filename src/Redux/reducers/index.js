import {combinedReducers} from "redux";
import { fetchedDataReducer } from "./dataReducer";

const reducers = combinedReducers({
    allData: fetchedDataReducer
});


export default reducers;
