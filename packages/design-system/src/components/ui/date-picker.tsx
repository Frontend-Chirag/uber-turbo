import React, { useState, useEffect, useRef } from 'react'
import { Input, InputProps } from './input'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Calendar } from './calendar'
import { type Locale } from "react-day-picker/locale"
import { format, isBefore, isSameDay, startOfToday } from 'date-fns'
import { cn } from '../../lib/utils'
import { FaCalendar } from 'react-icons/fa6'
import { DayPickerProps } from 'react-day-picker'

interface DatePickerProps {
    inputProps?: InputProps
    locale?: Locale
    dayPicker?: Omit<DayPickerProps, 'mode'>
    triggerClassName?: string;
    align?: "center" | "start" | "end"
    popoverContent?: React.ReactNode
    sideOffset?: number;
    selectedDate?: Date
    onSelectDate?: (date: Date | undefined) => void

}

export const DatePicker = ({
    triggerClassName,
    inputProps,
    dayPicker,
    selectedDate: controlledDate,
    onSelectDate,
    align,
    sideOffset,
    popoverContent,
}: DatePickerProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [uncontrolledDate, setUncontrolledDate] = useState<Date>()
    const [hoveredDate, setHoveredDate] = useState<Date>()
    const [inputValue, setInputValue] = useState('Today')

    const selectedDate = controlledDate ?? uncontrolledDate
    // Reset hover state on close, default hover today on open
    useEffect(() => {
        if (!isOpen) {
            setHoveredDate(undefined)
        } else if (!inputValue) {
            setHoveredDate(startOfToday())
        }
    }, [isOpen, inputValue])

    const handleSelect = (date: Date | undefined) => {
        if (onSelectDate) {
            onSelectDate(date) // notify parent
        } else {
            setUncontrolledDate(date) // fallback
        }

        setHoveredDate(undefined)
        setInputValue(date ? format(date, 'MMM d') : '')
        setIsOpen(false)
    }


    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className={cn(triggerClassName)}>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={() => setIsOpen(true)}
                    readOnly
                    overrides={{
                        startEnhancer: inputProps?.overrides?.startEnhancer ?? <FaCalendar className="size-4 text-black" />,
                        inputClass:cn('cursor-pointer text-[16px]  font-uber-regular ml-1', inputProps?.overrides?.inputClass)
                    }}
                    className={cn('cursor-pointer py-3', inputProps?.className)}
                    {...inputProps}
                />
            </PopoverTrigger>

            <PopoverContent
                align={align}
                sideOffset={sideOffset}
                style={{
                    minWidth: `${(dayPicker?.numberOfMonths ?? 1) * 406}px`,
                }}
                className=" bg-white border-none outline-none p-0 rounded-lg shadow-[0_6px_15px_rgba(0,0,0,0.2)]"
            >
                <div className='flex flex-col gap-y-1'>
                    <Calendar
                        mode='single'
                        selected={selectedDate}
                        defaultMonth={selectedDate ?? startOfToday()}
                        onSelect={handleSelect}
                        onDayMouseEnter={(date, modifiers) => {
                            if (!modifiers.disabled) {
                                setHoveredDate(date)
                            }
                        }}
                        showOutsideDays={false}
                        modifiers={{
                            preview: (d) => !!hoveredDate && isSameDay(d, hoveredDate)
                        }}
                        className="w-full"
                        classNames={{
                            chevron: 'size-5',
                            weekday: 'w-full font-uber-light text-neutral-800 text-[16px] mt-2 mb-2',
                            month_grid: 'grid gap-1 w-full',
                            day_button: cn(
                                "text-[16px] bg-white text-black rounded-full",
                                "data-[preview=true]:border-2 data-[preview=true]:border-black",
                                inputValue &&
                                "data-[selected-single=true]:bg-black data-[selected-single=true]:text-white data-[selected-single=true]:border-0"
                            ),
                            week: "w-full gap-2 flex mt-1",
                            disabled: 'text-neutral-700 cursor-default hover:border-none hover:bg-transparent',
                            day: cn(
                                'h-full w-full text-center font-uber-regular text-lg p-0 transition-all bg-white overflow-hidden'
                            ),
                        }}
                        {...dayPicker}
                    />
                    {popoverContent}
                </div>
            </PopoverContent>
        </Popover>
    )
}
