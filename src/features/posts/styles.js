export const PostsListStyle = {
    minWidth: "25%",
    maxWidth: "35%",
    margin: "10px",
    border: "solid gray 2px",
    borderRadius: "11px",
    backgroundColor: "#EEDDCC",
}

export const PostCard = {
    border: "solid black 1px",
    padding: "10px",
    margin: "20px",
    boxShadow: "5px 10px 3px #666699",
    borderRadius: "11px",
    backgroundColor: "#AA0000",
    color: "#FFFFFF",
    fontWeight: "bolder",
}

export const UserPostCard = {
    ...PostCard,
    backgroundColor: "#333399",
}

export const CreatePostForm = {
    ...UserPostCard,
    width: "30em",
}

export const Button = {
    backgroundColor: '#6666FF',
    color: "black",
    fontWeight: "bolder",
    fontSize: "20px",
    padding: "10px 30px",
    borderRadius: "3px",
    margin: "10px 10px",
    cursor: "pointer",
}