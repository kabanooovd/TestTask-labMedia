

export const getFormatDate = (date: string) => {
    let someArr = date.split('-').reverse()
    return `${someArr[0][0]}${someArr[0][1]}.${someArr[1]}.${someArr[2]}`
}



