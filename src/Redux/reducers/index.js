import {combineReducers} from "redux";
import { fetchedDataReducer } from "./dataReducer";
import { fetchedTasksReducer } from "./taskReducer";

const reducers = combineReducers({
    allData: fetchedDataReducer,
    taskData: fetchedTasksReducer
});


export default reducers;
