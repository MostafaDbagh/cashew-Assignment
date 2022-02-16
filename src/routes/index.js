import { PublicRoutes } from "./public-routes";
import { ProtectedRoute } from "./protected-routes";
import { Navigate } from "react-router-dom";
import { LOGIN,DASH_BOARD,REGISTER } from "../constants/web-constant";


 const  Routes = (isAuthenticated)=>{
return (
[
    {
        path:"/app",
        element:isAuthenticated ? (
        <ProtectedRoute/>
        ):(
        <Navigate to="/login"/>
        ),
        children:[ {path:DASH_BOARD }],
    },
 {
    path:'/',
    element: isAuthenticated  ? (
   <Navigate to="/app/dashboard"/>
    ):(
        <PublicRoutes/>
    ),
    children: [
        { path: LOGIN },
       
      ],
 }
    
])
}
export default Routes;