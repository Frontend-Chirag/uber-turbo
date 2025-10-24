import { APIProvider } from "@vis.gl/react-google-maps";
import React from "react";

export const MapProvider: React.FC<React.PropsWithChildren<React.ComponentProps<typeof APIProvider>>> = ({
  children,
  ...props
}) => {
  return <APIProvider {...props}>{children}</APIProvider>;
};