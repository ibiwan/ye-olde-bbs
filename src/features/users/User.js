import { UserCard } from "./styles";

export default function User({ user: { id, name, email, gender, status } }) {
    return (
        <div style={UserCard}>
            <div>Name: {name} ({id})</div>
            <hr />
            <div>Email: {email}</div>
            <div>Gender: {gender}</div>
            <div>Status: {status}</div>
        </div>
    )
}
