/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import GlobalLayout from "./GlobalLayout";
// import AuthRoutes from "./AuthRoutes";
// import Login from "../components/auth/Login";
// import Register from "../components/auth/Register";
// import ForgotPassword from "./../components/auth/ForgotPassword";
// import ResetPassword from "./../components/auth/ResetPassword";
// import PrivateRoutes from "./PrivateRoutes";
// import ChambreList from "../components/Chambre/ChambreList";
// import ChambreAdd from "../components/Chambre/ChambreAdd";
// import ChambreShow from "../components/Chambre/ChambreShow";
// import ChambreEdit from "../components/Chambre/ChambreEdit";
// import NotFound from "../components/errors/NotFound";

const GuestLayout = React.lazy(() => import("./GuestLayout"));
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const ForgotPassword = React.lazy(() => import("../pages/auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("../pages/auth/ResetPassword"));
const PrivateLayout = React.lazy(() => import("./PrivateLayout"));
const ChambreIndex = React.lazy(() => import("../pages/chambres/ChambreIndex"));
const ChambreAdd = React.lazy(() => import("../pages/chambres/ChambreAdd"));
const ChambreShow = React.lazy(() => import("../pages/chambres/ChambreShow"));
const ChambreEdit = React.lazy(() => import("../pages/chambres//ChambreEdit"));
const NotFound = React.lazy(() => import("../pages/errors/NotFound"));

const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        element: <GuestLayout />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/register", element: <Register /> },
          { path: "/password/forgot", element: <ForgotPassword /> },
          { path: "/password/reset/:token", element: <ResetPassword /> },
          { path: "/404", element: <NotFound /> },
          { path: "*", element: <Navigate to="/404" /> },
        ],
      },
      {
        element: <PrivateLayout />,
        children: [
          { path: "/chambres", element: <ChambreIndex /> },
          { path: "/chambres/:id", element: <ChambreShow /> },
          { path: "/chambres/create", element: <ChambreAdd /> },
          { path: "/chambres/edit/:id", element: <ChambreEdit /> },
        ],
      },
    ],
  },
]);

export default router;
