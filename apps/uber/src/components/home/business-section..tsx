"use client";

import React from 'react'
import Image from 'next/image';

import { useTranslation } from '@repo/internationalization/localProvider';
import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import { Button } from '@repo/design-system/components/ui/button';
import { Heading } from '@repo/design-system/components/ui/heading-level';
import { Link } from '@repo/design-system/components/ui/Link';
import ub4Square from "@repo/assets/images/u4b-square.png";


export const BusinessSection = () => {

    const { dictionary } = useTranslation('(home)');
    const section = dictionary.section_5;

    return (
        <section className="flex  paddingX paddingY">
            <div className='w-full  flex flex-col-reverse xl:flex-row mt-4 gap-x-8 '>
            <div className='flex-1 flex flex-col mt-8 xl:mt-0'>
                    <AspectRatio ratio={12 / 12}>
                        <Image
                            src={ub4Square}
                            alt="ub4Square"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-contain"
                            priority
                        />
                    </AspectRatio>
                </div>

                <div className='flex flex-col flex-1 justify-center items-start xl:items-end  '>
                    <div className='max-w-[458px] flex flex-col gap-6'>
                        <Heading>
                            {section?.title}
                        </Heading>
                        <p className='flex basis-0 flex-wrap text-[17px] font-uber-medium  leading-6 text-neutral-800'>{section?.description}</p>
                        <div className='flex gap-6 items-center'>
                            <Button className='p-6 text-[16px] font-uber-medium'>
                                {section?.button_text}
                            </Button>
                            <Link
                                href='/'
                                animate
                                animateColor='black'
                                className='border-b border-b-neutral-300 font-uber-medium '
                            >
                                {section?.link_text}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
