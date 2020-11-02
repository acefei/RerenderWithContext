import React, { useContext } from "react";
import useDataSourceReducer from "./reducer";

const DataSourceContext = React.createContext();

const DataSourceProvider = ({ children }) => {
  return (
    <DataSourceContext.Provider value={useDataSourceReducer()}>
      {children}
    </DataSourceContext.Provider>
  );
};

const useDataSource = () => useContext(DataSourceContext);

export { DataSourceProvider, useDataSource };
