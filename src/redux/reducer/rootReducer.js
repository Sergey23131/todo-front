import {combineReducers} from "redux";
import {taskReducer} from "./taskReducer";

export let rootReducer = combineReducers({taskReducer})
