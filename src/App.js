import './App.css';
import { AppStyle } from './styles';

import Users from './features/users/Users';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedUserId, selectUserId } from './features/users/usersSlice';
import UserPosts from './features/posts/UserPosts';
import AllPosts from './features/posts/PostsList';
import CreatePost from './features/posts/CreatePost';
import { selectPostCreateMode } from './features/posts/postsSlice';

function App() {
  const dispatch = useDispatch()
  const selectedUserId = useSelector(selectSelectedUserId)
  const createPostMode = useSelector(selectPostCreateMode)

  return (
    <div
      className="App"
      onClick={() => {
        dispatch(selectUserId(null))
        dispatch(selectPostCreateMode(false))
      }}
      style={AppStyle}
    >
      <Users />
      {selectedUserId ? <UserPosts /> : <AllPosts />}
      {selectedUserId && createPostMode && <CreatePost />}
    </div>
  );
}

export default App;
