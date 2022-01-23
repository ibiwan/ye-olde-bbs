import { useSelector } from 'react-redux'
import { selectSelectedUserId } from '../users/usersSlice'
import { PostsListStyle } from './styles'

export default function CreatePost(props) {
    const selectedUserId = useSelector(selectSelectedUserId)

    return (
        <div
            style={PostsListStyle}
        >
            <h1>CREATE POST FOR USER {selectedUserId}:</h1>
        </div>
    )
}
