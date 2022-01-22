import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { timeout } from '../../util'

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        selectedUserId: null,
    },
    reducers: {
        clearUsers: (stateSlice, _action) => {
            stateSlice.users = []
        },
        addUser: (stateSlice, action) => {
            stateSlice.users.push(action.payload)
        },
        selectUserId: (stateSlice, action) => {
            stateSlice.selectedUserId = action.payload
        }
    }
})

export const { clearUsers, addUser, selectUserId } = usersSlice.actions

export const selectUsers = state => state.usersSlice.users
export const selectSelectedUserId = state => state.usersSlice.selectedUserId
export const selectUserById = target_id => state =>
    state.usersSlice.users.find(({ id }) => id === target_id)

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
