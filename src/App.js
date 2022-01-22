import './App.css';
import { AppStyle } from './styles';

import Users from './features/users/Users';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedUserId, selectUserId } from './features/users/usersSlice';
import UserPosts from './features/posts/UserPosts';
import AllPosts from './features/posts/PostsList';

function App() {
  const dispatch = useDispatch()
  const selectedUserId = useSelector(selectSelectedUserId)

  return (
    <div
      className="App"
      onClick={() => {
        dispatch(selectUserId(null))
      }}
      style={AppStyle}
    >
      <Users />
      {selectedUserId ? <UserPosts /> : <AllPosts />}
    </div>
  );
}

export default App;
