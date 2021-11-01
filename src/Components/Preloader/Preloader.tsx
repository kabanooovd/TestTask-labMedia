import React from "react";
import PreloaderStyles from './Preloader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {MainApplicationType} from "../../bll/store";
import {LoadingModesType} from "../../bll/app-common-reducer";

export const Preloader = () => {

    const dispatch = useDispatch()

    const loadingMode = useSelector<MainApplicationType, LoadingModesType>(state => state.commonAppData.isLoading)

    return(
        <div className={PreloaderStyles.PreloaderWrapper}>
            {loadingMode === 'loading' && <h3>Loading...</h3>}
        </div>
    )
}




