import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
const Login = lazy(() => import("./pages/Login/index"));
const Home = lazy(() => import("./pages/Home/index"));
const Register = lazy(() => import("./pages/Register/index"));
const Password = lazy(() => import("./pages/Password/index"));

const Router = () => {
  return (
    <Suspense fallback="">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/password" component={Password} />
      </Switch>
    </Suspense>
  );
};

export default Router;
