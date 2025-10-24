import { Loader } from '@repo/design-system/components/ui/loader';

export default function Loading() {
    return (
        <div className='flex-1 flex justify-center items-center h-full text-black'>
            <Loader className='size-6' />
        </div>
    )
}
