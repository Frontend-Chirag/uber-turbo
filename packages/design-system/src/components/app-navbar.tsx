
import React from 'react';
import {
    TopNavigationMenu,
    TopNavigationMenuItem,
    TopNavigationMenuLink,
    TopNavigationMenuList,
} from './top-navigation';

interface Options {
    link: string
    name: string
}

interface AppNavbarProps {
    title: string
    options?: Options[]
}


export const AppNavbar = (props: AppNavbarProps) => {
    return (
        <TopNavigationMenu className='bg-black '>
            {/* Left aligned brand */}
            <TopNavigationMenuList align={'left'}>
                <TopNavigationMenuItem>
                    <span className="text-lg font-uber-regular text-white">
                        {props.title}
                    </span>
                </TopNavigationMenuItem>
            </TopNavigationMenuList>

            {/* Center aligned navigation links */}
            <TopNavigationMenuList align={'left'}>
                {props.options && props.options.length > 0 && props.options.map((option) => (
                    <TopNavigationMenuItem
                        key={option.name}
                        className='pl-0'
                    >
                        <TopNavigationMenuLink href={option.link} >
                            {option.name}
                        </TopNavigationMenuLink>
                    </TopNavigationMenuItem>
                ))}
            </TopNavigationMenuList>

            <TopNavigationMenuList align={'center'} />

            {/* Right aligned actions */}
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
            </TopNavigationMenuList>

        </TopNavigationMenu>
    )
}
