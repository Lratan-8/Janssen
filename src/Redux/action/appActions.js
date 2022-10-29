import {ActionTypes} from '../constants/actionTypes'

export const setProjects = (projects) =>{
    return {
        type: ActionTypes.FETCH_DATA,
        payload: projects
    }
}