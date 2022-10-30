import {ActionTypes} from '../constants/actionTypes'

export const setProjects = (projects) =>{
    return {
        type: ActionTypes.FETCH_DATA,
        payload: projects
    }
}

export const setTasks = (tasks) =>{
    return{
        type: ActionTypes.FETCH_TASKS,
        payload: tasks
    }
}

export const setNewPlan = (plan) =>{
    return{
        type: ActionTypes.CREATE_PLAN,
        payload: plan
    }
}