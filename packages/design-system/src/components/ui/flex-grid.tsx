import React, { useState, useEffect, ReactNode, createContext, useContext } from 'react';

// Type definitions
type SpacingScale =
    | 'scale0'
    | 'scale100'
    | 'scale200'
    | 'scale300'
    | 'scale400'
    | 'scale500'
    | 'scale600'
    | 'scale700'
    | 'scale800'
    | 'scale900'
    | 'scale1000';

type BreakpointKey = 'small' | 'medium' | 'large';

type ResponsiveSpan = {
    small?: number;
    medium?: number;
    large?: number;
};

interface Breakpoints {
    small: number;
    medium: number;
    large: number;
}

interface FlexGridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    flexGridColumnCount?: number;
    flexGridColumnGap?: SpacingScale | string;
    flexGridRowGap?: SpacingScale | string
}

interface ResponsiveFlexGridItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    children: React.ReactNode;
    span: ResponsiveSpan;
};

const BREAKPOINTS: Breakpoints = {
    small: 0,
    medium: 672,
    large: 1056
};

const SPACING_MAP: Record<SpacingScale, string> = {
    'scale0': '0px',
    'scale100': '2px',
    'scale200': '4px',
    'scale300': '8px',
    'scale400': '12px',
    'scale500': '16px',
    'scale600': '20px',
    'scale700': '24px',
    'scale800': '32px',
    'scale900': '40px',
    'scale1000': '48px'
};

const FlexGridContext = createContext<{ flexGridColumnCount: number }>({ flexGridColumnCount: 12 });

// Flex Grid component

const FlexGrid: React.FC<FlexGridProps> = ({
    children,
    flexGridColumnCount = 12,
    flexGridColumnGap = 'scale800',
    flexGridRowGap = 'scale800',
    ...props
}) => {

    const getSpacing = (scale: SpacingScale | string): string => {
        return SPACING_MAP[scale as SpacingScale] || scale;
    }

    const contextValue = {
        flexGridColumnCount
    }

    return (
        <FlexGridContext.Provider value={contextValue}>
            <div
                className='flex flex-wrap'
                style={{
                    marginLeft: `-${getSpacing(flexGridColumnGap)}`,
                    marginTop: `-${getSpacing(flexGridRowGap)}`,
                    width: `calc(100% + ${getSpacing(flexGridColumnGap)})`
                }}
                {...props}
            >
                {children}
            </div>
        </FlexGridContext.Provider>
    )
}

const ResponsiveFlexGridItem: React.FC<ResponsiveFlexGridItemProps> = ({
    children,
    span,
    ...props
}) => {
    const { flexGridColumnCount } = useContext(FlexGridContext);
    const [currentSpan, setCurrentSpan] = useState<number>(span.small || flexGridColumnCount);

    useEffect(() => {
        const updateSpan = (): void => {
            const width: number = window.innerWidth;
            if (width >= BREAKPOINTS.large && span.large !== undefined) {
                setCurrentSpan(span.large);
            } else if (width >= BREAKPOINTS.medium && span.medium !== undefined) {
                setCurrentSpan(span.medium);
            } else {
                setCurrentSpan(span.small || flexGridColumnCount)
            }
        };

        updateSpan();
        window.addEventListener('resize', updateSpan);
        return () => {
            window.removeEventListener('resize', updateSpan);
        }
    }, [span, flexGridColumnCount])


    const getColumnWidth = (spanValue: number): number => (spanValue / flexGridColumnCount) * 100;


    return (
        <div
            className='box-border'
            style={{
                width: `${getColumnWidth(currentSpan)}%`,
                paddingLeft: '32px',
                paddingTop: '32px',
            }}
            {...props}
        >
            {children}
        </div>
    )
}

interface FlexGridItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    children: React.ReactNode;
    flexGridColumnSpan?: number;
    flexGridColumnStart?: number;
    flexGridColumnEnd?: number;
}

const FlexGridItem: React.FC<FlexGridItemProps> = ({
    children,
    flexGridColumnSpan = 1,
    flexGridColumnStart,
    flexGridColumnEnd,
    ...props
}) => {
    const getColumnWidth = (span: number, totalColumns: number = 12): number => {
        return (span / totalColumns) * 100;
    }

    const columnWidth: string = `${getColumnWidth(flexGridColumnSpan)}%`;


    return (
        <div
            className='box-border'
            style={{
                width: columnWidth,
            }}
            {...props}
        >
            {children}
        </div>
    )
}


const useBreakpoint = (): BreakpointKey => {
    const [breakpoint, setBreakpoint] = useState<BreakpointKey>('small');

    useEffect(() => {
        const updatedBreakpoint = (): void => {
            const width: number = window.innerWidth;
            if (width >= BREAKPOINTS.large) {
                setBreakpoint('large');
            } else if (width >= BREAKPOINTS.medium) {
                setBreakpoint('medium');
            } else {
                setBreakpoint('small');
            }
        };

        updatedBreakpoint();
        window.addEventListener('resize', updatedBreakpoint);
        return () => window.removeEventListener('resize', updatedBreakpoint);
    }, []);


    return breakpoint;
}


const getCurrentSpan = (span: ResponsiveSpan, breakpoint: BreakpointKey, flexGridColumnCount: number = 12): number => {
    switch (breakpoint) {
        case 'large':
            return span.large || span.medium || span.small || flexGridColumnCount;
        case 'medium':
            return span.medium || span.small || flexGridColumnCount;
        case 'small':
        default:
            return span.small || flexGridColumnCount;
    }
};


export type {
    SpacingScale,
    BreakpointKey,
    ResponsiveSpan,
    FlexGridProps,
    ResponsiveFlexGridItemProps,
    FlexGridItemProps
}

export {
    FlexGrid,
    FlexGridItem,
    ResponsiveFlexGridItem,
    useBreakpoint,
    getCurrentSpan,
    BREAKPOINTS,
    SPACING_MAP
};