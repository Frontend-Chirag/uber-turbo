import { Navbar } from '@/components/nav-bar'
import React from 'react'

interface HubLayoutProps {
    children: React.ReactNode
}

export default function HubLayout({ children }: HubLayoutProps) {
    return (
        <div className='flex min-h-screen'>
            <Navbar />
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-2xl mx-auto pt-[60px] min-h-full">
                    {children}
                </div>
            </main>
        </div>
    )
}
