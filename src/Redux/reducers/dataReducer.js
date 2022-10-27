import { ActionTypes } from "../constants/actionTypes";

const initialState = {

    fetchedData: []

};

export const fetchedDataReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.FETCH_DATA:
            return state;
        default:
            return state;
    }
}