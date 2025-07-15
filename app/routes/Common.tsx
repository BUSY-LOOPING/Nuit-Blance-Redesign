import React from "react";
import { Outlet } from "react-router";
import {Header} from "../components";

const Common = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* This will render the nested routes/layouts */}
        <Outlet />
      </main>

      {/* Common Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Common;
