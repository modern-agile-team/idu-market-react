import React from "react";
import { Switch, Route } from "react-router-dom";

//Header, Footer
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//auth
import HomePage from "./HomePage/HomePage";
import LoginPage from "./authPages/LoginPage";
import RegisterPage from "./authPages/RegisterPage";
import FindIdPage from "./authPages/FindIdPage";
import FindPasswordPage from "./authPages/FindPasswordPage";

//market Boards
import BookListPage from "./Boards/Market/BookListPage";
import DeviceListPage from "./Boards/Market/DeviceListPage";
import ClothesListPage from "./Boards/Market/ClothesListPage";

//Basic Boards
import NoticeBoardPage from "./Boards/Basic/NoticeBoardPage";
import FreeBoardPage from "./Boards/Basic/FreeBoardPage";

//Board Detail
import BoardDetailPage from "./Boards/Detail/BoardDetailPage";

//PostWrite
import PostWritePage from "./Boards/Write/PostWritePage";

//hoc
import Auth from "../hoc/auth";

//Profile
import ProfilePage from "./Profile/ProfilePage";
import WatchlistPage from "./WatchlistPage/WatchlistPage";

const MainRouter = () => {
  return (
    <>
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
        <Route component={Auth(BookListPage, null)} path="/boards/book" exact />
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
          component={Auth(FreeBoardPage, null)}
          path="/boards/free"
          exact
        />
        <Route
          component={Auth(NoticeBoardPage, null)}
          path="/boards/notice"
          exact
        />

        <Route
          component={Auth(PostWritePage, null)}
          path="/boards/:categoryName/new"
          exact
        />

        {/* boards Detail */}
        <Route
          component={Auth(BoardDetailPage, null)}
          path="/boards/:categoryName/:num"
          exact
        />

        {/* Profile */}
        <Route component={ProfilePage} path="/students" exact />

        {/* watchlist */}
        <Route component={WatchlistPage} path="/watchlist" exact />
      </Switch>
      <Footer></Footer>
    </>
  );
};

export default MainRouter;
