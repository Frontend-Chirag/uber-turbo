import React from 'react';
import NextLink from 'next/link';
import { cn } from '../../lib/utils';

type BaseLinkProps = React.ComponentPropsWithoutRef<typeof NextLink>

type LinkProps = BaseLinkProps & {
    animate?: boolean;
    animateColor?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({
    children,
    href,
    className,
    animate,
    animateColor,
    ...props
}, ref) => {
    return (
        <NextLink
            ref={ref}
            href={href}
            className={cn(
                "relative text-black w-fit py-0.5 transition-colors duration-200 text-md font-uber-regular leading-relaxed block",
                className,
                animate && "before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[1px] before:w-0 before:bg-[var(--animate-color)] before:transition-all before:duration-300 hover:before:w-full"
            )}
            style={animate ? { '--animate-color': animateColor } as React.CSSProperties : undefined}

            {...props}
        >
            {children}

        </NextLink>
    )
});
