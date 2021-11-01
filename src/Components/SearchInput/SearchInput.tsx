import React, {useState} from "react";
import SearchInputStyles from './SearchInput.module.css'
import {useDispatch, useSelector} from "react-redux";
import {MainApplicationType} from "../../bll/store";
import {setSearchValue} from "../../bll/app-common-reducer";

export const SearchInput = () => {

    const dispatch = useDispatch()

    const userNames = useSelector<MainApplicationType, string[]>(state => state.users.map(el => el.username))
    const userEmails = useSelector<MainApplicationType, string[]>(state => state.users.map(el => el.email))

    const searchFormValue = useSelector<MainApplicationType, string>(state => state.commonAppData.searchForm)

    const searchUserHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(e.currentTarget.value))
    }

    let commonArr = [...userNames, ...userEmails]

    return (
        <div className={SearchInputStyles.SearchInputWrapper}>
            <div className={SearchInputStyles.inputContainer}>
                <input className={SearchInputStyles.inputStyles}
                       type="text"
                       placeholder={'🔍 Поиск по имени или e-mail'}
                       onChange={searchUserHandler}
                       value={searchFormValue}
                />
                {searchFormValue !== '' && <div className={SearchInputStyles.searchHelper}>
                    {commonArr.filter(el => el.includes(searchFormValue)).map(el => {
                        return (
                            <div className={SearchInputStyles.selectedPosition}>{el}</div>
                        )
                    })}


                </div>}
                <span className={SearchInputStyles.refreshFilterStyles}>&#10004; Очистить фильтер</span>
            </div>
        </div>
    )
}






