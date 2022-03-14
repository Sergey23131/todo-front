import {updateTask} from "../../services/task.service";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import './updateForm.css'

export function UpdateForm({location:state}) {
    const dispatch = useDispatch();
    const history=useHistory();

    const {id} = state.state
    const inputTask = state.state.task

    const updateTaskfunc = (e) => {
            e.preventDefault();

            const task ={task:e.target.task.value}

            updateTask(dispatch,{task, id});

            history.push('/addForm')

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
