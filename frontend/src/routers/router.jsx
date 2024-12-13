import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import AboutPage from "../pages/home/AboutPage";

import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import ManageCars from "../pages/dashboard/manageCars/ManageCars";
import UpdateCar from "../pages/dashboard/EditCar/UpdateCar";
import AddCar from "../pages/dashboard/addCar/AddCar";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import AddNews from "../pages/dashboard/addNews/AddNews";
import ManageNews from "../pages/dashboard/manageNews/ManageNews";
import UpdateNews from "../pages/dashboard/EditNews/UpdateNews";
import CarDetail from "../pages/cars/CarDetail";
import CarsCard from "../pages/cars/CarsCard";
import Products from "../pages/home/ProductPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path : "/",
            element: <Home/>,
        },
        {
            path: "/orders",
            element: <div>Orders</div>
        },
        {
            path: "/about",
            element: <AboutPage/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/product",
          element : <Products/>
        },
        {
          path: "/car/:carId",
          element: <CarDetail />
        },
        {
          path: "/cars/:carId",
          element: <CarsCard />
        },
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    }, 
    {
      path: "/dashboard",
      element: <AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path: "add-new-car",
          element: <AdminRoute>
            <AddCar/>
          </AdminRoute>
        },
        {
          path: "edit-car/:id",
          element: <AdminRoute>
            <UpdateCar/>
          </AdminRoute>
        },
        {
          path: "manage-cars",
          element: <AdminRoute>
            <ManageCars/>
          </AdminRoute>
        },
        {
          path: "add-new-news",
          element: <AdminRoute><AddNews/></AdminRoute>
        },
        {
          path: "edit-news/:id",
          element: <AdminRoute><UpdateNews/></AdminRoute>
        },
        {
          path: "manage-news",
          element: <AdminRoute>
            <ManageNews />
          </AdminRoute>
        },
      ]
    },

  ]);
  
  export default router;