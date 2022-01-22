import { UsersList } from "./styles";

export default function Users(props) {
    const user = {
        id: 18,
        name: "Maverick"
    }

    return (
        <div style={UsersList}>
            <h1>USERS:</h1>
            <div>
                <div>Id: {user.id}</div>
                <div>Name: {user.name}</div>
            </div>
        </div>
    )
}
