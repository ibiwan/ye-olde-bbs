import { useSelector } from "react-redux";
import { UsersList } from "./styles";
import User from "./User";
import { selectUsers } from "./usersSlice";

export default function Users(props) {
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
