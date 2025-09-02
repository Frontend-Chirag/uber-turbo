import React from 'react';
import Signup_roundededge from "@repo/assets/svg/Signup-roundededge-1.svg";
import Image from 'next/image';
import { Heading } from '@repo/design-system/components/ui/heading-level';
import { useTranslation } from '@repo/internationalization/localProvider';
import { Button } from '@repo/design-system/components/ui/button';
import { Link } from '@repo/design-system/components/ui/Link';
import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';

export const LoginSection = () => {
  const { dictionary } = useTranslation("(home)");
  const section = dictionary?.section_2;

  return (
    <section className="flex items-center   paddingX">
      <div className='w-full h-full flex flex-col xl:flex-row  '> {/* Changed from grid to flex */}
        <div className='flex-1 flex  items-center '> {/* flex-2 = 2/3 width */}
          <div className='flex w-full flex-col flex-wrap gap-4 xl:max-w-md '>
            <Heading className=''>
              {section?.title}
            </Heading>
            <p className='text-md font-uber-medium  leading-6 text-neutral-800'>{section?.description}</p>
            <div className='flex flex-wrap items-center w-full gap-5'>
              <Button className='p-6 text-[16px] font-uber-medium'>
                {section?.button_text}
              </Button>
              <Link
                href={"/"}
                animate
                animateColor='black'
                className='border-b border-b-neutral-300 '
              >
                {section?.link_text}
              </Link>
            </div>
          </div>
        </div>
        <div className='flex-1 h-fit mt-8 xl:mt-0 '> 
          <AspectRatio ratio={16 / 12}>
            <Image
              src={Signup_roundededge} // PNG example for raster artwork
              alt="Signup_roundededge"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
              priority
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}
