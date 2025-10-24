"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { DatePicker } from "@repo/design-system/components/ui/date-picker";
import { Heading, HeadingLevel } from "@repo/design-system/components/ui/heading-level";
import { Link } from "@repo/design-system/components/ui/Link";
import { TimePicker } from "@repo/design-system/components/ui/time-picker";
import { addDays, isAfter, isBefore, startOfToday } from "date-fns";
import { ArrowLeft, ChevronDown, HourglassIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCalendar, FaCreditCard } from "react-icons/fa";


export default function SelectTime() {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date>();

    return (
        <section className='flex flex-col gap-y-4'>
            <div className=' flex justify-between items-center '>
                <Button
                    variant='secondary'
                    onClick={() => router.back()}
                    className='w-fit p-1 rounded-full'
                >
                    <ArrowLeft className='size-4' />
                </Button>
                <Button
                    variant='secondary'
                    onClick={() => router.back()}
                    className='w-fit  px-3.5 py-1 rounded-lg  bg-transparent  hover:bg-neutral-100 shadow-none '
                >
                    clear
                </Button>
            </div>
            <div className='flex flex-col gap-y-4 w- max-h-96 overflow-y-scroll'>
                <HeadingLevel >
                    <Heading className='text-xl' >
                        When do you want to be picked up?
                    </Heading>
                </HeadingLevel>
                <div className='flex flex-col gap-y-4'>
                    <DatePicker
                        inputProps={{
                            overrides: {
                                endEnhancer: <ChevronDown className='size-4' />,
                            }
                        }}
                        dayPicker={{
                            captionLayout: "label",
                            numberOfMonths: 2,
                            disableNavigation: true,
                            disabled: (date) => isBefore(date, startOfToday()) || isAfter(date, addDays(startOfToday(), 30))
                        }}
                        selectedDate={selectedDate}
                        onSelectDate={setSelectedDate}
                        align='start'
                        sideOffset={-100}
                        popoverContent={
                            <div className='flex flex-col px-8 mb-4'>
                                <p className='text-[14px] text-neutral-600 font-uber-regular'>Reserve your ride up to 30 days in advance</p>
                                <Button
                                    variant='secondary'
                                    className='w-fit rounded-full h-fit text-[12px] py-1 px-2'
                                >
                                    Pickup now
                                </Button>
                            </div>
                        }
                    />
                    <TimePicker
                        inputProps={{
                            overrides: { 
                                endEnhancer: <ChevronDown className="size-4" />,
                                inputClass: 'placeholder:text-[16px] placeholder:text-neutral-900 font-uber-regular',
                             },
                            }}
                        contentClassName='w-66'
                    />
                </div>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex gap-x-6  items-center px-2'>
                        <FaCalendar className='size-5' />
                        <p className='font-uber-regular text-[14px] text-neutral-700'>
                            Choose your pickup time up to 30 days in advance
                        </p>
                    </div>
                    <div className='flex gap-x-5.5 items-center px-2'>
                        <HourglassIcon className='size-5' />
                        <p className='font-uber-regular text-[14px] text-neutral-700'>
                            Extra wait time included to meet your ride
                        </p>
                    </div>
                    <div className='flex gap-x-6 items-center  px-2'>
                        <FaCreditCard className='size-5' />
                        <p className='font-uber-regular text-[14px] text-neutral-700'>
                            Cancel at no charge up to 60 minutes in advance
                        </p>
                    </div>
                </div>

                <Link href='/' className='text-[14px] text-neutral-700 underline font-uber-regular'>
                    See terms
                </Link>
            </div>
            <Button className='py-3  font-uber-medium text-[16px]'>
                Next
            </Button>
        </section>
    )
}