"use client";

import { cn } from '../../lib/utils';
import React, { createContext, useContext } from 'react'

const HeadingLevelContext = createContext(0);

interface HeadingLevelProps {
    children: React.ReactNode
};

export interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
    children: React.ReactNode;
}


function HeadingLevel({ children }: HeadingLevelProps) {

    const currentLevel = useContext(HeadingLevelContext);;
    const nextLevel = Math.min(currentLevel + 1, 6);

    return (
        <HeadingLevelContext.Provider value={nextLevel}>
            <div className='heading-level'>
                {children}
            </div>
        </HeadingLevelContext.Provider>
    )
};


function Heading({ children, className, level: styleLevel }: HeadingProps) {
    const contextLevel = useContext(HeadingLevelContext);

    // Error checking similar to Base Web
    if (contextLevel === 0) {
        throw new Error('Heading component must be a descendant of HeadingLevel component.');
    }

    if (contextLevel > 6) {
        throw new Error(`HeadingLevel cannot be nested ${contextLevel} times. The maximum is 6 levels.`);
    }

    if (typeof styleLevel !== 'undefined' && (styleLevel < 1 || styleLevel > 6)) {
        throw new Error(`level = ${styleLevel} is out of 1-6 range.`);
    }

    // effective level (what we render as)
    const level = (styleLevel ?? contextLevel) as 1 | 2 | 3 | 4 | 5 | 6;

    // Tell TS this string is a valid JSX intrinsic element
    const Tag = (`h${level}`) as keyof React.JSX.IntrinsicElements;

    const baseStyles = "font-uber-bold  text-black";
    const levelStyles: Record<number, string> = {
        1: "text-3xl ",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
        6: "text-base",
    };

    const sizeClass = levelStyles[level] ?? levelStyles[1];

    return (
        <Tag className={cn(baseStyles, sizeClass, className)}>
            {children}
            <span className="text-sm text-gray-500 ml-2 font-normal">
            </span>
        </Tag>
    );

}


export {
    Heading,
    HeadingLevel
}
