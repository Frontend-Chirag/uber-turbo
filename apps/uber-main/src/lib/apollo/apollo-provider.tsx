"use client";
import React from "react";
import { apolloClient } from "./apollo-client";
import { ApolloProvider as Provider } from "@apollo/client/react";

export const ApolloProvider = ({ children }: React.PropsWithChildren) => {
    return <Provider client={apolloClient}>{children}</Provider>;
}