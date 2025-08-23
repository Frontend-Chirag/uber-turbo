import React from 'react';
import Image from "next/image";
import UberLogoWhite from "@repo/assets/icons/Uber_Logo_White_RGB.png";
import UberLogoBlack from "@repo/assets/icons/Uber_Logo_Black_RGB.png";
import { TopNavigationMenu, TopNavigationMenuItem, TopNavigationMenuList } from '@repo/design-system/components/top-navigation'
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/design-system/components/ui/tabs";


export const Navbar = () => {

    const options = [
        {
            link: '/home',
            name: 'Home'
        },
        {
            link: '/ride',
            name: 'Ride'
        },
        {
            link: '/driver',
            name: 'Driver'
        },
        {
            link: '/about',
            name: 'About'
        }
    ]

    return (
        <div>
            <TopNavigationMenu className='bg-white py-0 h-[50px] relative  '>
                {/* Left aligned brand */}
                <TopNavigationMenuList align={'left'}>
                    <TopNavigationMenuItem>
                        <Link href={'/'} className='relative'>
                            <Image
                                src={UberLogoBlack}
                                alt="Uber Logo"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </TopNavigationMenuItem>
                </TopNavigationMenuList>


                <TopNavigationMenuList align={'left'} className=' px-0 relative' >
                    <Tabs className="bg-white  h-full" orientation='vertical' >
                        <TabsList className="bg-white h-full  py-0">
                            {options.map((option) => (
                                <TabsTrigger key={option.link} value={option.link} className='h-full shadow-none'>
                                    {option.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </TopNavigationMenuList>

                <TopNavigationMenuList align={'center'} />

                {/* 
                <TopNavigationMenuList align={'right'}>
                    <TopNavigationMenuItem >
                        <TopNavigationMenuLink href="#Signup">
                            signup
                        </TopNavigationMenuLink>
                    </TopNavigationMenuItem>
                    <TopNavigationMenuItem>
                        <TopNavigationMenuLink
                            href="#login"
                            className='text-black bg-white hover:bg-white hover:text-black'
                        >
                            login
                        </TopNavigationMenuLink>
                    </TopNavigationMenuItem>
                </TopNavigationMenuList> */}

            </TopNavigationMenu>
        </div>
    )
}
