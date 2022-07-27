import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
