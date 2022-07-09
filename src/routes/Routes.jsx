import React, { useContext } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import {SignIn} from '../compoennts/SignIn';
import {SignUp} from '../compoennts/SignUp';
import {Login} from '../compoennts/Login';
import { UsersContext } from "../contexts/UsersContext";

// const PrivateRouter = ({element, isPrivate, ...rest}) => {
//   const {authenticated} = useContext(UsersContext)
//   return (
//     <Route
//     {...rest}
//     element={isPrivate && !authenticated ? <Navigate to='/'/> : element}
//     />
//   )
// }

function PrivateRoute({ children, ...rest }) {
  const {authenticated} = useContext(UsersContext)
  return authenticated ? <Login/> : <Navigate to={'/'}/>;
}


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route isPrivate path="/login" element={<PrivateRoute/>}/>
    </Routes>
  );
};
