import React from "react";
import ContextProvider from "./context";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <Content />
      <Footer />
    </ContextProvider>
  );
};

export default App;
