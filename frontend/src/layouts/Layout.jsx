// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Dual Gradient Overlay Swapped Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`
        }}
      />
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