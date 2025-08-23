import {
    TopNavigationMenu,
    TopNavigationMenuList,
    TopNavigationMenuItem,
    TopNavigationMenuLink,
    TopNavigationMenuButton
} from '@repo/design-system/components/top-navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@repo/design-system/components/ui/dropdown-menu';
import UberLogoWhite from '@repo/assets/icons/Uber_Logo_White_RGB.png';
import { Dictonary } from '@repo/internationalization';
import Image from 'next/image'
import React from 'react';

interface FixedHeaders {
    options: Dictonary['web']['header']['fixed_navigation']
};

const NestedDropdown: React.FC<{ sublist: any }> = ({ sublist }) => {
    const hasNestedSublists = sublist.sublists && sublist.sublists.length > 0;

    if (!hasNestedSublists) {
        // Leaf node - render as simple link
        return (
            <TopNavigationMenuLink
                key={sublist.id}
                href={sublist.id}
                className="text-black hover:bg-transparent"
            >
                {sublist.title}
            </TopNavigationMenuLink>
        );
    }

    // Has nested sublists - render as submenu
    return (
        <DropdownMenuSub key={sublist.id}>
            <DropdownMenuSubTrigger>
                {sublist.title}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                    {sublist.sublists.map((nestedSublist: any) => (
                        <NestedDropdown key={nestedSublist.id} sublist={nestedSublist} />
                    ))}
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
    );
};

const DropdownMenuItem: React.FC<{ option: any }> = ({ option }) => (
    <DropdownMenu key={option.id}>
        <TopNavigationMenuItem className="pl-0">
            <DropdownMenuTrigger asChild>
                <TopNavigationMenuButton className="font-uber-medium rounded-full">
                    {option.title}
                </TopNavigationMenuButton>
            </DropdownMenuTrigger>
        </TopNavigationMenuItem>
        <DropdownMenuContent className="w-56 flex-flex-col" align="start">
            {option.sublists.map((sublist: any) => {
                const hasNestedItems = sublist.sublists?.items?.length > 0;

                return hasNestedItems ? (
                    <NestedDropdown key={sublist.id} sublist={sublist} />
                ) : (
                    <TopNavigationMenuLink
                        key={sublist.id}
                        href={sublist.id}
                        className='text-black hover:bg-tranparent'>
                        {sublist.title}
                    </TopNavigationMenuLink>
                );
            })}
        </DropdownMenuContent>
    </DropdownMenu>
);

const SimpleMenuItem: React.FC<{ option: any }> = ({ option }) => (
    <TopNavigationMenuItem key={option.id} className="pl-0">
        <TopNavigationMenuLink
            href={option.id}
            className="font-uber-medium rounded-full text-[14px] tracking-wide"
        >
            {option.title}
        </TopNavigationMenuLink>
    </TopNavigationMenuItem>
);

export const FixedHeader = (
    props: FixedHeaders
) => {

    return (
        <header className="sticky top-0 left-0 z-40 w-full border-b bg-background">
            <TopNavigationMenu className='bg-black py-1 '>
                {/* Left aligned brand */}
                <TopNavigationMenuList align={'left'}>
                    <TopNavigationMenuItem>
                        <Image
                            src={UberLogoWhite}
                            alt={'uber-logo'}
                            width={100}
                            height={100}
                        />
                    </TopNavigationMenuItem>
                </TopNavigationMenuList>

                {/* Center aligned navigation links */}
                <TopNavigationMenuList align={'left'} className='px-0'>
                    {props.options && props.options.length > 0 && props.options.map((option) => {
                        const hasSubmenus = option.sublists?.length > 0;

                        return hasSubmenus ? (
                            <DropdownMenuItem key={option.id} option={option} />
                        ) : (
                            <SimpleMenuItem key={option.id} option={option} />
                        );
                    })}
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

        </header>
    )
}
