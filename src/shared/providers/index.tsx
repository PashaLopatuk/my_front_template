import React from 'react';

import type {FC, ReactNode} from 'react'

type ProviderProps = Readonly<{
  children: ReactNode
}>

const Providers:FC<ProviderProps> = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default Providers;