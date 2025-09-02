import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { Label } from "@radix-ui/react-label";
import { StringifyOptions } from "node:querystring";

type TreeNodeId = number | string;

type TreeNodeData<T = any> = {
    id?: TreeNodeId;
    children?: TreeNodeData[];
    isExpanded?: boolean;
    info?: T;
    label: ((node: TreeNodeData) => React.ReactNode) | string;
    depth: number;
};

type TreeLabelOverrides = {
    CollapseIcon?: React.ReactNode;
    ExpandIcon?: React.ReactNode;
};

type TreeLabelProps = {
    hasChildren: boolean;
    isExpanded?: boolean;
    isSelected?: boolean;
    label: ((node: TreeNodeData) => React.ReactNode) | string;
    overrides?: TreeLabelOverrides;
    node: TreeNodeData;
    className?: string
};

type TreeNodeProps = {
    node: TreeNodeData;
    selectedNodeId?: TreeNodeId;
    renderAll?: boolean;
    onSelect?: (nodeId: TreeNodeId) => void;
    getId?: (node: TreeNodeData) => TreeNodeId;
    overrides?: TreeViewOverRides;
};

type TreeViewOverRides = {
    style?: {
        rootTreeView?: string;
        treeNode?: string;
        treelabel?: string
    };
    Treelabel: {
        component: (node: TreeLabelProps) => React.ReactNode
    }
};

type TreeViewProps = {
    data: TreeNodeData[];
    renderAll?: boolean;
    getId?: (node: TreeNodeData) => TreeNodeId;
    selectedNodeId?: TreeNodeId;
    onSelect?: (nodeId: TreeNodeId) => void;
    overrides?: TreeViewOverRides;
};

const TreeLabel: React.FC<TreeLabelProps> = ({
    hasChildren,
    isExpanded = false,
    isSelected = false,
    label,
    overrides,
    node,
    className
}) => {
    const expandIcon = overrides?.ExpandIcon || <ChevronRight className="w-8 h-8" />;
    const collapseIcon = overrides?.CollapseIcon || <ChevronDown className="w-8 h-8" />;

    const renderLabel = () => (typeof label === "function" ? label(node) : label);

    return (
        <div
            style={{ paddingLeft: `${node.depth * 20}px` }}
            className={cn(
                "w-full flex justify-between gap-1 mt-6 rounded cursor-pointer transition-colors",
                isSelected ? "bg-blue-100 text-blue-900" : "hover:bg-gray-100",
                className
            )}
        >
            {renderLabel()}
            {hasChildren && (
                <div className="w-6 h-6 flex items-center justify-center">
                    {isExpanded ? collapseIcon : expandIcon}
                </div>
            )}
        </div>
    );
};

const TreeNode: React.FC<TreeNodeProps> = ({
    node,
    selectedNodeId,
    renderAll = false,
    onSelect,
    getId,
    overrides,
}) => {
    const nodeId = getId ? getId(node) : node.id || "";
    const hasChildren = !!(node.children && node.children.length);
    const isSelected = selectedNodeId === nodeId;

    const [isExpanded, setIsExpanded] = useState(node.isExpanded || false);

    const handleNodeSelect = () => {
        if (onSelect && nodeId) onSelect(nodeId);
    };

    const CustomTreeLabel = overrides?.Treelabel.component;
    const labelProps: TreeLabelProps = {
        hasChildren,
        isExpanded,
        isSelected,
        label: node.label,
        node,
        className: overrides?.style?.treelabel,
    };

    const renderTreeLabel = () => CustomTreeLabel ? <CustomTreeLabel {...labelProps} /> : <TreeLabel {...labelProps} />;

    const shouldShowChildren = renderAll || isExpanded;

    if (!hasChildren) {
        // Leaf node
        return (
            <div className="w-full" onClick={handleNodeSelect}>
                {renderTreeLabel()}
            </div>
        );
    }

    return (
        <div className="w-full">
            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
                <CollapsibleTrigger className={cn('w-full', overrides?.style?.treeNode)} onClick={handleNodeSelect}>
                    {renderTreeLabel()}
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {shouldShowChildren &&
                        node.children?.map((childNode, index) => (
                            <TreeNode
                                key={getId ? getId(childNode) : childNode.id || index}
                                node={childNode}
                                selectedNodeId={selectedNodeId}
                                renderAll={renderAll}
                                onSelect={onSelect}
                                getId={getId}
                                overrides={overrides}
                            />
                        ))}
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
};

const TreeView: React.FC<TreeViewProps> = ({
    data,
    getId,
    onSelect,
    overrides,
    renderAll,
    selectedNodeId,
}) => {
    const rootTreeViewClassName = overrides?.style?.rootTreeView;

    return (
        <div className={cn("w-full  bg-white ", rootTreeViewClassName)} >
            {data.map((node, index) => (
                <TreeNode
                    node={node}
                    key={getId ? getId(node) : node.id || index}
                    getId={getId}
                    onSelect={onSelect}
                    renderAll={renderAll}
                    overrides={overrides}
                    selectedNodeId={selectedNodeId}
                />
            ))}
        </div>
    );
};

export type { TreeNodeProps, TreeNodeData, TreeViewProps, TreeLabelProps };

export { TreeView, TreeLabel };
