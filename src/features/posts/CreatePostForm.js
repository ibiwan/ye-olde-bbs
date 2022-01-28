import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCreatePostMutation } from '../../datasources/gorest'
import { Button, DisabledButton } from '../../styles'
import { selectSelectedUserId } from '../users/usersSlice'
import { setPostCreateMode } from './postsSlice'
import { UserPostCard } from './styles'

export default function CreatePostForm(_props) {
    const selectedUserId = useSelector(selectSelectedUserId)
    const dispatch = useDispatch()
    const [createPost, result] = useCreatePostMutation()

    // uncontrolled
    const titleRef = useRef()

    // controlled
    const [bodyText, setBodyText] = useState('')
    const handleBodyTextChange = e => setBodyText(e.target.value)

    const submit = (e) => {
        e.stopPropagation()

        const newPost = {
            user_id: selectedUserId,
            title: titleRef.current?.value,
            body: bodyText
        }
        createPost(newPost)

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
                <span>Title: </span>
                <input ref={titleRef} />
            </div>
            <div>
                <span>Body: </span>
                <input value={bodyText} onChange={handleBodyTextChange} />
            </div>
            <div
            >
                <button
                    style={bodyText ? Button : DisabledButton}
                    onClick={submit}
                    disabled={!bodyText}
                >
                    Submit
                </button>
                <button
                    style={Button}
                    onClick={cancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
