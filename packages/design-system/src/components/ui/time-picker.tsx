import React, { useState, useRef } from 'react'
import { Input } from './input'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { HiClock } from 'react-icons/hi2'
import { format, addMinutes, startOfMinute } from "date-fns";
import { FaCaretDown } from 'react-icons/fa';
import { Button } from './button';
import { cn } from '../../lib/utils';

function generateTimeSlots() {
    const now = new Date();
    const slots: string[] = ["Now"];

    // Start 1 hour ahead of current rounded minute
    let start = addMinutes(startOfMinute(now), 60);
    const end = addMinutes(start, 105); // 1 hour 45 mins later

    while (start <= end) {
        slots.push(format(start, "hh:mm a"));
        start = addMinutes(start, 15);
    }

    return slots;
}

export const TimePicker = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);
    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
    }

    const handleInputClick = () => {
        setIsOpen(true);
    }

    return (
        <div className='w-[190px]'>
            <Popover onOpenChange={handleOpenChange} open={isOpen}>
                <PopoverTrigger >
                    <Input
                        ref={inputRef}
                        value={inputValue}
                        onClick={handleInputClick}
                        placeholder="Now"
                        readOnly
                        inputMode='none'
                        autoFocus={isOpen}
                        startEnhancer={<HiClock className='size-5 ' />}
                        endEnhancer={<FaCaretDown className='size-5' />}
                        className='cursor-pointer py-3'
                        inputClass='cursor-pointer text-[18px] placeholder:text-[18px] placeholder:text-neutral-400 font-uber-regular ml-1'
                    />
                </PopoverTrigger>

                <PopoverContent
                    onOpenAutoFocus={(e) => {
                        e.preventDefault();
                        inputRef?.current?.focus()
                    }}
                    className='w-38 bg-white  border-none outline-none px-0 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.2)]'
                >
                    <div className='flex flex-col max-h-[165px] overflow-y-auto'>
                        {generateTimeSlots().map((time) => (
                            <Button
                                key={time}
                                onClick={() => setInputValue(time)}
                                className='rounded-none bg-white flex justify-start items-center font-uber-regular text-black hover:bg-neutral-100'
                            >
                                {time}
                            </Button>
                        ))}
                    </div>
                </PopoverContent>

            </Popover>
        </div>
    )
} 
