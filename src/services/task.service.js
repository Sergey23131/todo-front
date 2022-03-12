import {fetchAddTask, fetchDeleteTask, fetchUpdateTask} from "../redux/actions/actions";

const url = 'http://localhost:5000/list/'

const getTasks = async () => {
    const response = await fetch(url)
        .then(value => value.json())
    return response
};

const createTask = async (dispatch, {task}) => {
    const response = await fetch(url, {
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
    const response = await fetch(url + id, {
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
    const response = await fetch(url + id, {
        method: 'DELETE',
    }).then((value) => value.json())
    dispatch(fetchDeleteTask(response))
};

export {getTasks, deleteTask, updateTask, createTask}
