import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../styles'
import { selectSelectedUserId } from '../users/usersSlice'
import { setPostCreateMode } from './postsSlice'
import { UserPostCard } from './styles'

export default function CreatePostForm(_props) {
    const selectedUserId = useSelector(selectSelectedUserId)
    const dispatch = useDispatch()

    const titleRef = useRef()
    const bodyRef = useRef()

    const submit = (e) => {
        e.stopPropagation()

        const newPost = {
            user_id: selectedUserId,
            title: titleRef.current?.value,
            body: bodyRef.current?.value,
        }
        console.log({newPost})

        dispatch(setPostCreateMode(false))
    }

    const cancel = (e) => {
        e.stopPropagation()

        dispatch(setPostCreateMode(false))
    }

    return (
        <div
            style={UserPostCard}
        >
            <div>
                <span>Title: </span><input ref={titleRef} />
            </div>
            <div>
                <span>Body: </span><input ref={bodyRef} />
            </div>
            <div
            >
                <button
                    style={Button}
                    onClick={submit}
                >Submit</button>
                <button
                    style={Button}
                    onClick={cancel}
                >Cancel</button>
            </div>
        </div>
    )
}
