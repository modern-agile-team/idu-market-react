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
      <Route component={HomePage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={BoardListPage} path="/boardlist" />
      <Route component={BoardPage} path="/board" />
    </>
  );
}

export default App;
