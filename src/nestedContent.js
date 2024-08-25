import React, { useContext } from "react";
import { AppContext } from "./context";

const NestedContent = () => {
  const { nested } = useContext(AppContext);
  return <div>{nested}</div>;
};

export default NestedContent;
