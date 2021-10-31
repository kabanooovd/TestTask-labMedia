import React from "react";
import SearchInputStyles from './SearchInput.module.css'

export const SearchInput = () => {

    return (
        <div className={SearchInputStyles.SearchInputWrapper}>
            <div className={SearchInputStyles.inputContainer}>
                <input className={SearchInputStyles.inputStyles}
                       type="text"
                       placeholder={'🔍 Поиск по имени или e-mail'}
                />
                <span className={SearchInputStyles.refreshFilterStyles}>refresh filter</span>
            </div>
        </div>
    )
}






