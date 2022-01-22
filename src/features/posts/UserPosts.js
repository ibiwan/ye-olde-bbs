import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useGetPostsByUserIdQuery } from "../../datasources/gorest"
import { selectSelectedUserId } from "../users/usersSlice"
import Post from "./Post"
import { populatePostsList, selectPosts } from "./postsSlice"
import { PostsListStyle } from "./styles"

export default function UserPosts(props) {
    const selectedUserId = useSelector(selectSelectedUserId)
    
    const { data, error, isLoading } = useGetPostsByUserIdQuery(selectedUserId)
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
            <h1>USER {selectedUserId} POSTS:</h1>
            {postList}
        </div>
    )
}
