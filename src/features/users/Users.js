import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../../datasources/gorest";
import { UsersList } from "./styles";
import User from "./User";
import { populateUserList, selectUsers } from "./usersSlice";

export default function Users(props) {
    const { data, error, isLoading } = useGetUsersQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoading && data) {
            dispatch(populateUserList(data.data))
        }
    }, [isLoading, data])


    const users = useSelector(selectUsers)

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
