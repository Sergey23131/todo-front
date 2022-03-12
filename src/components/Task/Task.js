import './task.css';
import {useHistory} from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {deleteTask, updateTask} from "../../services/task.service";
import {useDispatch} from "react-redux";

export function Task({info}) {
    const dispatch = useDispatch();
    const {id} = info;

    const deleteFunc = () => {

        deleteTask(dispatch, {id})
    }

    const readinessChange = ()=>{
        if(info.readiness ==="Done"){

            const readiness = { readiness: 'In process'}

            const updatedreadiness = updateTask(dispatch,{readiness, id});
        }else if(info.readiness ==="In process"){

            const readiness = { readiness: 'Done'}
            updateTask(dispatch,{readiness, id});
        }
    }

    return (
        <div className="Task">
            <div className={"info-wrapper"}>
                <Link to={{pathname: '/updateForm', state: info}} className={'task-text'}>
                    <p>{info.task}</p>
                </Link>
                <div className={'task-readiness'} onClick={readinessChange}>
                    <p>{info.readiness}</p>
                </div>
            </div>
            <button className={"delete-button"} onClick={deleteFunc}>Delete</button>
        </div>
    );
}
