import './App.css';
import { AppStyle } from './styles';

import Users from './features/users/Users';
import { useDispatch } from 'react-redux';
import { selectUserId } from './features/users/usersSlice';
import PostsList from './features/posts/PostsList';

function App() {
  const dispatch = useDispatch()

  return (
    <div
      className="App"
      onClick={() => {
        dispatch(selectUserId(null))
      }}
      style={AppStyle}
    >
      <Users />
      <PostsList />
    </div>
  );
}

export default App;
