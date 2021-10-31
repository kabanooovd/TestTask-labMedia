import axios from "axios";

const instance = axios.create({
    baseURL: 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/'
})

export const dataAPI = {
    getUsers() {
        return instance.get<ReceivedData_T[]>(`/users`)
    }
}

export type ReceivedData_T = {
    email: string
    id: string
    rating: number
    registration_date: string
    username: string
}
