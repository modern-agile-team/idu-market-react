import { Route } from 'react-router-dom';
import './App.scss';
import BoardListPage from './pages/BoardListPage';
import BoardPage from './pages/BoardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={RegisterPage} path="/register"></Route>
      <Route component={WritePage} path="/write"></Route>
      <Route component={BoardListPage} path="/boardlist"></Route>
      <Route component={BoardPage} path="/board"></Route>
    </>
  );
}

export default App;
