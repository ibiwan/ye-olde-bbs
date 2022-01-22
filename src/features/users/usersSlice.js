import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [
            {
                id: 18,
                name: "Maverick",
                email: "mav@topgun.mil",
                gender: "male",
                status: "active",
            },
            {
                id: 19,
                name: "Goose",
                email: "gosling@topgun.mil",
                gender: "male",
                status: "inactive",
            },
        ],
    },
    reducers: {
        setUsers: (stateSlice, action) => {
            stateSlice.users = action.payload
        }
    }
})

export const { setUsers } = usersSlice.actions

export const selectUsers = state => state.usersSlice.users

export default usersSlice.reducer
