import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Header, Footer
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//auth
import HomePage from "./HomePage/HomePage";
import LoginPage from "./authPages/LoginPage";
import RegisterPage from "./authPages/RegisterPage";
import FindIdPage from "./authPages/FindIdPage";
import FindPasswordPage from "./authPages/FindPasswordPage";

//marketBoards
import BookListPage from "./Boards/Market/BookListPage";
import DeviceListPage from "./Boards/Market/DeviceListPage";
import PostWritePage from "./Boards/PostWritePage";

import BoardPage from "./Boards/BoardPage";

import Auth from "../hoc/auth";

import { useDispatch } from "react-redux";
import { LOADING_REQUEST } from "../redux/types";
import ClothesListPage from "./Boards/Market/ClothesListPage";

const MainRouter = () => {
  const dispatch = useDispatch();
  try {
    dispatch({
      type: LOADING_REQUEST,
    });
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route component={Auth(HomePage, null)} path="/" exact />
          <Route component={Auth(LoginPage, false)} path="/login" exact />
          <Route component={Auth(RegisterPage, false)} path="/register" exact />
          <Route component={Auth(FindIdPage, false)} path="/findId" exact />
          <Route
            component={Auth(FindPasswordPage, false)}
            path="/findPwd"
            exact
          />

          {/* boards list */}
          <Route
            component={Auth(BookListPage, null)}
            path="/boards/book"
            exact
          />
          <Route
            component={Auth(DeviceListPage, null)}
            path="/boards/device"
            exact
          />
          <Route
            component={Auth(ClothesListPage, null)}
            path="/boards/clothes"
            exact
          />
          <Route
            component={PostWritePage}
            path="/boards/:codeName/write"
            exact
          />
          <Route component={BoardPage} path="/board" exact />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
};

export default MainRouter;
