import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../users/usersSlice'
import { PostCard } from './styles'

export default function Post({ post: { id, user_id, title, body } }) {

    const user = useSelector(selectUserById(user_id))

    return (
        <div
            style={PostCard}
        >
            <div style={{fontWeight:"normal"}}>User: {user ? user.name : user_id}</div>
            <br />
            <div>{title}</div>
            <hr />
            <div style={{fontWeight:"normal"}}>{body}</div>
        </div>
    )
}
