import logo from './logo.svg';
import './App.css';
import Users from './features/users/Users';
import { useDispatch } from 'react-redux';
import { selectUserId } from './features/users/usersSlice';

function App() {
  const dispatch = useDispatch()

  return (
    <div
      className="App"
      onClick={() => {
        dispatch(selectUserId(null))
      }}
    >
      <Users />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
