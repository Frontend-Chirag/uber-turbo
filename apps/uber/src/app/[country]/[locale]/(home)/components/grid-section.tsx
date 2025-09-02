"use client";

import Image from 'next/image'
import React from 'react'

import Signup_roundededge from "@repo/assets/svg/Signup-roundededge-1.svg";
import earner_illustra from "@repo/assets/images/earner-illustra.png";
import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import { useTranslation } from '@repo/internationalization/localProvider';
import { Heading } from '@repo/design-system/components/ui/heading-level';
import { Button } from '@repo/design-system/components/ui/button';
import { Link } from '@repo/design-system/components/ui/Link';


export const GridSection = () => {

    const { dictionary } = useTranslation('(home)');
    const section = dictionary?.section_2

    return (
        <section className='flex px-6 py-12 md:px-12 lg:px-24 '>
            <div className=' w-full grid grid-cols-1 items-center gap-10 lg:grid-cols-2 border '>
                <div className='flex flex-col max-w-md gap-y-4  '>
                    <Heading className=' '>
                        {section?.title}
                    </Heading>
                    <p>{section?.description}</p>
                    <div className='flex items-center gap-6 '>
                        <Button className=' font-uber-medium text-[16px] p-6 rounded-md'>
                            {section?.button_text}
                        </Button>
                        <Link href={''}
                        className='border-b border-b-neutral-300'
                            animate
                        >
                            {section?.link_text}
                        </Link>
                    </div>
                </div>
                <div className="border">
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




