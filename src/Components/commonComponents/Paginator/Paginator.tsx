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























// import React, {useState} from "react";
// import s from './Paginator.module.css'
//
// export const Paginator = ({
//     totalCount,
//     pageSize,
//     onPageChanged,
//     currentPage,
// } : {
//     totalCount: number
//     pageSize: number
//     onPageChanged: (page: number) => void
//     currentPage: number
// }) => {
//
//     let pagesCount = Math.ceil(totalCount / pageSize);
//
//     let pages: number[] = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//
//     let portionSize = 5
//
//     let portionCount = Math.ceil(pagesCount / portionSize);
//     let [portionNumber, setPortionNumber] = useState(1);
//
//     let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
//     let rightPortionNumber = portionNumber * portionSize;
//
//     return (
//         <div className={s.paginator}>
//             {portionNumber > 1 &&
//             <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
//             {pages
//                 .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
//                 .map((el, index) => {
//                 return (
//                     <div key={index}
//                           className={currentPage === el ? s.selectedPage : s.notSelected}
//                           onClick={(e) => {
//                               onPageChanged(el)
//                           }}
//                     >{" " + el + " "}</div>
//                 )
//             })}
//             {portionCount > portionNumber &&
//             <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
//         </div>
//     )
// }
//
