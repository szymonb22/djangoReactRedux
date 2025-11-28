import { thunk } from "redux-thunk";
import { projectListReducer } from "./projectReducer/projectReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";



const reducer = combineReducers({
   projectLists: projectListReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store