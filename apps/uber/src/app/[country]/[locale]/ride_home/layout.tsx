import React from 'react'

interface RideHomeLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    country: string;
    locale: string
  }>
}

export default async function RideHomeLayout  ({children, params}: RideHomeLayoutProps){

    const {country, locale} = await params;

  return (
    <div>
        nav
        {children}
        footer
        </div>
  )
}
