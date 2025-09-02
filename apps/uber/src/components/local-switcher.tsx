"use client";

import { FaTimes, Globe } from '@repo/design-system';
import { Button } from '@repo/design-system/components/ui/button';
import { Heading, HeadingLevel } from '@repo/design-system/components/ui/heading-level';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@repo/design-system/components/ui/sheet';
import { cn } from '@repo/design-system/lib/utils';
import { useTranslation } from '@repo/internationalization/localProvider';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface LocaleSwitcherProps {
  locale: string;
  country: string;
  className?: string;
}

export const LocaleSwitcher = ({ locale, country, className }: LocaleSwitcherProps) => {
  const { availableLocales } = useTranslation('(home)');
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitchLocale = async (newLocale: string) => {
    try {
      const segments = pathname.split('/');

      if (segments.length >= 3) {
        segments[2] = newLocale;
        const newPath = segments.join('/');

        router.push(newPath);
      }
    } catch (error) {
      console.error('Failed to change locale:', error);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn('rounded-full bg-transparent hover:bg-neutral-800', className)}>
          <Globe className="size-4" />
          {locale.toLocaleUpperCase()}{locale !== 'en' && `-${country.toLocaleUpperCase()}`}
        </Button>
      </SheetTrigger>

      <SheetContent side='top' className='top-[70px] h-[calc(100vh-70px)] flex px-24'>
        <SheetClose className="p-4 bg-transparent hover:bg-neutral-100 rounded-full data-[state=open]:bg-secondary absolute top-6 right-28 opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:outline-hidden disabled:pointer-events-none">
          <FaTimes className="size-8" />
          <span className="sr-only">Close</span>
        </SheetClose>

        <SheetHeader className='mt-28'>
          <SheetTitle>
            <HeadingLevel>
              <Heading className='text-black '>
                Select your preferred language
              </Heading>
            </HeadingLevel>
          </SheetTitle>
        </SheetHeader>

        <div className='grid grid-cols-4 h-full w-full  gap-4 bg-white mx-auto'>
          {availableLocales?.map((loc) => (
            <Button
              key={loc.code}
              variant={'secondary'}
              onClick={() => handleSwitchLocale(loc.code)}
              className={cn(
                "flex justify-start items-center h-14 bg-white hover:bg-neutral-100", // Fixed typo: hover:bg:neutral-200 -> hover:bg-neutral-200
                locale === loc.code && 'ring-2 ring-black'
              )}
            >
              {loc.name}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};