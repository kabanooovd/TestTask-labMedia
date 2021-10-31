import {applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {usersReducer} from "./users-reducer";
import {appCommonReducer} from "./app-common-reducer";

export type MainApplicationType = ReturnType<typeof RootReducer>
const RootReducer = combineReducers({
    users: usersReducer,
    commonAppData: appCommonReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store