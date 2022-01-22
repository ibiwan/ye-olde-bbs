import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { timeout } from '../../util'

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
    },
    reducers: {
        clearUsers: (stateSlice, _action) => {
            stateSlice.users = []
        },
        addUser: (stateSlice, action) => {
            stateSlice.users.push(action.payload)
        },
    }
})

export const { clearUsers, addUser } = usersSlice.actions

export const selectUsers = state => state.usersSlice.users

export const populateUserList = createAsyncThunk(
    'usersSlice/populateList',
    async (users = [], thunkApi) => {
        const { dispatch, getState } = thunkApi
        dispatch(clearUsers())

        for (const user of users) {
            dispatch(addUser(user))
            await timeout(300)
        }
    }
)

export default usersSlice.reducer
