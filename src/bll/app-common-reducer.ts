const SET_LOADING_MODE = 'app/SET_LOADING_MODE'
export const SWITCH_RATE_FLAG = 'app/SWITCH_RATE_FLAG'
export const SWITCH_DATE_FLAG = 'app/SWITCH_DATE_FLAG'
const SET_SEARCH_VALUE = 'app/SET_SEARCH_VALUE'
const SWITCH_SORTING_MODE = 'app/SWITCH_SORTING_MODE'

export type LoadingModesType = 'idle' | 'succeeded' | 'loading' | 'failed'
export type SortingModeTypes = 'byRegDate' | 'byRate' | null
export type CommonAppStateType = {
    isLoading: LoadingModesType
    sortingRateFlag: boolean
    sortRegTimeFlag: boolean
    searchForm: string
    sortingMode: SortingModeTypes
}

const initState: CommonAppStateType = {
    isLoading: 'idle',
    sortingRateFlag: true,
    sortRegTimeFlag: true,
    searchForm: '',
    sortingMode: null,
}

export const appCommonReducer = (state: CommonAppStateType = initState, action: CommonAppActionTypes): CommonAppStateType => {
    switch (action.type) {
        case SET_LOADING_MODE:
            return {...state, isLoading: action.isLoading}
        case SWITCH_RATE_FLAG:
            return {...state, sortingRateFlag: action.sortingValue}
        case SWITCH_DATE_FLAG:
            return {...state, sortRegTimeFlag: action.sortingRegValue}
        case SET_SEARCH_VALUE:
            return {...state, searchForm: action.value}
        case SWITCH_SORTING_MODE:
            return {...state, sortingMode: action.sortingMode}
        default: return state
    }
}
export type SwitchSortingMode_T = ReturnType<typeof switchSortingMode>
export const switchSortingMode = (sortingMode: SortingModeTypes) => {
    return {type: SWITCH_SORTING_MODE, sortingMode} as const
}

export type SetSearchValue_T = ReturnType<typeof setSearchValue>
export const setSearchValue = (value: string) => {
    return {type: SET_SEARCH_VALUE, value} as const
}

export type SortingRateFlag_T = {type: 'app/SWITCH_RATE_FLAG', sortingValue: boolean}
export type SortingDateFlag_T = {type: 'app/SWITCH_DATE_FLAG', sortingRegValue: boolean}

export type SetLoadingMode_T = ReturnType<typeof setLoadingMode>
export const setLoadingMode = (isLoading: LoadingModesType) => {
    return {type: SET_LOADING_MODE, isLoading} as const
}

export type CommonAppActionTypes = SetLoadingMode_T
    | SortingRateFlag_T
    | SetSearchValue_T
    | SortingDateFlag_T
    | SwitchSortingMode_T