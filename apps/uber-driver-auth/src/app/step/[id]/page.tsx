import React from 'react'
import { StepPage } from './components/step-page';
import { Navbar } from '@/components/nav-bar';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@repo/design-system/components/ui/button';

interface StepProps {
    params: Promise<{
        id: string
    }>
}

export default async function Step({ params }: StepProps) {
    const { id } = await params;
    return (
        <div className='w-full h-screen flex items-center justify-center bg-neutral-200 '>
            <div className='h-[90%] min-w-[550px] bg-white  border border-neutral-300  '>
                <div className='relative'>
                    <Navbar className='absolute' />
                    <Button className=' w-10 h-10 absolute left-3 top-2 z-40 rounded-full'>
                        <ArrowLeft className='size-6'/>
                    </Button>
                </div>
                <StepPage data={[]} />
            </div>
        </div>
    )
}
