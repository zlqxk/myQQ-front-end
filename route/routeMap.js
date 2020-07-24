import { lazy } from "react";
import Message from "$src/pages/Message";
import Home from "$src/pages/Home/index";
import FriendList from "$src/pages/FriendList/index";
const Login = lazy(() => import("$src/pages/Login/index"));
const Register = lazy(() => import("$src/pages/Register/index"));
const Password = lazy(() => import("$src/pages/Password/index"));

const routeMap = [
  { path: "/home", component: Home, exact: true },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/password", component: Password },
  { path: "/home/message", component: Message },
  { path: "/friendList", component: FriendList },
];

export default routeMap;
