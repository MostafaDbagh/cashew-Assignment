import { Routes, Route } from "react-router-dom";
import { LOGIN } from "../constants/web-constant";
import {LoginContainer} from '../pages/register/login-container'

export const PublicRoutes = () => {
  return (
    <Routes>
   
      <Route path="*" element={<LoginContainer />} />
      <Route path={LOGIN} element={<LoginContainer />} />
    </Routes>
  );
};
