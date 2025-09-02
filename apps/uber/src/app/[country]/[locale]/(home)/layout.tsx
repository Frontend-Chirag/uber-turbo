import React from 'react'
import { LocaleProvider } from '@repo/internationalization/localProvider';

import { Navbar } from '../../../../components/home/nav-bar';
import { Footer } from '../../../../components/home/footer';
import { HeadingLevel } from '@repo/design-system/components/ui/heading-level';

interface HomeLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
        country: string;
    }>;
}

export default async function HomeLayout({ children, params }: HomeLayoutProps) {

    const { country, locale } = await params;

    return (
        <div className='flex flex-col relative'>
            <LocaleProvider country={country} locale={locale} initialPage="(home)" domain="uber">
                <HeadingLevel>
                    <Navbar country={country} locale={locale} />

                    <div className='flex-1 pt-24 lg:pt-16'>
                        <div className='w-full h-auto'>
                            {children}
                        </div>
                    </div>

                    <Footer country={country} locale={locale} />
                </HeadingLevel>
            </LocaleProvider>
        </div>
    )
}
