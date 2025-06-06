import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { InitWrapperProps } from "components/init-wrapper/type";

const InitWrapperContext = createContext({});

export const InitWrapperProvider = ({
  children,
  ...props
}: InitWrapperProps) => {
  const { config } = props;
  return (
    <InitWrapperContext.Provider
      value={{
        ...config,
      }}
    >
      {children}
    </InitWrapperContext.Provider>
  );
};

export const useTableRendererContext = () => useContext(InitWrapperContext);
