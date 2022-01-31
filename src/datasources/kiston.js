import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const kistonApi = createApi({
    reducerPath: 'gorestApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/graphql',
        prepareHeaders: headers => {
            headers.set("Content-Type", 'application/json')
            return headers
        }
    }),
    tagTypes: ['Posts', 'Users'],
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => ({
                method: 'POST',
                body: { query: "{ users { id name gender email status } }" },
            }),
            transformResponse: (response, meta, arg) => response.data.users,
        }),
        getUserById: {},
        getPosts: builder.query({
            query: () => ({
                method: 'POST',
                body: { query: "{ posts { id title content {document} author {id name}  } }" },
            }),
            transformResponse: (response, meta, arg) => {
                return response.data.posts.map(({
                    author: { id: user_id },
                    content: {
                        document
                    },
                    id,
                    title,
                }) => ({
                    id,
                    user_id,
                    title,
                    body: document.map(node => {
                        return node.children.reduce((a, c) => a + c.text, '')
                    }).join("\n")
                }))
            }
        })
    })
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useGetPostsQuery,
    useGetPostsByUserIdQuery,
    useCreatePostMutation,
} = kistonApi 
