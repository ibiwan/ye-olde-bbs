import { useRef, useState } from 'react'
import { Button, DisabledButton } from '../../styles'
import { UserPostCard } from './styles'

export default function CreatePostForm({
    userId,
    onCreate,
    onCancel,
}) {
    // uncontrolled
    const titleRef = useRef()

    // controlled
    const [bodyText, setBodyText] = useState('')
    const handleBodyTextChange = e => setBodyText(e.target.value)

    const submit = (e) => {
        e.stopPropagation()
        const newPost = {
            user_id: userId,
            title: titleRef.current?.value,
            body: bodyText
        }
        onCreate(newPost)
    }

    const cancel = (e) => {
        e.stopPropagation()
        onCancel()
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
                <input
                    value={bodyText}
                    onChange={handleBodyTextChange}
                />
            </div>
            <div>
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
