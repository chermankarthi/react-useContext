import React, { useContext } from "react";
import { AppContext } from "./context";

const Footer = () => {
  const { number } = useContext(AppContext);
  return (
    <>
      <h1>Footer</h1>
      <div>{number}</div>
    </>
  );
};

export default Footer;
