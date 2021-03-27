import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Header, Footer
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Auth from "../hoc/auth";
import ScrollToTop from "../components/ScrollToTop";
import LoadingPage from "./LoadingPage";


const HomePage = lazy(() => import('./HomePage/HomePage'));
const LoginPage = lazy(() => import('./authPages/LoginPage'));
const RegisterPage = lazy(() => import('./authPages/RegisterPage'));
const FindIdPage = lazy(() => import('./authPages/FindIdPage'));
const FindPasswordPage = lazy(() => import('./authPages/FindPasswordPage'));

const BookListPage = lazy(() => import('./Boards/Market/BookListPage'));
const DeviceListPage = lazy(() => import('./Boards/Market/DeviceListPage'));
const ClothesListPage = lazy(() => import('./Boards/Market/ClothesListPage'));

const NoticeBoardPage = lazy(() => import('./Boards/Basic/NoticeBoardPage'));
const FreeBoardPage = lazy(() => import('./Boards/Basic/FreeBoardPage'));

const BoardDetailPage = lazy(() => import('./Boards/Detail/BoardDetailPage'));
const MarketSearchPage = lazy(() => import('./Boards/Search/MarketSearchPage'));

const PostWritePage = lazy(() => import('./Boards/Write/PostWritePage'));
const PostUpdatePage = lazy(() => import('./Boards/Update/PostUpdatePage'));

const ProfilePage = lazy(() => import('./Profile/ProfilePage'));
const WatchlistPage = lazy(() => import('./WatchlistPage/WatchlistPage'));

const TradeCompletePage = lazy(() => import('../pages/Trade/TradeCompletePage'));
const PurchaseListPage = lazy(() => import('./purchaseAndSaleList/PurchaseListPage'));
const SaleListPage = lazy(() => import('./purchaseAndSaleList/SaleListPage'));



const MainRouter = () => {
  return (
    <>
      <Header />
      <ScrollToTop>
        <Suspense fallback={<LoadingPage />}>
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
              path="/boards/:categoryName/:num/:studentId/complete"
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
        </Suspense>
      </ScrollToTop>
      <Footer />
    </>
  );
};

export default MainRouter;
