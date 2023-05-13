import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import Login from './components/Login';
import Private from './components/Private';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <h1>Public Route</h1>
      </Route>
      <Route path="/login">
        {isAuthenticated() ? <Redirect to="/private" /> : <Login />}
      </Route>
      <Route path="/private">
        {isAuthenticated() ? <Private /> : <Redirect to="/login" />}
      </Route>
    </Router>
  );
}

export default App;
