import {combineReducers} from "redux";
import { fetchedDataReducer } from "./dataReducer";
import { fetchedTasksReducer } from "./taskReducer";
import { newPlanReducer } from "./newPlanReducer";

const reducers = combineReducers({
    allData: fetchedDataReducer,
    taskData: fetchedTasksReducer,
    createdPlans: newPlanReducer
});


export default reducers;
