import React, {useEffect, useState} from "react";
import tableStyles from './MyTable.module.css'
import 'antd/dist/antd.css';
import {Popconfirm, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {removeUser, setReceivedDAta} from "../../bll/users-reducer";
import {MainApplicationType} from "../../bll/store";
import {ReceivedData_T} from "../../dal/dataAPI";
import {getFormatDate} from "../../utils/helpers";

export const MyTable = () => {

    const dispatch = useDispatch()

    const users = useSelector<MainApplicationType, ReceivedData_T[]>(state => state.users)

    useEffect(() => {
        dispatch(setReceivedDAta)
    }, [dispatch])

    function RemovePositionHandler (userID: string) {
        dispatch(removeUser(userID))
    }

    // const columns = [
    //     { title: 'Имя польхователя', dataIndex: 'username' },
    //     { title: 'eMail', dataIndex: 'email' },
    //     { title: 'Дата регистрации', dataIndex: 'registration_date' },
    //     { title: 'Рейтинг', dataIndex: 'rating'},
    //     {
    //         title: '',
    //         dataIndex: 'action',
    //         render: (_: any, record: any) =>
    //             <Popconfirm title="Вы уверены, что хотите удалить пользователя?"
    //                         onConfirm={() => RemovePositionHandler(record.id)}
    //             >
    //                 <span className={tableStyles.rmBtnStyles}>&times;</span>
    //             </Popconfirm>
    //     },
    // ]

    const columns = [
        { title: 'Имя пользователя', dataIndex: 'username' },
        { title: 'eMail', dataIndex: 'email' },
        {
            title: 'Дата регистрации',
            dataIndex: 'registration_date' ,
            render: (dataIndex: string) =>
                <span>{getFormatDate(dataIndex)}</span>

        },
        { title: 'Рейтинг', dataIndex: 'rating'},
        {
            title: '',
            dataIndex: 'action',
            render: (_: any, record: any) =>
                <Popconfirm title="Вы уверены, что хотите удалить пользователя?"
                            onConfirm={() => RemovePositionHandler(record.id)}
                >
                    <span className={tableStyles.rmBtnStyles}>&times;</span>
                </Popconfirm>
        },
    ]

    return(
        <div className={tableStyles.tableWrapper}>
            <div>
                <Table dataSource={users}
                       columns={columns}
                       pagination={{ pageSize: 5 }}
                >
                </Table>
            </div>
        </div>
    )
}





