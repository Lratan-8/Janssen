import { ActionTypes } from "../constants/actionTypes";

const initialState = {

    plansCart: []

};

export const newPlanReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.CREATE_PLAN:
            return {...state, plansCart: payload};
        default:
            return state;
    }
}