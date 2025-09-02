
import { cn } from '../lib/utils'
import React from 'react'
import Link from "next/link";
import { Button } from './ui/button';

type AlignType = "left" | "center" | "right";


function TopNavigationMenu({
    className,
    ...props
}: React.ComponentProps<"nav">) {
    return (
        <nav
            className={cn(
                "flex w-full text-sm font-normal px-16 py-6 border-b border-gray-200 bg-white",
                className
            )}
            role="navigation"
            data-component="top-navigation-menu"
            {...props}
        />
    );
}

function TopNavigationMenuList({
    align = 'left',
    className,
    ...props
}: React.ComponentProps<"ul"> & { align?: AlignType }) {

    const alignmentClasses = {
        left: 'justify-start flex-shrink-0',
        right: 'justify-end flex-shrink-0',
        center: 'justify-center flex-grow flex-shrink basis-0',
      } as const;

    return (
        <ul
            className={cn(
                "flex items-center list-none m-0 p-0 px-4 first:pl-0 last:pr-0",
                alignmentClasses[align],
                className
            )}
            {...props}
        />
    );
}

function TopNavigationMenuItem({
    className,
    ...props
}: React.ComponentProps<"li">) {
    return (
        <li
            className={cn(
                "self-center",
                className
            )}
            {...props}
        />
    );
}

function TopNavigationMenuLink({
    className,
    ...props
}: React.ComponentProps<typeof Link>) {
    return (
        <Link
            className={cn(
                "inline-flex items-center text-white hover:text-white hover:bg-neutral-800 px-4 py-2 rounded-md transition-colors duration-200 ",
                className
            )}
            {...props}
        />
    );
}

function TopNavigationMenuButton({
    className,
    ...props
}: React.ComponentProps<typeof Button>) {
    return (
        <Button
            className={cn(
                "inline-flex items-center text-white hover:text-white hover:bg-neutral-800 px-4 py-2  bg-tranparent rounded-md transition-colors duration-200 outline-none focus:ring-0 focus:outline-none",
                className
            )}
            {...props}
        />
    );
}


export {
    TopNavigationMenu,
    TopNavigationMenuList,
    TopNavigationMenuItem,
    TopNavigationMenuLink,
    TopNavigationMenuButton
}
