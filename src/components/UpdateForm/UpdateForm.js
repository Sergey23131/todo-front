import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {updateTask} from "../../services/task.service";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import './updateForm.css'

export function UpdateForm({location:state}) {
    const [errors, setErrors] = useState('');

    const dispatch = useDispatch();
    const history=useHistory();

    const {id} = state.state
    const inputTask = state.state.task

    const updateTaskfunc = (e) => {
        try {
            e.preventDefault();

            const task ={task:e.target.task.value}

            const updatedTask = updateTask(dispatch,{task, id});

            if (updatedTask.message) {
                throw new Error(updatedTask.message)
            } else {
                setErrors('Something went wrong')
            }

            history.push('/addForm')

        } catch (err) {
            setErrors(err.message)
        }
    };


    return (
        <div className="UpdateForm">
            <div className={'form-wrapper'}>
                <h2>Update Task</h2>
                <form className={'add-form'} onSubmit={updateTaskfunc}>
                    <input type='text' name={'task'} placeholder={inputTask} className={'inputChange'}/>
                        <button  className={'update-button'}>Update</button>
                </form>
            </div>
        </div>
    );
}
