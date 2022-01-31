import { configureStore } from "@reduxjs/toolkit";

import { kistonApi } from "./datasources/kiston";

import usersReducer from "./features/users/usersSlice"
import postsReducer from "./features/posts/postsSlice"

export default configureStore({
    reducer: {
        // [gorestApi.reducerPath]: gorestApi.reducer,
        [kistonApi.reducerPath]: kistonApi.reducer,
        usersSlice: usersReducer,
        postsSlice: postsReducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        kistonApi.middleware,
    ]
})
