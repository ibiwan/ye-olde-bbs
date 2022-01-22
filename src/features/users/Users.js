import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    useGetUsersQuery,
} from '../../datasources/gorest'
import { UsersList } from './styles'
import User from './User'
import { populateUserList, selectSelectedUserId, selectUsers } from './usersSlice'

export default function Users(props) {
    const { data, error, isLoading } = useGetUsersQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoading && data) {
            dispatch(populateUserList(data.data))
        }
    }, [isLoading, data])

    const selectedUserId = useSelector(selectSelectedUserId)

    let users = [...useSelector(selectUsers)]
    users.sort((a, b) => {
        if (a.id === selectedUserId) return -1
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })
    
    const userList = users.map((user, i) =>
        <User
            user={user}
            key={`${i}.${user.id}`}
        />
    )

    return (
        <div style={UsersList}>
            <h1>USERS:</h1>
            {userList}
        </div>
    )
}
