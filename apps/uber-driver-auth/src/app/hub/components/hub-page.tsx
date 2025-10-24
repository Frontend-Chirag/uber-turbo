
import React from 'react'
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Heading, HeadingLevel } from '@repo/design-system/components/ui/heading-level';

import { ChangeTerritory } from './ChangeTerritory';






// TODO:// FETCH HUB DATA DYNAMICALLY BASED ON TERRITORY
interface HubPageProps {
  hubdata: any;
  territory: string;
  username: string
}


export const HubPage = () => {

  const data: {
    label: string;
    label2?: string;
    stepId: string;
  }[] = [
      {
        label: 'Aadhaar Card',
        label2: 'Recommend next step',
        stepId: 'aadhaar'
      },
      {
        label: 'Driving License - Front',
        stepId: 'license'
      },

      {
        label: 'Profile Picture',
        stepId: 'picture'
      },
      {
        label: 'Registration Certificate (RC)',
        stepId: 'registration'
      },
      {
        label: 'Vehicle Insurance',
        stepId: 'insurance'
      }
    ];

  return (
    <div className='flex flex-col py-8 gap-4'>
      <ChangeTerritory />
      <div className='flex flex-col gap-4'>
        <HeadingLevel>
          <Heading level={1} className='text-[36px]'>
            Welcome, chirag
          </Heading>
        </HeadingLevel>
        <p className='text-[16px] font-roboto font-normal'>
          Here's what you need to do to set up your account.
        </p>
      </div>
      <div className='flex flex-col mt-4 px-4 font-roboto'>
        {data.map((item, index) => (
          <Link
            key={item.stepId}
            href={`/step/${item.stepId}`}
            className='flex justify-between relative items-center py-5.5 border-b border-b-neutral-200'
          >
            <div className='flex flex-col leading-[]'>
              <p className='text-[16px]  font-semibold '>
                {item.label}
              </p>
              {item.label2 && (
                <span className='text-[14px] font-normal text-blue-500'>{item.label2}</span>
              )}
            </div>
            <ChevronRight className='size-4 text-neutral-400 absolute right-4 top-1/2 ' />
          </Link>
        ))}
      </div>
    </div>
  )
}
