// API provided by https://gorest.co.in/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gorestApi = createApi({
    reducerPath: 'gorestApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gorest.co.in/public/v1',
    }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "users",
        }),
        getPosts: builder.query({
            query: () => "posts?page=1",
            providesTags: ['Posts'],
        }),
    })
})

export const {
    useGetUsersQuery,
    useGetPostsQuery,
} = gorestApi 
