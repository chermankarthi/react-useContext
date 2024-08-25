import React, { useContext } from "react";
import { AppContext } from "./context";

const Header = () => {
  const { names } = useContext(AppContext);
  return (
    <>
      <h1>Header</h1>
      <div>{names}</div>
    </>
  );
};

export default Header;
