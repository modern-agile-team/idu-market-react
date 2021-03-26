import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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

//Board Search
import MarketSearchPage from "./Boards/Search/MarketSearchPage";

//PostWrite
import PostWritePage from "./Boards/Write/PostWritePage";

//Post Update
import PostUpdatePage from "./Boards/Update/PostUpdatePage";

//hoc
import Auth from "../hoc/auth";

//Profile
import ProfilePage from "./Profile/ProfilePage";
import WatchlistPage from "./WatchlistPage/WatchlistPage";
import ScrollToTop from "../components/ScrollToTop";

//Trade Complete
import TradeCompletePage from "../pages/Trade/TradeCompletePage";

//Purchase, Sale List
import PurchaseListPage from "./purchaseAndSaleList/PurchaseListPage";
import SaleListPage from "./purchaseAndSaleList/SaleListPage";

const MainRouter = () => {
  return (
    <>
      <Header></Header>
      <ScrollToTop>
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
            component={Auth(PostWritePage, true)}
            path="/boards/:categoryName/new"
            exact
          />
          <Route
            component={Auth(PostUpdatePage, "update")}
            path="/boards/:categoryName/:num/update"
            exact
          />
          {/* Market Search */}
          <Route
            component={Auth(MarketSearchPage, null)}
            path="/boards/:categoryName/search/"
            exact
          />
          {/* boards Detail */}
          <Route
            component={Auth(BoardDetailPage, null)}
            path="/boards/:categoryName/:num/:studentId"
            exact
          />
          {/* Profile */}
          <Route
            component={Auth(ProfilePage, null)}
            path="/students/:studentId"
            exact
          />
          {/* watchlist */}
          <Route
            component={Auth(WatchlistPage, null)}
            path="/watchlist/:studentId"
            exact
          />

          {/* Trade Complet */}
          <Route
            component={Auth(TradeCompletePage, null)}
            path="/boards/:categoryName/:num/complete"
            exact
          />

          {/* Purchase List*/}
          <Route
            component={Auth(PurchaseListPage, null)}
            path="/purchase-list/:studentId"
            exact
          />

          {/* Purchase List*/}
          <Route
            component={Auth(SaleListPage, null)}
            path="/sale-list/:studentId"
            exact
          />

          {/* Redirect */}
          <Redirect from="*" to="/" />
        </Switch>
      </ScrollToTop>
      <Footer />
    </>
  );
};

export default MainRouter;
