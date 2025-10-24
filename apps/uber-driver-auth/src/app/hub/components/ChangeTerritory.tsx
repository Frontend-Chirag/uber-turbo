"use client";
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6"
import { ChevronDown, User2Icon } from 'lucide-react';

import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerHeader, DrawerFooter } from "@repo/design-system/components/ui/drawer";
import { Button } from '@repo/design-system/components/ui/button';
import { useRouter } from 'next/navigation';



export const ChangeTerritory = () => {

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const ChangeTerritory = () => {
    router.push('/step/id/territoryChange')
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <div className='flex flex-col justify-start items-start gap-y-1 relative font-roboto'>
          <p className='font-normal text-neutral-500 text-[12px]'>Signing up for</p>
          <span className='font-semibold text-[14px]'>Delhi NCR • Rides</span>
          <ChevronDown className='size-5 absolute right-8 top-1/2' />
        </div>
      </DrawerTrigger>
      <div>
        <DrawerContent className='max-w-2xl mx-auto rounded-t-2xl'>
          <DrawerHeader className='border-b-4 border-b-neutral-100'>
            <DrawerTitle className=' font-uber-medium text-center text-[20px]'>
              Change your signup choices
            </DrawerTitle>
          </DrawerHeader>
          <section className='flex flex-col px-4 pt-8 pb-4 relative'>
            <div className='w-fit p-1 flex bg-[#a6c5ff21]  text-blue-600 gap-1 items-center justify-center rounded-sm'>
              <FaUser className='size-3' />
              <span className='font-uber-medium text-[14px]'>Rides</span>
            </div>
            <div className='flex flex-col leading-4.5 mt-1'>
              <h1 className='text-[16px] font-uber-medium'>Delhi NCR</h1>
              <p className='text-[16px] font-uber-regular text-neutral-800'>Can earn in: All of Delhi</p>
            </div>
            <Button
              variant='secondary'
              onClick={ChangeTerritory}
              className='absolute right-4 top-1/2 text-[14px] text-black px-3 py-2 font-uber-medium rounded-full'
            >
              Change
            </Button>
          </section>
          <DrawerFooter>
            <Button
              variant='secondary'
              onClick={() => setOpen(false)}
              className='text-[18px] text-black p-2 font-uber-medium'
            >
              OK
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </div>
    </Drawer>
  )
}
