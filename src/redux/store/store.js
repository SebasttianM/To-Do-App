import { createStore, combineReducers } from "redux"
import { TodoReducer } from "../reducers/TodoReducer"

const reducers= combineReducers({
    todo: TodoReducer

})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);