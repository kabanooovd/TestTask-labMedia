import React from "react";
import s from './Paginator.module.css'

export const Paginator = ({
    usersPerPage,
    totalUsers,
    setCurrentPage,
    currentPage,
} : {
    usersPerPage: number,
    totalUsers: number,
    currentPage: number,
    setCurrentPage: Function,
}) => {

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage((next: number) => next + 1)
    const prevPage = () => setCurrentPage((prev: number) => prev - 1)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <div className={s.paginationWrapper}>
            <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
            <div className={s.paginator}>
                {
                    pageNumbers.map(el => (
                        <div key={el} className={currentPage === el ? s.selectedPage : s.notSelected}  onClick={() => paginate(el)}>
                            <div>
                                {el}
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={nextPage} disabled={currentPage === pageNumbers.length}>Next</button>
        </div>
    )
}
