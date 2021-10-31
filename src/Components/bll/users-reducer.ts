import {dataAPI, ReceivedData_T} from "../../dal/dataAPI";
import {Dispatch} from "redux";

const SET_DATA = 'users/SET_DATA'
const REMOVE_USER = 'users/REMOVE_USER'

const initState: ReceivedData_T[] = []

export const usersReducer = (state: ReceivedData_T[] = initState, action: UsersActionType): ReceivedData_T[] => {
    switch (action.type) {
        case SET_DATA: {
            return [...action.payload.data.map(el => ({...el, key: el.id}))]
        }
        case REMOVE_USER: {
            return state.filter(el => el.id !== action.userID)
        }
        default: return state
    }
}
export type RemoveUser_T = ReturnType<typeof removeUser>
export const removeUser = (userID: string) => {
    return {type: REMOVE_USER, userID} as const
}

export type SetData_T = ReturnType<typeof setData>
export const setData = (payload: {data: ReceivedData_T[]}) => {
    return {type: SET_DATA, payload} as const
}

type UsersActionType = SetData_T | RemoveUser_T

export const setReceivedDAta = (dispatch: Dispatch) => {
    dataAPI.getUsers()
        .then(res => {
            dispatch(setData({data: res.data}))
        })
        .catch(err => {
            alert(err.message)
        })
}