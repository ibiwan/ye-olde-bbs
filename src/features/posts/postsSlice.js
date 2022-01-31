import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { timeout } from '../../util'

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        createPostMode: false,
    },
    reducers: {
        clearPosts: (stateSlice, _action) => {
            stateSlice.posts = []
        },
        addPostToState: (stateSlice, action) => {
            stateSlice.posts.push(action.payload)
        },
        setPostCreateMode: (stateSlice, action) => {
            stateSlice.createPostMode = action.payload
        }
    }
})

export const { clearPosts, addPostToState, setPostCreateMode } = postsSlice.actions

export const selectPosts = state => state.postsSlice.posts
export const selectPostsByUserId = id => state =>
    state.postsSlice.posts.filter(
        ({ user_id }) =>
            user_id === id
    )
export const selectPostCreateMode = state => state.postsSlice.createPostMode

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

export const createNewPost = createAsyncThunk(
    'postsSlice/createNewPost',
    async (post, thunkApi) => { 
        const {dispatch, getState} = thunkApi
        dispatch(createNewPost(post))
    }
)

export default postsSlice.reducer
