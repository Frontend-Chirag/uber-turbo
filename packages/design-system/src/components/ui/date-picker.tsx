import React, { useState, useEffect, useRef } from 'react'
import { Input } from './input'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Calendar } from './calendar'
import { type Locale } from "react-day-picker/locale"
import { format, isBefore, isSameDay, startOfToday } from 'date-fns'
import { cn } from '../../lib/utils'
import { FaCalendar } from 'react-icons/fa6'

interface DatePickerProps {
    clearable?: boolean
    locale?: Locale
    className?: string;
}

export const DatePicker = ({ locale, clearable, className }: DatePickerProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>()
    const [hoveredDate, setHoveredDate] = useState<Date | undefined>()
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('')

    // Reset hover state on close, default hover today on open
    useEffect(() => {
        if (!isOpen) {
            setHoveredDate(undefined)
        } else if (!inputValue) {
            setHoveredDate(startOfToday())
        }
    }, [isOpen, inputValue])

    const handleSelect = (date: Date | undefined) => {
        setSelectedDate(date)
        setHoveredDate(undefined)
        setInputValue(date ? format(date, 'MMM d') : '')
        setIsOpen(false)
    }

    const handleClear = () => {
        setSelectedDate(undefined)
        setInputValue('')
        setHoveredDate(startOfToday())
        setIsOpen(true)
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className={cn( className)}>
                <Input
                    ref={inputRef}
                    clearable={clearable}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={() => setIsOpen(true)}
                    onClear={handleClear}
                    autoFocus={isOpen}
                    placeholder="Today"
                    startEnhancer={<FaCalendar className="size-4 text-black" />}
                    className='cursor-pointer py-3'
                    inputClass='cursor-pointer text-[18px]  placeholder:text-[18px] placeholder:text-neutral-400 font-uber-regular ml-1'
                />
            </PopoverTrigger>

            <PopoverContent
                onOpenAutoFocus={(e) => {
                    e.preventDefault();
                    inputRef?.current?.focus()
                }}
                className="w-[406px] bg-white border-none outline-none p-0 rounded-lg shadow-[0_6px_15px_rgba(0,0,0,0.2)]">
                <Calendar
                    locale={locale}
                    mode="single"
                    captionLayout="dropdown"
                    showOutsideDays={false}
                    selected={selectedDate}
                    defaultMonth={selectedDate ?? startOfToday()}
                    onSelect={handleSelect}
                    onDayMouseEnter={(date, modifiers) => {
                        if (!modifiers.disabled) setHoveredDate(date)
                    }}
                    // highlight hovered date
                    modifiers={{
                        preview: (d) => !!hoveredDate && isSameDay(d, hoveredDate),
                    }}
                    disabled={(date) => isBefore(date, startOfToday())}
                    className='w-full'
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
                        week: " w-full gap-2 flex mt-1",
                        disabled:
                            'text-neutral-700  cursor-default hover:border-none hover:bg-transparent',
                        day: cn(
                            'h-full w-full text-center font-uber-regular  text-lg p-0 transition-all bg-white overflow-hidden',
                        ),
                    }}
                />
            </PopoverContent>
        </Popover>
    )
}
