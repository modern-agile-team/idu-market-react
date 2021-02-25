import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import BoardListPage from './pages/BoardListPage';
import BoardPage from './pages/BoardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

import './scss/main.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={WritePage} path="/write" />
          <Route component={BoardListPage} path="/boardlist" />
          <Route component={BoardPage} path="/board" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
