import React, { useState, useRef } from 'react'
import { Input, InputProps } from './input'
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

interface TimePickerProps {
    triggerClassName?: string;   // for PopoverTrigger
    inputProps?: InputProps;     // for Input customization
    contentClassName?: string;
}

export const TimePicker = ({
    triggerClassName,
    inputProps,
    contentClassName
}: TimePickerProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState("Now")
    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
    }



    return (
        <Popover onOpenChange={handleOpenChange} open={isOpen}>
            <PopoverTrigger className={cn(triggerClassName)}>
                <Input
                    value={inputValue}
                    onClick={() => setIsOpen(true)}
                    readOnly
                    inputMode="none"
                    autoFocus={isOpen}
                    overrides={{
                        startEnhancer: inputProps?.overrides?.startEnhancer ?? <HiClock className="size-5 text-black" />,
                        endEnhancer: inputProps?.overrides?.endEnhancer ?? <FaCaretDown className="size-5 text-black" />,
                        inputClass: cn(
                            "cursor-pointer text-[16px] flex-1 font-uber-regular ml-1",
                            inputProps?.overrides?.inputClass
                        )
                    }}
                    className={cn("cursor-pointer  py-3", inputProps?.className)}
                    {...inputProps}
                />
            </PopoverTrigger>

            <PopoverContent
                className={cn(
                    "w-38 bg-white border-none outline-none px-0 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.2)]",
                    contentClassName
                )}
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
    )
} 
