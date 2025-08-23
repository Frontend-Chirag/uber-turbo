import React, { useState } from 'react'
import { Button } from './button';
import { Star } from 'lucide-react';
import { cn } from '../../lib/utils';

type data = {
    value: number;
}

interface StarRatingProps {
    items: number;
    onChange: (data: data) => void;
    value: number;
    size?: number;
    readOnly?: boolean;
}

export const StarRating = ({ items, onChange, value, size, readOnly }: StarRatingProps) => {

    const [hoverValue, setHoverValue] = useState<number | null>(null);


    const onMouseOver = (i: number) => {
        setHoverValue(i)
    }

    const onMouseLeave = () => {
        setHoverValue(null);
    }



    return (
        <div onMouseLeave={onMouseLeave} role="radiogroup" className='flex gap-1 border'>
            {Array.from({ length: items }, (_, i) => {

                const index = i + 1;
                const isChecked = index === value;
                const isActive = hoverValue ? index <= hoverValue : index <= value;

                return (
                    <Button
                        key={i}
                        role='radio'
                        aria-checked={isChecked}
                        aria-posinset={index}
                        aria-setsize={items}
                        aria-disabled={readOnly}
                        tabIndex={isChecked ? 0 : -1}
                        type='button'
                        disabled={readOnly}
                        onClick={() => !readOnly && onChange({ value: index })}
                        // size={'icon'}
                        onMouseOver={() => onMouseOver(index)}
                        className='cursor-pointer focus:outline-none p-0 hover:bg-transparent bg-transparent text-black'
                        asChild
                    >
                        <Star
                            size={size}
                            key={i}
                            className={cn("bg-black", isActive && "fill-black ")}
                        />
                    </Button>
                )
            })}
        </div>
    )
}
