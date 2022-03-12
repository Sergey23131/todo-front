import {ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK} from '../actions/actionTypes'

export const taskReducer = (state = {tasks: []}, action) => {

    switch (action.type) {
        case GET_TASKS:
            return {...state, tasks: [...action.payload]};

        case ADD_TASK:
            let newTask = action.payload
            let newTaskArray = [...state.tasks, newTask]
            return {...state, tasks: [...newTaskArray]}

        case UPDATE_TASK:
            let updateTask = action.payload
            let updateTaskArray = [...state.tasks, updateTask]
            return {...state, tasks: [...updateTaskArray]}

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((item) => item !== action.payload)
            }

        default:
            return state;
    }

}
