import {fetchAddTask, fetchDeleteTask, fetchUpdateTask} from "../redux/actions/actions";
import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'http://localhost:5000/list/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})

const getTasks = () => AXIOS.get('').then(value => value.data)

const createTask = async (dispatch, {task}) => {
    const {data} = await AXIOS.post('', task) || {};
    dispatch(fetchAddTask(data))
}

const updateTask = async (dispatch, {task, id}) => {
    const {data} = await AXIOS.put('' + id, task) || {};
    dispatch(fetchUpdateTask(data))
}

const deleteTask = async (dispatch, {id}) => {
    const {data} = await AXIOS.delete('' + id) || {};
    dispatch(fetchDeleteTask(data))
}


export {getTasks, deleteTask, updateTask, createTask}
