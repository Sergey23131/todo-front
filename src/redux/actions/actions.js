import {ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK} from "./actionTypes";

let fetchTasks = (value) => {
    return {type: GET_TASKS, payload: value};
}

let fetchAddTask = (value) => {
    return {type: ADD_TASK, payload: value};
}

let fetchUpdateTask = (value) => {
    return {type: UPDATE_TASK, payload: value};
}

let fetchDeleteTask = (value) => {
    return {type: DELETE_TASK, payload: value};
}


export {fetchTasks, fetchUpdateTask, fetchAddTask, fetchDeleteTask}
