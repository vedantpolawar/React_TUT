import React from "react";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";

function Layout() {
  return (
    <>
      <Header />
      {/* Child routes will be rendered here */}
      <Outlet />
      <Footer />
    </>
  );
}
// no need of creating a layouit page we can directly use it in App.jsx  but okay good paractice
export default Layout;
