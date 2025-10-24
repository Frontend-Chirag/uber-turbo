import { cn } from '../../lib/utils';
import React from 'react'

export enum FLOATING_NEEDLE_SIZE {
  none = "h-0",
  short = "h-2",
  medium = "h-4",
  tall = "h-6"
}

export enum FLOATING_SIZE {
  "x-small-square" = "w-4 h-4 flex justify-center items-center before:content-[''] before:bg-white before:w-1 before:h-1 ",
  "x-small-circle" = "w-4 h-4 flex justify-center items-center before:content-[''] before:bg-white before:w-1 before:h-1 before:rounded-full rounded-full ",
  "small" = "w-6 h-6 rounded-full",
  "medium" = "w-6 h-9 rounded-full",
  "large" = "w-6 h-12 rounded-full"
}

export enum FLOATING_KIND {
  "default" = "bg-black",
  "accent" = "bg-blue-500",
  "negative" = "bg-red-500"
}

interface FloatingMarkerProps {
  needle?: FLOATING_NEEDLE_SIZE;
  size?: FLOATING_SIZE
  dragging?: boolean;
  kind?: FLOATING_KIND;
  markerVisible?: boolean;
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
  label?: string;
  secondarylabel?: string;
  anchorPosition?: {
    position: FloatingRouteMarkerAnchorPositions,
    offset: number
  }
}


export const FloatingMarker = ({
  dragging,
  needle,
  size = FLOATING_SIZE.small,
  kind = FLOATING_KIND.default,
  markerVisible = true,
  label,
  secondarylabel,
  startEnhancer,
  endEnhancer,
  anchorPosition = {
    position: FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.bottomCenter,
    offset: 0
  }
}: FloatingMarkerProps) => {
  return (
    <div className='relative'>
      {label && (
        <div className='absolute bg-white p-2 flex gap-x-1'
          style={{ transform: calculateFloatingRouteMarkerOffsets(anchorPosition.position, anchorPosition.offset) }} // 👈 anchor at bottom center
        >
          {startEnhancer}
          <div className='flex flex-col'>
            <p className='text-[14px] font-uber-semibold text-black text-nowrap'>
              {label}
            </p>
            <p className='text-[14px] font-uber-semibold text-black text-nowrap'>
              {secondarylabel}
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center ">
        <div className="relative flex flex-col items-center">
          <div className={cn(size, kind, "transition-all duration-300 ease-in-out")} />
          <div className={cn("w-1", needle, kind, "transition-all duration-300 ease-in-out")} />
          <div className={cn(dragging ? "h-2" : "h-0", "transition-all duration-300 ease-in-out")} />
          {dragging && (
            <div className="w-1.5 h-1 rounded-full shadow-[0_0_6px_rgba(0,0,0,0.7)] bg-black transition-all duration-300 ease-in-out" />
          )}
        </div>
      </div>
    </div>
  );
};

export const FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS = Object.freeze({
  topLeft: 'top-left',
  topCenter: 'top-center',
  topRight: 'top-right',
  rightCenter: 'right-center',
  bottomRight: 'bottom-right',
  bottomCenter: 'bottom-center',
  bottomLeft: 'bottom-left',
  leftCenter: 'left-center',
} as const);

export type FloatingRouteMarkerAnchorPositions = (typeof FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS)[keyof typeof FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS];


const arrowSize = 8;
const FLOATING_ROUTE_MARKER_OFFSETS = Object.freeze({
  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topLeft]: (offset: number) =>
    `translate(calc(${arrowSize}px + ${offset}px), calc(${arrowSize}px + ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topRight]: (offset: number) =>
    `translate(calc(-100% - ${arrowSize}px - ${offset}px), calc(${arrowSize}px + ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.bottomLeft]: (offset: number) =>
    `translate(calc(${arrowSize}px + ${offset}px), calc(-100% - ${arrowSize}px - ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.bottomRight]: (offset: number) =>
    `translate(calc(-100% - ${arrowSize}px - ${offset}px), calc(-100% - ${arrowSize}px - ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topCenter]: (offset: number) =>
    `translate(-50%, calc(${arrowSize}px + ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.bottomCenter]: (offset: number) =>
    `translate(-50%, calc(-100% - ${arrowSize}px - ${offset}px))`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.leftCenter]: (offset: number) =>
    `translate(calc(${arrowSize}px + ${offset}px), -50% )`,

  [FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.rightCenter]: (offset: number) =>
    `translate(calc(-100% - ${arrowSize}px - ${offset}px), -50%)`,
} as const);

export function calculateFloatingRouteMarkerOffsets(
  anchorPosition: FloatingRouteMarkerAnchorPositions,
  offset = 0
) {
  return FLOATING_ROUTE_MARKER_OFFSETS[anchorPosition](offset);
}