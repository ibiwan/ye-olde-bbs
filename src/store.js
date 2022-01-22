import { configureStore } from "@reduxjs/toolkit";

import { gorestApi } from "./datasources/gorest";

import usersReducer from "./features/users/usersSlice"

export default configureStore({
    reducer: {
        [gorestApi.reducerPath]: gorestApi.reducer,
        usersSlice: usersReducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        gorestApi.middleware,
    ]
})
