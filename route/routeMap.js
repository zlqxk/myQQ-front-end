import { lazy } from "react";
import Message from '$src/pages/Message'
const Login = lazy(() => import("$src/pages/Login/index"));
const Home = lazy(() => import("$src/pages/Home/index"));
const Register = lazy(() => import("$src/pages/Register/index"));
const Password = lazy(() => import("$src/pages/Password/index"));


const routeMap = [
  { path: "/home", component: Home, exact: true },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/password", component: Password },
  { path: "/home/message", component: Message },
];

export default routeMap;
