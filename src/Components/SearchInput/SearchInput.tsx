import React from "react";
import SearchInputStyles from './SearchInput.module.css'
import {useDispatch, useSelector} from "react-redux";
import {MainApplicationType} from "../../bll/store";
import {setSearchValue, switchSortingMode} from "../../bll/app-common-reducer";
import {setReceivedDAta, showFoundEmail, showFoundUserName} from "../../bll/users-reducer";

export const SearchInput = () => {

    const dispatch = useDispatch()

    const userNames = useSelector<MainApplicationType, string[]>(state => state.users.map(el => el.username))
    const userEmails = useSelector<MainApplicationType, string[]>(state => state.users.map(el => el.email))
    const searchFormValue = useSelector<MainApplicationType, string>(state => state.commonAppData.searchForm)

    const searchUserHandler = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.currentTarget.value))

    let commonArr = [...userNames, ...userEmails]

    const refreshFiltersHandler = () => {
        dispatch(switchSortingMode(null))
        dispatch(setReceivedDAta)
    }

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
                    {commonArr.filter(el => el.toLowerCase().includes(searchFormValue.toLowerCase())).map(el => {
                        const chosenPositionHandler = () => {
                            userNames.includes(el) ? dispatch(showFoundUserName(el)) : dispatch(showFoundEmail(el))
                            dispatch(setSearchValue(''))
                        }
                        return (
                            <div className={SearchInputStyles.selectedPosition}
                                 onClick={chosenPositionHandler}>
                                {el}
                            </div>
                        )
                    })}
                </div>}
                <span className={SearchInputStyles.refreshFilterStyles} onClick={refreshFiltersHandler}>&#10004; Очистить фильтер</span>
            </div>
        </div>
    )
}






