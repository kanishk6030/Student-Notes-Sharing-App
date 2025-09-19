// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div className="min-h-screen w-full relative">
      <div>
        <Header />
        <Outlet/>
        <Footer />  
      </div>

      {/* Your Content/Components */}


    </div>
  );
}

export default Layout;