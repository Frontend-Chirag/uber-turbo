import React from 'react';
import Link from 'next/link';

import { Help } from './help';
import { cn } from '@repo/design-system/lib/utils';




export const Navbar = ({ className }: { className?: string }) => {
    return (
        <div className={cn("fixed top-0 left-0 right-0 z-30 bg-black", className)}>
            <div className="max-w-[1792px] mx-auto">
                <header className="relative flex items-center justify-between h-[60px] px-6 lg:px-16">
                    {/* Left nav */}
                    <nav className="flex h-full">
                        <ul className="flex items-center gap-2 h-full ">
                            {/* Logo */}
                            <li>
                                <Link href="/" className="font-uber-medium text-[28px] text-white mr-16">
                                    Uber
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Right side buttons */}
                    <div className="absolute right-4  flex items-center gap-2">
                        <Help />
                    </div>
                </header>
            </div>
        </div>
    )
}
