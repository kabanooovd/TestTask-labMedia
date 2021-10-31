import {dataAPI, ReceivedData_T} from "../../dal/dataAPI";
import {Dispatch} from "redux";
import {setLoadingMode} from "./app-common-reducer";

const SET_DATA = 'users/SET_DATA'
const REMOVE_USER = 'users/REMOVE_USER'
const SORT_LOWEST_RATING = 'users/SORT_LOWEST_RATING'
const SORT_HIGHEST_RATING = 'users/SORT_HIGHEST_RATING'
const SORT_LATEST_REG_USER = 'user/SORT_LATEST_REG_USER'
const SORT_EARLIEST_REG_USER = 'user/SORT_EARLIEST_REG_USER'

const initState: ReceivedData_T[] = []

export const usersReducer = (state: ReceivedData_T[] = initState, action: UsersActionType): ReceivedData_T[] => {
    switch (action.type) {
        case SET_DATA:
            return [...action.payload.data.map(el => ({...el, key: el.id}))]
        case REMOVE_USER:
            return state.filter(el => el.id !== action.userID)
        case SORT_LOWEST_RATING:
            return [...state.sort((a, b) => a.rating > b.rating ? 1 : -1)]
        case SORT_HIGHEST_RATING:
            return [...state.sort((a, b) => a.rating < b.rating ? 1 : -1)]
        case SORT_LATEST_REG_USER:
            return [...state.sort((a, b) => a.registration_date > b.registration_date ? 1 : -1)]
        case SORT_EARLIEST_REG_USER:
            return [...state.sort((a, b) => a.registration_date < b.registration_date ? 1 : -1)]
        default: return state
    }
}
export type SortedByEarliestRegTime_T = ReturnType<typeof sortedByEarliestRegTime>
export const sortedByEarliestRegTime = () => {
    return {type: SORT_EARLIEST_REG_USER} as const
}
export type SortedByLatestRegTime_T = ReturnType<typeof sortedByLatestRegTime>
export const sortedByLatestRegTime = () => {
    return {type: SORT_LATEST_REG_USER} as const
}

export type SortedByHighestRating_T = ReturnType<typeof sortedByHighestRating>
export const sortedByHighestRating = () => {
    return {type: SORT_HIGHEST_RATING} as const
}

export type SortedByLowestRating_T = ReturnType<typeof sortedByLowestRating>
export const sortedByLowestRating = () => {
    return {type: SORT_LOWEST_RATING} as const
}

export type RemoveUser_T = ReturnType<typeof removeUser>
export const removeUser = (userID: string) => {
    return {type: REMOVE_USER, userID} as const
}

export type SetData_T = ReturnType<typeof setData>
export const setData = (payload: {data: ReceivedData_T[]}) => {
    return {type: SET_DATA, payload} as const
}

type UsersActionType = SetData_T
    | RemoveUser_T
    | SortedByLowestRating_T
    | SortedByHighestRating_T
    | SortedByLatestRegTime_T
    | SortedByEarliestRegTime_T

export const setReceivedDAta = (dispatch: Dispatch) => {
    dispatch(setLoadingMode('loading'))
    dataAPI.getUsers()
        .then(res => {
            dispatch(setData({data: res.data}))
            dispatch(setLoadingMode('idle'))
        })
        .catch(err => {
            alert(err.message)
            dispatch(setLoadingMode('failed'))
        })
}