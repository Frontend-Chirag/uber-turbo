"use client";
import React from 'react'

import { APIProvider } from '@vis.gl/react-google-maps';

export const MapProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <APIProvider
      apiKey={"AIzaSyDS9iAd2O04zfaHOPZTN26E5eqva9oW864"}
      onLoad={() => console.log('Maps API has loaded.')}
      libraries={['core']}
    >
      {children}
    </APIProvider>
  )
}
