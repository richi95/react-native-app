import { Button } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="mx-4 mb-4 py-4 bg-white">
        <Outlet />
      </div>
      <nav className="fixed flex justify-center py-4 bottom-0 left-0 right-0 bg-white">
        <div className="space-x-8">
          <Button variant="contained">
            <Link to="/">Read</Link>
          </Button>
          <Button variant="contained">
            <Link to="/create">Create</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
