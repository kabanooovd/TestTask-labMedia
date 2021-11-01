import React from "react";
import ConfirmationStyles from './ConfirmComponent.module.css'
import {useDispatch} from "react-redux";
import {changeModalFlagMode, removeUser} from "../../../bll/users-reducer";

export const ConfirmComponent = ({
    userID, setRmBtnDisabledMode
} : {
    userID: string, setRmBtnDisabledMode: (rmBtnDisabledMode: boolean) => void
}) => {

    const dispatch = useDispatch()

    const onConfirmHandler = () => {
        dispatch(removeUser(userID))
        setRmBtnDisabledMode(false)
    }

    const onRejectHandler = () => {
        dispatch(changeModalFlagMode(userID, false))
        setRmBtnDisabledMode(false)
    }

    return (
        <div className={ConfirmationStyles.confirmationWrapper}>
            <div>Вы уверены, что хотите удалить пользователя?</div>
            <div className={ConfirmationStyles.btnWrapper}>
                <button onClick={onConfirmHandler}>Да</button>
                <button onClick={onRejectHandler}>Нет</button>
            </div>

        </div>

    )
}



