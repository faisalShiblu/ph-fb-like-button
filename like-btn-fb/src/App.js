import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import { useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);

  useState(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(u => setUsers(u))
  }, [])

  return (
    <div className="App">
      <ThumbUpAltIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>
      <ul>
        {
          users.map(u => <li key={u.id}>{u.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
