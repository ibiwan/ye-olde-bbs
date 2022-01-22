import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { AppStyle } from './styles';

import AllPosts from './features/posts/PostsList';
import CreatePost from './features/posts/CreatePost';
import { selectPostCreateMode, setPostCreateMode } from './features/posts/postsSlice';
import UserPosts from './features/posts/UserPosts';
import Users from './features/users/Users';
import { selectSelectedUserId, selectUserId } from './features/users/usersSlice';

function App() {
  const dispatch = useDispatch()
  const selectedUserId = useSelector(selectSelectedUserId)
  const createPostMode = useSelector(selectPostCreateMode)

  return (
    <div
      className="App"
      onClick={() => {
        if (createPostMode) { return }
        dispatch(selectUserId(null))
        dispatch(setPostCreateMode(false))
      }}
      style={AppStyle}
    >
      <Users />
      {selectedUserId ? <UserPosts user_id={selectedUserId} /> : <AllPosts />}
      {selectedUserId && createPostMode && <CreatePost />}
    </div>
  );
}

export default App;
