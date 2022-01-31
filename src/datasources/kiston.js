import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { flattenPost } from '../util'

export const api = createApi({
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
        getUserById: builder.query({
            query: (id = 'ckz21utz4001299s0b2te6ze4') => ({
                method: 'POST',
                body: {
                    query: "query UserById($id: ID) { user(where:{id:$id}) { id name gender email status } }",
                    variables: { id }
                },
            }),
            transformResponse: (response, meta, arg) => [response.data.user],
        }),
        getPosts: builder.query({
            query: () => ({
                method: 'POST',
                body: { query: "{ posts { id title content {document} author {id name}  } }" },
            }),
            transformResponse: (response, meta, arg) => response.data.posts.map(flattenPost)
        }),
        getPostsByUserId: builder.query({
            query: (user_id = 'ckz21utz4001299s0b2te6ze4') => ({
                method: 'POST',
                body: {
                    query: "query PostsByUserId($user_id:ID){ posts(where:{author:{id:{equals:$user_id}}}) { id title content {document} author {id name}  } }",
                    variables: { user_id }
                },
            }),
            transformResponse: (response, meta, arg) => response.data.posts.map(flattenPost)
        }),
    })
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useGetPostsQuery,
    useGetPostsByUserIdQuery,
    useCreatePostMutation,
} = api 
