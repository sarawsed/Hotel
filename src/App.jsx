import React from "react";
import { Route, Routes } from "react-router";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOTFOUND_ROUTE,
  RESERVE_LIST_ROUTE,
  RESERVE_ROUTE,
  RESULT_ROUTE,
  SIGNIN_ROUTE,
} from "./constant/routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Reserve from "./pages/Reserve";
import Result from "./pages/Result";
import ReserveList from "./pages/ReserveList";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={SIGNIN_ROUTE} element={<SignIn />} />
        <Route path={RESERVE_ROUTE} element={<Reserve />} />
        <Route path={RESULT_ROUTE} element={<Result />} />
        <Route path={RESERVE_LIST_ROUTE} element={<ReserveList />} />
        <Route path={NOTFOUND_ROUTE} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
