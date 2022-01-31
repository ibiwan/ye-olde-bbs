import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flipper, Flipped } from 'react-flip-toolkit'

import {useGetUsersQuery} from '../../datasources/index'
import { UsersList } from "./styles";
import User from "./User";
import { populateUserList, selectSelectedUserId, selectUsers } from "./usersSlice";

export default function Users(props) {
    const { data, error, isLoading } = useGetUsersQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoading && data) {
            console.log({users:data})
            dispatch(populateUserList(data))
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

    const userList = users.map((user, i) => {
        return <Flipped
            key={`${user.id}`}
            flipId={`${user.id}`}
        >
            <div>
                <User user={user} />
            </div>
        </Flipped>
    })

    return (
        <div style={UsersList}>
            <h1>USERS:</h1>
            <Flipper flipKey={selectedUserId}>
                {userList}
            </Flipper>
        </div>
    )
}
