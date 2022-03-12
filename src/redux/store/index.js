import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducer/rootReducer";
import ReduxThunk from "redux-thunk"

export let store = createStore(rootReducer,applyMiddleware(ReduxThunk));
