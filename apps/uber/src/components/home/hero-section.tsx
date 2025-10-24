"use client";

import React, { useState } from 'react';
import Link from "next/link";

import { FaDotCircle, FaSquare } from "react-icons/fa";
import { NavigationIcon } from "lucide-react"
import { Button } from "@repo/design-system/components/ui/button";
import { DatePicker } from "@repo/design-system/components/ui/date-picker";
import { Heading } from "@repo/design-system/components/ui/heading-level";
import { Input } from "@repo/design-system/components/ui/input";
import { TimePicker } from "@repo/design-system/components/ui/time-picker";
import { useTranslation } from "@repo/internationalization/localProvider";
import { isBefore, startOfToday, isAfter, format, isSameDay, addDays, } from 'date-fns'

export const HeroSection = () => {

  const [selectedDate, setSelectedDate] = useState<Date>();
  const { dictionary } = useTranslation("(home)");
  const section = dictionary?.main;
  const form = dictionary?.main?.form;



  return (
    <section className="flex flex-col items-center paddingX paddingY">

      <div className='flex flex-col w-full items-center  gap-11 xl:gap-32  '>
        <Heading className=" text-[52px] text-center text-black">
          {section?.title}
        </Heading>
        <form className="w-full flex flex-col xl:flex-row gap-2.5  xl:items-center  ">
          <div className="flex flex-col xl:flex-row gap-2.5 flex-1 ">
            <Input
              startEnhancer={<FaDotCircle className='text-black' />}
              endEnhancer={<NavigationIcon className="fill-black" />}
              animatedLabel
              label={form?.placeholders?.pickup}
              rootClass="flex-1"
            />
            <Input
              startEnhancer={<FaSquare className="text-white fill-black" />}
              animatedLabel
              label={form?.placeholders?.dropoff}
              rootClass="flex-1"
            />
          </div>
          <div className="flex gap-2.5 xl:w-fit ">
            <div className="flex justify-start flex-col flex-1 xl:w-[160px]">
              <label className="flex xl:hidden font-uber-regular text-[14px] text-neutral-600">
                {form?.labels.date}
              </label>
              <DatePicker
                dayPicker={{
                  captionLayout: "dropdown",
                  numberOfMonths: 1,
                  // disableNavigation: true,
                  disabled: (date) => isBefore(date, startOfToday())
                }}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
                align='start'
                sideOffset={-100}
              />
            </div>
            <div className="flex justify-start flex-col flex-1 xl:w-[160px]">
              <label className="flex xl:hidden font-uber-regular text-[14px] text-neutral-600">
                {form?.labels.time}
              </label>
              <TimePicker
                inputProps={{
                  inputClass: 'placeholder:text-[16px] placeholder:text-neutral-900 font-uber-regular',
                }}
                contentClassName='w-38'
              />
              {/* <TimePicker
                className="flex-1 xl:w-[160px]"
              /> */}
            </div>
          </div>
          <Button className=" w-full  xl:w-auto h-[50px] rounded-md">
            {form?.submit_text}
          </Button>
        </form>

        <Link
          href={"/"}
          className="flex justify-center items-center gap-8 border border-neutral-200 rounded-md w-[350px] py-6"
        >
          <span className="text-[16px] font-uber-regular">
            {dictionary.main?.log_in_recent_activity_text}
          </span>
          <span className="text-white bg-black px-3 py-2 rounded-lg text-[14px] font-uber-medium">
            {dictionary.header?.log_in_text}
          </span>
        </Link>

      </div>
    </section>
  )
}
