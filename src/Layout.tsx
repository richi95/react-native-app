import { Button } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="mb-4 py-4 w-[320px] mx-auto bg-white">
        <Outlet />
      </div>
      <nav className="fixed flex justify-center py-4 bottom-0 left-0 right-0 bg-white">
        <div className="space-x-8">
          <Button>
            <Link to="/" className="font-bold">
              Read
            </Link>
          </Button>
          <Button>
            <Link to="/create" className="font-bold">
              Create
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
