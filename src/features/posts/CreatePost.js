import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedUserId } from '../users/usersSlice'
import CreatePostForm from './CreatePostForm'
import { setPostCreateMode } from './postsSlice'
import { PostsListStyle } from './styles'
import { useCreatePostMutation } from '../../datasources/gorest'

export default function CreatePost() {
    const selectedUserId = useSelector(selectSelectedUserId)

    const dispatch = useDispatch()
    const [createPost] = useCreatePostMutation()

    const onCreate = (newPost) => {
        createPost(newPost)
        dispatch(setPostCreateMode(false))
    }

    const onCancel = () => {
        dispatch(setPostCreateMode(false))
    }

    return (
        <div
            style={PostsListStyle}
        >
            <h1>CREATE POST FOR USER {selectedUserId}:</h1>
            <CreatePostForm
                userId={selectedUserId}
                onCreate={onCreate}
                onCancel={onCancel}
            />
        </div>
    )
}
