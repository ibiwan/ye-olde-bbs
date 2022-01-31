// API provided by https://gorest.co.in/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.REACT_APP_GOREST_API_KEY

export const api = createApi({
    reducerPath: 'gorestApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gorest.co.in/public/v1',
        prepareHeaders: headers => {
            headers.set("Authorization", `Bearer ${API_KEY}`)
            return headers
        }
    }),
    tagTypes: ['Posts', 'Users'],
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "users",
            providesTags: ['Users'],
            transformResponse: (response, meta, arg) => response.data,
        }),
        getUserById: builder.query({
            query: id => `users/${id}`,
            providesTags: ['Users'],
            transformResponse: (response, meta, arg) => response.data,
        }),
        getPosts: builder.query({
            query: () => "posts?page=1",
            providesTags: ['Posts'],
            transformResponse: (response, meta, arg) => response.data,
        }),
        getPostsByUserId: builder.query({
            query: id => `users/${id}/posts`,
            providesTags: ['Posts'],
            transformResponse: (response, meta, arg) => response.data,
        }),
        createPost: builder.mutation({
            query: (body) => ({
                url: `posts`,
                method: `POST`,
                body,
            }),
            invalidatesTags: ['Posts'],
        })
    })
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useGetPostsQuery,
    useGetPostsByUserIdQuery,
    useCreatePostMutation,
} = api 
