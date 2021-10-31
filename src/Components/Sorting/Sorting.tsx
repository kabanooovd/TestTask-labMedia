import React from "react";
import SortingStyles from './Sorting.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    sortedByEarliestRegTime,
    sortedByHighestRating,
    sortedByLatestRegTime,
    sortedByLowestRating
} from "../bll/users-reducer";
import {MainApplicationType} from "../bll/store";
import {SWITCH_RATE_FLAG} from "../bll/app-common-reducer";

export const Sorting = () => {

    const dispatch = useDispatch()

    let sortingRateFlag = useSelector<MainApplicationType, boolean>(state => state.commonAppData.sortingRateFlag)
    const sortByRating = () => {
        if (sortingRateFlag) {
            dispatch(sortedByHighestRating())
            dispatch({type: SWITCH_RATE_FLAG, sortingValue: false})
        } else {
            dispatch(sortedByLowestRating())
            dispatch({type: SWITCH_RATE_FLAG, sortingValue: true})
        }
    }

    let sortRegTimeFlag = true
    const sortByRegTime = () => {
        if (sortRegTimeFlag) {
            dispatch(sortedByLatestRegTime())
            sortRegTimeFlag = false
        } else {
            dispatch(sortedByEarliestRegTime())
            sortRegTimeFlag = true
        }
    }

    return(
        <div className={SortingStyles.SortingWrapper}>
            <div className={SortingStyles.sortingContainer}>
                Сортировка:
                <span className={SortingStyles.sortingStyles} onClick={sortByRegTime}>Дата регистрации</span>
                <span className={SortingStyles.sortingStyles} onClick={sortByRating}>Рейтинг</span>
            </div>
        </div>
    )
}