import {fetchAddTask, fetchDeleteTask, fetchUpdateTask} from "../redux/actions/actions";
import axios from "axios";

const config = {baseURL: 'http://localhost:5000/list'}

const axiosInstance = axios.create(config)

const getTasks = async () => {
    const response = await fetch('http://localhost:5000/list')
        .then(value => value.json())
    return response
};

const createTask = async (dispatch, {task}) => {
    const response = await fetch('http://localhost:5000/list', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((value) => value.json())
    dispatch(fetchAddTask(response))
};

const updateTask = async (dispatch, {task, id}) => {
    const response = await fetch(`http://localhost:5000/list/${id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((value) => value.json())
    dispatch(fetchUpdateTask(response))
}

const deleteTask = async (dispatch, {id}) => {
    const response = await fetch(`http://localhost:5000/list/${id}`, {
        method: 'DELETE',
    }).then((value) => value.json())
    dispatch(fetchDeleteTask(response))
};

export {getTasks, deleteTask, updateTask, createTask}


/*
const config = {baseURL: 'http://localhost:5000/list'}

const axiosInstance = axios.create(config)

const getTasks = () => axiosInstance.get('')

const createTask = (dispatch, {task}) => {
    axiosInstance.post('', task)
        .then((value) => dispatch(fetchAddTask(value)))
}

const updateTask = (dispatch, {task, id}) => {
    axiosInstance.post('/' + {id}, task)
        .then((value) => dispatch(fetchUpdateTask(value)))
}

const deleteTask = (dispatch, {id}) => {
    axiosInstance.post('' + {id})
        .then((value) => dispatch(fetchDeleteTask(value)))
}*/
