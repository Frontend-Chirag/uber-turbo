"use client";

import React, { useState } from 'react'
import Image from 'next/image';

import UberLogoWhite from '@repo/assets/icons/Uber_Logo_White_RGB.png';
import {
    TopNavigationMenu,
    TopNavigationMenuList,
    TopNavigationMenuItem,
    TopNavigationMenuLink,
    TopNavigationMenuButton
} from '@repo/design-system/components/top-navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@repo/design-system/components/ui/dropdown-menu';
import { useTranslation } from '@repo/internationalization/localProvider';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import { LocaleSwitcher } from '@/components/local-switcher';
import { ChevronDown } from '@repo/design-system';
import { SheetNav } from './sheet-nav';


const NestedDropdown: React.FC<{ sublist: any }> = ({ sublist }) => {
    const hasNestedSublists = sublist.sublists && sublist.sublists.length > 0;

    console.log('nested dropdown', sublist, hasNestedSublists)

    if (!hasNestedSublists) {
        // Leaf node - render as simple link
        return (
            <TopNavigationMenuLink
                key={sublist.id}
                href={`/${sublist.id}`}
                className='text-neutral-600 text-nowrap font-uber-medium text-[14px]  hover:bg-neutral-100 hover:text-neutral-600 text-sm  rounded-none px-6 '
            >
                {sublist.title}
            </TopNavigationMenuLink>
        );
    }

    // Has nested sublists - render as submenu
    return (
        <DropdownMenuSub key={sublist.id}>
            <DropdownMenuSubTrigger
                className='text-neutral-600 font-uber-medium text-[14px]  hover:bg-neutral-100 hover:text-neutral-600 text-sm  rounded-none px-6 '
            >
                {sublist.title}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent className="max-w-max py-2 px-0 flex flex-col border-none  outline-none shadow-[0px_0px_12px_rgba(0,0,0,0.1)] ">
                    {sublist.sublists.map((nestedSublist: any) => (
                        <NestedDropdown key={nestedSublist.id} sublist={nestedSublist} />
                    ))}
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
    );
};

const DropdownMenuItem: React.FC<{ option: any }> = ({ option }) => {
    console.log(option)

    return (
        <DropdownMenu key={option.id}>
            <TopNavigationMenuItem className="pl-0">
                <DropdownMenuTrigger asChild>
                    <TopNavigationMenuButton className="font-uber-medium rounded-full">
                        {option.title} <ChevronDown className='size-4' />
                    </TopNavigationMenuButton>
                </DropdownMenuTrigger>
            </TopNavigationMenuItem>
            <DropdownMenuContent
                sideOffset={16}
                className="py-2 px-0 flex flex-col border-none  outline-none shadow-[0px_0px_12px_rgba(0,0,0,0.1)] "
                align="start"
            >
                {option.sublists.map((sublist: any) => {
                    const hasNestedItems = sublist.sublists?.length > 0;
                    return hasNestedItems ? (
                        <NestedDropdown key={sublist.id} sublist={sublist} />
                    ) : (
                        <TopNavigationMenuLink
                            key={sublist.id}
                            href={`/${sublist.href}`}
                            className='text-neutral-600 font-uber-medium w-48  hover:bg-neutral-100 hover:text-neutral-600 text-sm  rounded-none px-6 '>
                            {sublist.title}
                        </TopNavigationMenuLink>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

const SimpleMenuItem: React.FC<{ option: any }> = ({ option }) => (
    <TopNavigationMenuItem key={option.id}>
        <TopNavigationMenuLink
            href={option.href}
            className="font-uber-medium rounded-full text-[14px] "
        >
            {option.title}
        </TopNavigationMenuLink>
    </TopNavigationMenuItem>
);

interface NavbarProps {
    locale: string;
    country: string;
}

export const Navbar = ({ locale, country }: NavbarProps) => {

    const { dictionary, isLoading } = useTranslation('(home)');

    const {
        header: {
            navigation = [],
            help_text = 'Help',
            log_in_text = 'Log in',
            sign_up_text = 'Sign up'
        } = {}
    } = dictionary || {};


    const options = navigation.map((option) => ({
        ...option,
        href: `/${country}/${locale}/${option.id}`
    }));

    return (
        <header className="fixed top-0 left-0 right-0 z-90 flex-1 bg-black">
            <div className='max-w-7xl mx-auto'>
                <TopNavigationMenu className='bg-transparent border-none py-1 px-2 gap-0'>
                    {/* Left aligned brand */}
                    <TopNavigationMenuList align={'left'}>
                        <TopNavigationMenuItem>
                            <Image
                                src={UberLogoWhite}
                                alt={'uber-logo'}
                                width={90}
                                height={90}
                            />
                        </TopNavigationMenuItem>
                    </TopNavigationMenuList>
                    {/* {dictionary.section_1.title} */}

                    {/* Center aligned navigation links */}
                    <TopNavigationMenuList align={'left'} className='px-0 hidden xl:flex'>

                        {isLoading ?
                            <Skeleton className='bg-neutral-600 w-82 h-8' />
                            :
                            (options && options.length > 0 && options.map((option) => {
                                const hasSubmenus = option.sublists && option.sublists.length > 0;

                                return hasSubmenus ? (
                                    <DropdownMenuItem key={option.id} option={option} />
                                ) : (
                                    <SimpleMenuItem key={option.id} option={option} />
                                );
                            }))
                        }
                    </TopNavigationMenuList>

                    <TopNavigationMenuList align={'center'} />

                    {/* Right aligned actions */}
                    <TopNavigationMenuList align={'right'} className='flex justify-start itmes-center gap-1'>
                        <TopNavigationMenuItem className='hidden xl:flex'>
                            <LocaleSwitcher
                                locale={locale}
                                country={country}
                            />
                        </TopNavigationMenuItem>
                        <TopNavigationMenuItem className='hidden xl:flex' >
                            <TopNavigationMenuLink href="/" className='hover:bg-transparent font-uber-medium'>
                                {help_text}
                            </TopNavigationMenuLink>
                        </TopNavigationMenuItem>
                        <TopNavigationMenuItem>
                            {isLoading ?
                                <Skeleton className='bg-neutral-600 w-20 h-8' />
                                :
                                <TopNavigationMenuLink href="#login" className='rounded-full font-uber-medium'>
                                    {log_in_text}
                                </TopNavigationMenuLink>
                            }
                        </TopNavigationMenuItem>
                        <TopNavigationMenuItem >
                            {isLoading ?
                                <Skeleton className='bg-neutral-600 w-20 h-8' />
                                :
                                <TopNavigationMenuLink
                                    href="#login"
                                    className='text-black bg-white hover:bg-neutral-100 font-uber-medium hover:text-black rounded-full'
                                >
                                    {sign_up_text}
                                </TopNavigationMenuLink>
                            }
                        </TopNavigationMenuItem>
                        <TopNavigationMenuItem className='flex xl:hidden'>
                            <SheetNav />
                        </TopNavigationMenuItem>
                    </TopNavigationMenuList>

                </TopNavigationMenu>
            </div>
        </header>
    )
}
