"use client";

import React from 'react'
import { HeroSection } from './hero-section';
import { Suggestions } from './suggestion-section';
import { PlaningSection } from './planing-section';
import { LoginSection } from './login-section';
import { Button } from '@repo/design-system/components/ui/button';
import { SignupSection } from './sign-section';
import { BusinessSection } from './business-section.';
import { RentingSection } from './renting-section';

export const HomePage = () => {

    return (
        <main className="flex-1 flex flex-col">
            <HeroSection />
            <Suggestions />
            <LoginSection />
            <PlaningSection />
            <SignupSection />
            <BusinessSection />
            <RentingSection />
            <div className="fixed bottom-0 left-0 w-full p-4  bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
                <Button className="w-full h-12 text-[16px] text-white font-uber-medium">
                    See prices
                </Button>
            </div>
        </main>
    )
}
