import { thunk } from "redux-thunk";
import { addProjectReducer, projectListReducer } from "./projectReducer/projectReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";



const reducer = combineReducers({
    projectLists: projectListReducer,
    addProject: addProjectReducer
})

const middleware = applyMiddleware(thunk)

const store = createStore(
    reducer, middleware

)

export default store