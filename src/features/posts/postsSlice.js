import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { timeout } from '../../util'

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
    },
    reducers: {
        clearPosts: (stateSlice, _action) => {
            stateSlice.posts = []
        },
        addPostToState: (stateSlice, action) => {
            stateSlice.posts.push(action.payload)
        },
    }
})

export const { clearPosts, addPostToState, setPostCreateMode } = postsSlice.actions

export const selectPosts = state => state.postsSlice.posts

export const populatePostsList = createAsyncThunk(
    'postsSlice/populateList',
    async (posts = [], thunkApi) => {
        const { dispatch, getState } = thunkApi
        dispatch(clearPosts())

        for (const post of posts) {
            dispatch(addPostToState(post))
            await timeout(50)
        }
    }
)

export default postsSlice.reducer
