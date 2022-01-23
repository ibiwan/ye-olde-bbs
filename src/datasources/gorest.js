// API provided by https://gorest.co.in/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.REACT_APP_GOREST_API_KEY

export const gorestApi = createApi({
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
        }),
        getPosts: builder.query({
            query: () => "posts?page=1",
            providesTags: ['Posts'],
        }),
        getPostsByUserId: builder.query({
            query: id => `users/${id}/posts`,
            providesTags: ['Posts'],
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
    useGetPostsQuery,
    useGetPostsByUserIdQuery,
    useCreatePostMutation,
} = gorestApi 
