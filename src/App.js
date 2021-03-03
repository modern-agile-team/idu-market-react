import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import BoardListPage from './pages/BoardListPage';
import BoardPage from './pages/BoardPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/authPages/LoginPage';
import RegisterPage from './pages/authPages/RegisterPage';
import WritePage from './pages/WritePage';
import Auth from './hoc/auth';

import { LOADING_REQUEST } from './redux/types';
import { useDispatch } from 'react-redux';

import './scss/main.scss';


function App() {
  const dispatch = useDispatch();

  try{
      dispatch({
          type: LOADING_REQUEST,
      })
  } catch(e) {
      console.log(e);
  }

  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route component={Auth(HomePage, null)} path="/" exact />
          <Route component={Auth(LoginPage, false)} path="/login" />
          <Route component={Auth(RegisterPage, false)} path="/register" />
          <Route component={WritePage} path="/write" />
          <Route component={BoardListPage} path="/boardlist" />
          <Route component={BoardPage} path="/board" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
