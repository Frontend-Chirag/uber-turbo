import { cn } from '../../lib/utils'
import { Loader2Icon } from 'lucide-react'
import React from 'react'


export const Loader = ({ className }: { className?: string }) => {
    return <Loader2Icon className={cn('w-[100px] h-[100px] text-blue-700 animate-spin flex mx-auto', className)} />
}
