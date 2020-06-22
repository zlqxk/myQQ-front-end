import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
const Login = lazy(() => import("./page/Login/index"));
const Home = lazy(() => import("./page/Home/index"));
const Register = lazy(() => import("./page/Register/index"));
const Password = lazy(() => import("./page/Password/index"));

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
