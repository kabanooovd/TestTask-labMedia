import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {usersReducer} from "./users-reducer";

export type MainApplicationType = ReturnType<typeof RootReducer>
const RootReducer = combineReducers({
    users: usersReducer
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store