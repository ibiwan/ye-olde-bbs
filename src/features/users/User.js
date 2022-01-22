import { useDispatch, useSelector } from "react-redux";
import { UserCard, UserCardSelected } from "./styles";
import { selectSelectedUserId, selectUserId } from "./usersSlice";

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
            <div>Email: {email}</div>
            <div>Gender: {gender}</div>
            <div>Status: {status}</div>
        </div>
    )
}
