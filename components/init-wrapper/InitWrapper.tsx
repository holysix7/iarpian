import { InitWrapperProvider } from "components/init-wrapper/provider/InitWrapperProvider";
import type { InitWrapperProps } from "components/init-wrapper/type";
import type React from "react";

export const InitWrapper: React.FC<InitWrapperProps> = ({
  children,
  config,
}) => {
  return (
    <InitWrapperProvider config={config}>
      <div className='bg-white w-full h-screen text-black'>
        {children}
      </div>
    </InitWrapperProvider>
  );
};
