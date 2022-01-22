import { UsersList } from "./styles";
import User from "./User";

export default function Users(props) {
    const user = {
        id: 18,
        name: "Maverick",
        email: "mav@topgun.mil",
        gender: "male",
        status: "active",
    }

    return (
        <div style={UsersList}>
            <h1>USERS:</h1>
            <User user={user} />
        </div>
    )
}
