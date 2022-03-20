import React from "react";
import { Routes, Route } from "react-router-dom";

import {SignIn} from '../compoennts/SignIn';
import {SignUp} from '../compoennts/SignUp';
import {Login} from '../compoennts/Login';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};
