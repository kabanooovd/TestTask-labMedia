import React from "react";
import SortingStyles from './Sorting.module.css'

export const Sorting = () => {

    return(
        <div className={SortingStyles.SortingWrapper}>
            <div className={SortingStyles.sortingContainer}>
                Сортировка:
                <span className={SortingStyles.sortingStyles}>Дата регистрации</span>
                <span className={SortingStyles.sortingStyles}>Рейтинг</span>
            </div>
        </div>
    )
}