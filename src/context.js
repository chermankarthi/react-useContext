import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const names = "cherman";
  const number = 9043428773;
  const nested = "nested component";

  return (
    <AppContext.Provider value={{ names, number, nested }}>
      {props.children},
    </AppContext.Provider>
  );
};

export default ContextProvider;
