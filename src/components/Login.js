import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../utils/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('/api/login', { email, password })
      .then(response => {
        setToken(response.data.token);
        history.push('/private');
      })
      .catch(error => {
        console.error(error);

    
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;