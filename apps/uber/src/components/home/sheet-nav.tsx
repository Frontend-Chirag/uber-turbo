"use client";

import React, { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';

import { SheetTrigger, Sheet, SheetContent, SheetTitle } from '@repo/design-system/components/ui/sheet';
import { Button } from '@repo/design-system/components/ui/button';
import { XIcon } from "lucide-react";
import { TbMenu } from "react-icons/tb"
import { HomeConfig } from '@repo/internationalization/types';
import { TreeLabel, TreeLabelProps, TreeNodeData, TreeView } from '@repo/design-system/components/ui/tree-view';
import { Heading, HeadingLevel, HeadingProps } from '@repo/design-system/components/ui/heading-level';
import { useTranslation } from '@repo/internationalization/localProvider';


interface NavigationLink {
    id: string;
    title: string;
    sublists?: NavigationLink[];
    depth?: number;
}

interface SheetNavProps {
    links: HomeConfig['header']['navigation']
}

interface TreeNodeInfo {
    href: string;
    depth: number;
}

type TreeNodeDataWithInfo = TreeNodeData<TreeNodeInfo>;


// Memoized component for better performance
const HeadingComponent = React.memo<HeadingProps>(({ className, ...props }) => (
    <HeadingLevel>
        <Heading level={2} className={`hover:text-primary/80 ${className || ''}`} {...props} />
    </HeadingLevel>
));

const TextComponent = React.memo<{ children?: React.ReactNode; className?: string }>(({
    children,
    className = "text-neutral-600 font-uber-regular text-md"
}) => (
    <p className={className}>{children}</p>
));


const CustomLabel = React.memo<TreeNodeData>((node) => {
    const Component = node.depth === 1 ? HeadingComponent : TextComponent;
    const label = typeof node.label === 'string' ? node.label : null;

    const hasChildren = node.children && node.children.length > 0;

    if (hasChildren) {
        return <Component>{label}</Component>;
    }

    return (
        <Link href={`/${node.id}`} className="flex-1">
            <Component>{label}</Component>
        </Link>
    );
});

// Memoized tree label component
const CustomTreeLabel = React.memo<TreeLabelProps>((props) => (
    <TreeLabel
        {...props}
        label={(node) => <CustomLabel {...node} />}
    />
));

const transformLinksToTreeData = (
    links: NavigationLink[],
    currentDepth = 0
): TreeNodeDataWithInfo[] => {
    if (!Array.isArray(links)) return [];

    return links.map((link) => ({
        ...link,
        label: link.title,
        info: {
            href: `/${link.id}`,
            depth: link.depth || currentDepth,
        },
        depth: link.depth || currentDepth,
        children: link.sublists && link.sublists.length > 0
            ? transformLinksToTreeData(link.sublists, currentDepth + 1)
            : undefined,
    }));
};

export const SheetNav = () => {
    const { dictionary } = useTranslation('(home)');
    const links = dictionary?.header?.navigation;

    const [isOpen, setIsOpen] = useState(false);

    const treeData = useMemo(
        () => transformLinksToTreeData(links || []),
        [links]
    );

    // Memoized toggle handler
    const handleToggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    // Don't render if no links
    if (!links || links.length === 0) {
        return null;
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    onClick={handleToggle}
                    className="rounded-full p-2.5"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isOpen ? (
                        <XIcon className="size-4 text-white" />
                    ) : (
                        <TbMenu className="size-4 text-white" />
                    )}
                </Button>
            </SheetTrigger>

            <SheetContent
                side="top"
                className="top-[66px] h-[calc(100vh-70px)] flex gap-0 overflow-y-auto p-0"
            >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <TreeView
                    data={treeData}
                    overrides={{
                        style: {
                            rootTreeView: 'w-full p-0 ',
                            treelabel: "flex justify-between items-center  hover:bg-transparent "
                        },
                        Treelabel: {
                            component: CustomTreeLabel
                        }

                    }}
                />
                <Link href={`/${dictionary?.header.help_text}`} className='p-[20px] '>
                    <HeadingComponent>
                        {dictionary?.header.help_text}
                    </HeadingComponent>
                </Link>
            </SheetContent>
        </Sheet>
    )
}
