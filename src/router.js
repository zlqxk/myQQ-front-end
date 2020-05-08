import React from "react";
import { Route, Switch } from 'react-router-dom';
import loadable from './untils/loadable'
const Login = loadable(() => import('./page/Login/index'))
const Home = loadable(() => import('./page/Home/index'))
const Register = loadable(() => import('./page/Register/index'))

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Switch>
  )
}

export default Router