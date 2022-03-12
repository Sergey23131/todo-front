import {useDispatch} from "react-redux";
import {createTask} from "../../services/task.service";
import './addForm.css'

export function AddForm() {

    const dispatch = useDispatch();

    const addTaskfunc = (e) => {
        e.preventDefault();

        const task = {task: e.target.task.value}

        createTask(dispatch, {task});

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

