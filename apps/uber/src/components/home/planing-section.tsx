"use client";

import { Calendar1Icon, Clock3Icon, FaCalendar } from '@repo/design-system';
import { Button } from '@repo/design-system/components/ui/button';
import { DatePicker } from '@repo/design-system/components/ui/date-picker';
import { Heading, HeadingLevel } from '@repo/design-system/components/ui/heading-level';
import { Link } from '@repo/design-system/components/ui/Link';
import { TimePicker } from '@repo/design-system/components/ui/time-picker';
import { useTranslation } from '@repo/internationalization/localProvider';
import React from 'react'

export const PlaningSection = () => {

  const { dictionary } = useTranslation("(home)")

  const section = dictionary.section_3;
  const benefits = section?.benefits;
  const form = section?.form;

  return (
    <section className="flex flex-col items-start  paddingX paddingY">
      <Heading>
        {section?.title}
      </Heading>
      <div className='w-full h-full flex flex-col xl:flex-row mt-4 gap-x-8 '>
        <div className='flex-2 flex flex-col gap-y-8 p-8 border rounded-xl bg-blue-300'>
          <div className='flex flex-col max-w-xs mt-8 '>
            <HeadingLevel>
              <Heading className='xl:text-4xl'>
                {form?.title}
              </Heading>
            </HeadingLevel>
          </div>
          <div className='flex flex-col gap-4 max-w-sm'>
            <HeadingLevel>
              <Heading className='text-lg'>{form?.subtitle}</Heading>
            </HeadingLevel>
            <div className='flex gap-x-2'>
              <DatePicker />
              <TimePicker />
            </div>
            <Button className='py-6 text-[16px]'>
              {form?.button_text}
            </Button>
          </div>
        </div>

        <div className='flex flex-col flex-1 h-fit border p-3 gap-6 border-neutral-200 rounded-xl  mt-8 xl:mt-0  '>
          <Heading level={4}>
            {benefits?.title}
          </Heading>

          <div className='flex flex-col px-6 gap-y-6'>
            <div className='flex justify-start items-center gap-5'>
              <FaCalendar className='text-black size-5' />
              <span className='text-neutral-900 font-uber-regular'>{benefits?.items[0]}</span>
            </div>
            <div className='flex justify-start items-center gap-5'>
              <Clock3Icon className='text-black size-5' />
              <span className='text-neutral-900 font-uber-regular'>{benefits?.items[1]}</span>
            </div>
            <div className='flex justify-start items-center gap-5'>
              <FaCalendar className='text-black size-5' />
              <span className='text-neutral-900 font-uber-regular'>{benefits?.items[2]}</span>
            </div>
          </div>

          <Link href='/' className='text-neutral-700 decoration-dotted'>
            {benefits?.link_text}
          </Link>
        </div>
      </div>
    </section>
  )
}
