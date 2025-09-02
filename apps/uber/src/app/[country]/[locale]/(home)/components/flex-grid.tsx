import React from 'react';

interface FlexGridProps {
    children: React.ReactNode;
    gap?: number;
    className?: string;
    columnCount: number;
    smColumnCount?: number;
    mdColumnCount?: number;
    lgColumnCount?: number;
    xlColumnCount?: number;
}

const FlexGrid = ({
    children,
    gap = 16,
    className = '',
    columnCount = 12,
    smColumnCount = 12,
    mdColumnCount = 12,
    lgColumnCount = 12,
    xlColumnCount = 12
}: FlexGridProps) => {
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap' as const, // Fixed: was FlexWrap (wrong casing)
        gap: `${gap}px`,
    };

    // Always wrap children in FlexGridItem for consistent behavior
    return (
        <div className={`flex-grid ${className}`} style={containerStyle}>
            {React.Children.map(children, (child, index) => (
                <FlexGridItem
                    key={index}
                    columnCount={columnCount}
                    smColumnCount={smColumnCount}
                    mdColumnCount={mdColumnCount}
                    lgColumnCount={lgColumnCount}
                    xlColumnCount={xlColumnCount}
                >
                    {child}
                </FlexGridItem>
            ))}
        </div>
    );
};

interface FlexGridItemProps {
    children: React.ReactNode;
    span?: number;
    className?: string;
    columnCount?: number | null;
    smColumnCount?: number | null;
    mdColumnCount?: number | null;
    lgColumnCount?: number | null;
    xlColumnCount?: number | null;
}

// FlexGridItem component
const FlexGridItem = ({
    children,
    span = 1,
    className = '',
    columnCount = null,
    smColumnCount = null,
    mdColumnCount = null,
    lgColumnCount = null,
    xlColumnCount = null
}: FlexGridItemProps) => {
    const calculateFlexBasis = (cols: number, spanValue: number = span) => {
        return `${(spanValue / cols) * 100}%`;
    };

    // Calculate flex basis for each breakpoint
    const baseFlexBasis = columnCount ? calculateFlexBasis(columnCount) : `${(span / 12) * 100}%`;
    const smFlexBasis = smColumnCount ? calculateFlexBasis(smColumnCount) : baseFlexBasis;
    const mdFlexBasis = mdColumnCount ? calculateFlexBasis(mdColumnCount) : smFlexBasis;
    const lgFlexBasis = lgColumnCount ? calculateFlexBasis(lgColumnCount) : mdFlexBasis;
    const xlFlexBasis = xlColumnCount ? calculateFlexBasis(xlColumnCount) : lgFlexBasis;

    // Create CSS classes for responsive behavior
    const responsiveClasses = [
        `flex-basis-[${baseFlexBasis}]`,
        smColumnCount && `sm:flex-basis-[${smFlexBasis}]`,
        mdColumnCount && `md:flex-basis-[${mdFlexBasis}]`,
        lgColumnCount && `lg:flex-basis-[${lgFlexBasis}]`,
        xlColumnCount && `xl:flex-basis-[${xlFlexBasis}]`
    ].filter(Boolean).join(' ');

    const itemStyle = {
        flex: `0 0 ${baseFlexBasis}`,
        minWidth: 0,
        boxSizing: 'border-box' as const
    };

    return (
        <div 
            className={`flex-grid-item ${responsiveClasses} ${className}`} 
            style={itemStyle}
        >
            {children}
        </div>
    );
};

export { FlexGrid, FlexGridItem };