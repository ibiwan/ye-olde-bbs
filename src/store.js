import { configureStore } from "@reduxjs/toolkit";

import { api } from "./datasources";

import usersReducer from "./features/users/usersSlice"
import postsReducer from "./features/posts/postsSlice"

export default configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        usersSlice: usersReducer,
        postsSlice: postsReducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        api.middleware,
    ]
})
