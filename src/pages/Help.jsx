import React from "react";
import { Link, Outlet } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <h1>Help Component</h1>
      <Link to="reach">Go to ReachOut</Link>
      <Outlet />
    </div>
  );
};

export default Help;
