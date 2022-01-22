import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedUserId, selectUserById } from '../users/usersSlice'
import { PostCard, UserPostCard } from './styles'

export default function Post({ post: { id, user_id, title, body } }) {

    const selectedUserId = useSelector(selectSelectedUserId)
    const user = useSelector(selectUserById(user_id))

    return (
        <div
            style={selectedUserId === user_id ? UserPostCard : PostCard}
        >
            <div style={{ fontWeight: "normal" }}>User: {user ? user.name : user_id}</div>
            <br />
            <div>{title}</div>
            <hr />
            <div style={{ fontWeight: "normal" }}>{body}</div>
        </div>
    )
}
