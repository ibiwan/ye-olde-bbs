import { UsersList } from "./styles";
import User from "./User";

export default function Users(props) {
    const users = [
        {
            id: 18,
            name: "Maverick",
            email: "mav@topgun.mil",
            gender: "male",
            status: "active",
        },
        {
            id: 19,
            name: "Goose",
            email: "gosling@topgun.mil",
            gender: "male",
            status: "inactive",
        },
    ]

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
