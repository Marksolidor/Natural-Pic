import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const endpoint = "/fotos.json";

  const dataConsult = async () => {
    try{
    const response = await (await fetch(endpoint)).json();
    const dataImg = response.photos;
    setData(dataImg);
  } catch (err) {}
  };

  useEffect(() => {
    dataConsult();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
