import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

//Header, Footer
import Header from "../components/Header/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer/Footer";
import Auth from "../hoc/auth";
import LoadingPage from "./LoadingPage";
import Page404 from "./Page404";

const HomePage = loadable(() => import("./HomePage/HomePage"), {
  fallback: <LoadingPage />,
});
const LoginPage = loadable(() => import("./authPages/LoginPage"), {
  fallback: <LoadingPage />,
});
const RegisterPage = loadable(() => import("./authPages/RegisterPage"), {
  fallback: <LoadingPage />,
});
const FindIdPage = loadable(() => import("./authPages/FindIdPage"), {
  fallback: <LoadingPage />,
});
const FindPasswordPage = loadable(
  () => import("./authPages/FindPasswordPage"),
  {
    fallback: <LoadingPage />,
  }
);

const BookListPage = loadable(() => import("./Boards/Market/BookListPage"), {
  fallback: <LoadingPage />,
});
const DeviceListPage = loadable(
  () => import("./Boards/Market/DeviceListPage"),
  {
    fallback: <LoadingPage />,
  }
);
const ClothesListPage = loadable(
  () => import("./Boards/Market/ClothesListPage"),
  {
    fallback: <LoadingPage />,
  }
);

const NoticeBoardPage = loadable(
  () => import("./Boards/Basic/NoticeBoardPage"),
  {
    fallback: <LoadingPage />,
  }
);
const FreeBoardPage = loadable(() => import("./Boards/Basic/FreeBoardPage"), {
  fallback: <LoadingPage />,
});

const BoardDetailPage = loadable(
  () => import("./Boards/Detail/BoardDetailPage"),
  {
    fallback: <LoadingPage />,
  }
);
const MarketSearchPage = loadable(
  () => import("./Boards/Search/MarketSearchPage"),
  {
    fallback: <LoadingPage />,
  }
);

const PostWritePage = loadable(() => import("./Boards/Write/PostWritePage"), {
  fallback: <LoadingPage />,
});
const PostUpdatePage = loadable(
  () => import("./Boards/Update/PostUpdatePage")
);

const ProfilePage = loadable(() => import("./Profile/ProfilePage"), {
  fallback: <LoadingPage />,
});


const ProfileUpdatePage = loadable(() => import("./Profile/ProfileUpdatePage"), {
  fallback: <LoadingPage />,
});

const WatchlistPage = loadable(() => import("./WatchlistPage/WatchlistPage"), {
  fallback: <LoadingPage />,
});

const TradeCompletePage = loadable(
  () => import("../pages/Trade/TradeCompletePage"),
  {
    fallback: <LoadingPage />,
  }
);
const PurchaseListPage = loadable(
  () => import("./purchaseAndSaleList/PurchaseListPage"),
  {
    fallback: <LoadingPage />,
  }
);
const SaleListPage = loadable(
  () => import("./purchaseAndSaleList/SaleListPage"),
  {
    fallback: <LoadingPage />,
  }
);

const MainRouter = () => {
  return (
    <>
      <Header />
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
            path="/boards/:categoryName/:num/"
            exact
          />
          {/* Profile */}
          <Route
            component={Auth(ProfilePage, null)}
            path="/students/:studentId"
            exact
          />
          <Route
            component={Auth(ProfileUpdatePage, null)}
            path="/students/:studentId/update"
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

          {/* sale List*/}
          <Route
            component={Auth(SaleListPage, null)}
            path="/sale-list/:studentId"
            exact
          />

          {/* Redirect */}
          <Route from="*" component={Page404} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </>
  );
};

export default MainRouter;
