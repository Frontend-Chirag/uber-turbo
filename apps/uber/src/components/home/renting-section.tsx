import React from 'react';
import { useTranslation } from '@repo/internationalization/localProvider';
import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import { Button } from '@repo/design-system/components/ui/button';
import { Heading } from '@repo/design-system/components/ui/heading-level';
import { Link } from '@repo/design-system/components/ui/Link';
import fleetmanagement from "@repo/assets/images/fleet-management.jpg";
import Image from 'next/image';


export const RentingSection = () => {

    const { dictionary } = useTranslation('(home)');
    const section = dictionary.section_6;

    return (
        <section className="flex  paddingX paddingY">
            <div className='w-full  flex flex-col xl:flex-row mt-4 gap-x-8 '>
                <div className='flex-1 flex flex-col'>
                    <AspectRatio ratio={12 / 12}>
                        <Image
                            src={fleetmanagement}
                            alt="Earnerillustra"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-contain"
                            priority
                        />
                    </AspectRatio>
                </div>

                <div className='flex flex-col flex-1 justify-center item-start xl:items-end mt-8 xl:mt-0  '>
                    <div className='max-w-[458px] flex flex-col gap-6'>
                        <Heading>
                            {section?.title}
                        </Heading>
                        <p className='flex basis-0 flex-wrap text-[17px] font-uber-medium  leading-6 text-neutral-800'>{section?.description}</p>
                        <Button className='p-6 text-[16px] font-uber-medium w-32'>
                            {section?.button_text}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
