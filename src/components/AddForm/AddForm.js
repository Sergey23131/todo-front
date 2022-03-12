import {MainList} from "../MainList/MainList";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createTask, updateTask} from "../../services/task.service";
import './addForm.css'

export function AddForm() {
    const [errors, setErrors] = useState('');

    const dispatch = useDispatch();

    const addTaskfunc = (e) => {
        try {
            e.preventDefault();

            const task ={task:e.target.task.value}

            const addedTask = createTask(dispatch,{task});

            if (addedTask.message) {
                throw new Error(addedTask.message)
            } else {
                setErrors('Something went wrong')
            }

        } catch (err) {
            setErrors(err.message)
        }
    };

    return (
        <div className="AddForm">
            <div className={'form-wrapper'}>
                <h2>New Task</h2>
                <form className={'add-form'} onSubmit={addTaskfunc}>
                    <input type='text' name={'task'} className={'inputChange'}/>
                    <button className={'add-button'}>Add</button>
                </form>
            </div>

        </div>
    );
}

