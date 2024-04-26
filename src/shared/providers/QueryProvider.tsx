'use client'
import React from 'react';

import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

import type {FC, ReactNode} from "react";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

type QueryProviderProps = Readonly<{
  children: ReactNode;
}>

const QueryProvider: FC<QueryProviderProps> = ({children}) => {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider;