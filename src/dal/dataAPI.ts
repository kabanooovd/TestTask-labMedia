import axios from "axios";

const instance = axios.create({
    baseURL: 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/'
})

export const dataAPI = {
    getUsers() {
        return instance.get<ReceivedData_T[]>(`/users`)
    }
}
// https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users?page=1&count=5
export type ReceivedData_T = {
    email: string
    id: string
    rating: number
    registration_date: string
    username: string
}

// https://efim360.ru/javascript-paginacziya-silami-klienta/
// https://www.youtube.com/watch?v=s59kRbD4Sw8

