import { ActionTypes } from "../constants/actionTypes";

const initialState = {

    fetchedTasks: []

};

export const fetchedTasksReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.FETCH_TASKS:
            return {...state, fetchedTasks: payload};
        default:
            return state;
    }
}