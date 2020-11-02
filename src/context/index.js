import React from "react";
import { DataSourceProvider, useDataSource } from "./DataSource/context";

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),

    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<DataSourceProvider />]}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider, useDataSource };
