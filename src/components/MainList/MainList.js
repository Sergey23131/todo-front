import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks} from "../../redux/actions/actions";
import {getTasks} from "../../services/task.service";
import {Task} from "../Task/Task";
import './mainList.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {AddForm} from "../AddForm/AddForm";
import {UpdateForm} from "../UpdateForm/UpdateForm";


export function MainList() {
    const [errors, setErrors] = useState('');

    const store = useSelector(state => {
        const {taskReducer} = state;
        return taskReducer
    });

    const dispatch = useDispatch();
    const {tasks} = store;

    useEffect(() => {
        getTasks(dispatch).then(value => dispatch(fetchTasks(value)))
    }, [tasks])

    return (
        <Router>
            <div className="MainList">
                <div className={'task-box'}>
                    <Switch>

                        <Route path={"/updateForm"} render={(props) => {
                            return <UpdateForm{...props}/>
                        }}/>

                        <Route exact path={'/addForm'} component={AddForm}/>
                        <Redirect exact to="/addForm"/>
                    </Switch>
                    <div className={'headers'}>
                        <h2 className={'first-header'}>Task</h2>
                        <h2 className={'second-header'}>Readiness</h2>
                    </div>
                    {
                        tasks.map((value) => <div key={value.id}><Task info={value} /></div>)
                    }
                </div>

            </div>
        </Router>
    );
}

