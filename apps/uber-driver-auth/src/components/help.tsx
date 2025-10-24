"use client";

import React, { useState } from 'react';
import { ChevronUp, ChevronDown, GlobeIcon, LucideIcon, CircleQuestionMarkIcon, MessageSquareTextIcon } from "lucide-react";
import { BsQuestionCircleFill } from "react-icons/bs"
import { IconType } from 'react-icons';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenuLabel, } from "@repo/design-system/components/ui/dropdown-menu";
import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';

type HelpOptions = {
    icon?: LucideIcon | IconType,
    label: string,
    label2?: string,
    onClick: () => void;
}



export const Help = () => {

    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState<number | null>(null);

    const helpOptions: HelpOptions[] = [
        {
            icon: GlobeIcon,
            label: 'Change my language',
            label2: 'English',
            onClick: () => console.log('Change my language')
        },
        {
            icon: MessageSquareTextIcon,
            label: 'Chat with support',
            onClick: () => console.log('Change my language')
        },
        {
            icon: BsQuestionCircleFill,
            label: ' Get help with your account',
            onClick: () => console.log('Change my language')
        },
        {
            label: ' Sign out',
            onClick: () => console.log('Change my language')
        },
    ];


    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild >
                <Button variant={'secondary'} className='gap-2 rounded-full bg-white font-uber-medium text-[14px]'>
                    Help
                    {open ? <ChevronUp className='size-4' /> : <ChevronDown className='size-4' />}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='min-w-[300px] p-0 rounded-xl border-none shadow-[0px_1px_15px_rgba(0,0,0,0.2)]'>
                {helpOptions.map((option, idx) => {
                    const Icon = option.icon
                    return (
                        <DropdownMenuItem
                            key={idx}
                            onClick={option.onClick}
                            className={cn('px-4 py-2 min-h-[65px] cursor-pointer rounded-none', hover && (hover === idx && 'bg-neutral-100'))}
                            onMouseEnter={() => {
                                setHover(idx)
                            }}
                        >
                            {Icon && (
                                <Icon className='size-6 text-black' />
                            )}
                            <div className='flex flex-col px-2'>
                                <h1 className='font-uber-medium text-[16px]'>
                                    {option.label}
                                </h1>
                                {option.label2 && (
                                    <span className='font-uber-regular text-[14px]'>{option.label2}</span>
                                )}
                            </div>
                        </DropdownMenuItem>
                    )
                })}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
