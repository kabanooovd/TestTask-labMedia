import React from "react";
import headStyles from './Header.module.css'

export const Header = () => {

    return(
        <div className={headStyles.headerWrapper}>
            <h1 className={headStyles.header}>Список пользователей</h1>
        </div>
    )
}

