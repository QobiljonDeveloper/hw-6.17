import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./home";
import ProductDetails from "./produc-details";
import Users from "./user";
import UserDetails from "./user-details";
import Login from "./login";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
