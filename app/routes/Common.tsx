import React from "react";
import { Outlet } from "react-router";
import {Header} from "../components";
import Footer from "../components/Footer/Footer";

const Common = () => {
  return (
    <div className="min-h-screen flex flex-col px-6">
      <Header/>

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* This will render the nested routes/layouts */}
        <Outlet />
      </main>

      {/* Common Footer */}
      <Footer />
    </div>
  );
};

export default Common;
