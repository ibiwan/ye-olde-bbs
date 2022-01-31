import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedUserId, selectUserById, selectUserId } from '../users/usersSlice'
import { PostCard, UserPostCard } from './styles'

export default function Post({ post, post: { id, user_id, title, body } }) {    
    const dispatch = useDispatch()
    const selectedUserId = useSelector(selectSelectedUserId)
    const user = useSelector(selectUserById(user_id))

    return (
        <div
            style={selectedUserId === user_id ? UserPostCard : PostCard}
            onClick={(e) => {
                dispatch(selectUserId(user_id))
                e.stopPropagation()
            }}
        >
            <div style={{ fontWeight: "normal" }}>User: {user ? user.name : user_id}</div>
            <br />
            <div>{title}</div>
            <hr />
            <div style={{ fontWeight: "normal" }}>{body}</div>
        </div>
    )
}
