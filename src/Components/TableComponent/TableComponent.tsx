import React, {useEffect, useState} from "react";
import TableStyles from './TableComponent.module.css'
import {useDispatch, useSelector} from "react-redux";
import {MainApplicationType} from "../../bll/store";
import {changeModalFlagMode, setReceivedDAta, UsersState_T} from "../../bll/users-reducer";
import {getFormatDate} from "../../utils/helpers";
import {Paginator} from "../commonComponents/Paginator/Paginator";
import {ConfirmComponent} from "../commonComponents/ConfirmComponent/ConfirmComponent";

export const TableComponent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReceivedDAta)
    }, [dispatch])

    const users = useSelector<MainApplicationType, UsersState_T>(state => state.users)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const usersPerPage: number = 5

    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const currentUserPage = users.slice(firstUserIndex, lastUserIndex)

    const [rmBtnDisabledMode, setRmBtnDisabledMode] = useState(false)

    const mappedPositions = currentUserPage.map((el) => {
        const RemovePositionHandler = () => {
            dispatch(changeModalFlagMode(el.id, !el.modalFlag))
            setRmBtnDisabledMode(true)
        }

        return (
            <tr key={el.id} className={TableStyles.td2}>
                <td className={TableStyles.td1} style={{width: '200px'}}> {el.username} </td>
                <td className={TableStyles.td1} style={{width: '250px'}}> {el.email} </td>
                <td className={TableStyles.td1}
                    style={{width: '150px', textAlign: 'center'}}> {getFormatDate(el.registration_date)} </td>
                <td className={TableStyles.td1} style={{textAlign: 'center'}}> {el.rating} </td>
                <td className={TableStyles.td1}>
                    {/*<ConfirmComponent />*/}
                    {el.modalFlag && <ConfirmComponent userID={el.id} setRmBtnDisabledMode={setRmBtnDisabledMode}/>}
                    <div className={!rmBtnDisabledMode ? TableStyles.removeBtnStyles : TableStyles.disabledRemoveBtnStyles} onClick={RemovePositionHandler}>&#10006;</div>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <div className={TableStyles.tableWrapper}>
                <table>
                    <tr className={TableStyles.tableHeaders}>
                        <th className={TableStyles.eachHeader}>Имя пользователя</th>
                        <th className={TableStyles.eachHeader}>E-mail</th>
                        <th className={TableStyles.eachHeader}>Дата регистрации</th>
                        <th className={TableStyles.eachHeader}>Рейтинг</th>
                        <th className={TableStyles.eachHeader}/>
                    </tr>
                    {mappedPositions}
                </table>
            </div>
            <Paginator usersPerPage={usersPerPage}
                       totalUsers={users.length}
                       currentPage={currentPage}
                       setCurrentPage={setCurrentPage}
            />
        </div>
    )
}