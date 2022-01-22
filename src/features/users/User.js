import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPostCreateMode } from '../posts/postsSlice'
import { Button } from '../posts/styles'
import { UserCard, UserCardSelected } from './styles'
import { selectSelectedUserId, selectUserId } from './usersSlice'

export default function User({ user: { id, name, email, gender, status } }) {
    const dispatch = useDispatch()
    const selectedUserId = useSelector(selectSelectedUserId)
    const isSelected = selectedUserId === id

    return (
        <div
            style={isSelected ? UserCardSelected : UserCard}
            onClick={(e) => {
                dispatch(selectUserId(id))
                e.stopPropagation()
            }}
        >
            <div>Name: {name} ({id})</div>
            <hr />
            <div style={{fontWeight:"normal"}}>Email: {email}</div>
            <div style={{fontWeight:"normal"}}>Gender: {gender}</div>
            <div style={{fontWeight:"normal"}}>Status: {status}</div>
            {isSelected &&
                <>
                    <hr />
                    <div
                        onClick={(e) => {
                            dispatch(setPostCreateMode(true))
                        }}
                        style={Button}
                    >Add Post</div>
                </>
            }
        </div>
    )
}
