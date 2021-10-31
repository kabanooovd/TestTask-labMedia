const SET_LOADING_MODE = 'app/SET_LOADING_MODE'
export const SWITCH_RATE_FLAG = 'app/SWITCH_RATE_FLAG'

export type LoadingModesType = 'idle' | 'succeeded' | 'loading' | 'failed'
export type CommonAppStateType = {
    isLoading: LoadingModesType
    sortingRateFlag: boolean
    sortRegTimeFlag: boolean
}

const initState: CommonAppStateType = {
    isLoading: 'idle',
    sortingRateFlag: true,
    sortRegTimeFlag: true,
}

export const appCommonReducer = (state: CommonAppStateType = initState, action: CommonAppActionTypes): CommonAppStateType => {
    switch (action.type) {
        case SET_LOADING_MODE:
            return {...state, isLoading: action.isLoading}
        case SWITCH_RATE_FLAG:
            return {...state, sortingRateFlag: action.sortingValue}
        default: return state
    }
}

export type SortingRateFlag_T = {type: 'app/SWITCH_RATE_FLAG', sortingValue: boolean}

export type SetLoadingMode_T = ReturnType<typeof setLoadingMode>
export const setLoadingMode = (isLoading: LoadingModesType) => {
    return {type: SET_LOADING_MODE, isLoading} as const
}

export type CommonAppActionTypes = SetLoadingMode_T | SortingRateFlag_T