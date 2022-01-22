import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGetPostsQuery } from '../../datasources/gorest'
import Post from './Post'
import { populatePostsList, selectPosts } from './postsSlice'
import { PostsListStyle } from './styles'

export default function PostsList() {
    const { data, error, isLoading } = useGetPostsQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoading && data) {
            dispatch(populatePostsList(data.data))
        }
    }, [isLoading, data])

    const posts = useSelector(selectPosts)
    const postList = posts.map((post) =>
        <Post
            post={post}
            key={post.id}
        />
    )

    return (
        <div style={PostsListStyle}>
            <h1>ALL POSTS:</h1>
            {postList}
        </div>
    )
}
