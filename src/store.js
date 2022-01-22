import { configureStore } from "@reduxjs/toolkit";

import { gorestApi } from "./datasources/gorest";

import usersReducer from "./features/users/usersSlice"
import postsReducer from "./features/posts/postsSlice"

export default configureStore({
    reducer: {
        [gorestApi.reducerPath]: gorestApi.reducer,
        usersSlice: usersReducer,
        postsSlice: postsReducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        gorestApi.middleware,
    ]
})
