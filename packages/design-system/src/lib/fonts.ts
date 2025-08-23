// // packages/design-system/src/utils/fonts.ts
// import { clsx, type ClassValue } from "clsx";

// // Font utility classes
// export const fontVariants = {
//   // Uber Move font variants
//   display: "font-uber-move font-bold text-4xl md:text-6xl",
//   heading: "font-uber-move font-medium text-2xl md:text-3xl",
//   subheading: "font-uber-move font-medium text-lg md:text-xl",
//   body: "font-uber-move font-normal text-base",
//   caption: "font-uber-move font-light text-sm",
  
//   // Semantic variants
//   hero: "font-uber-move font-bold text-5xl md:text-7xl tracking-tight",
//   title: "font-uber-move font-medium text-3xl md:text-4xl",
//   subtitle: "font-uber-move font-normal text-xl md:text-2xl text-muted-foreground",
//   label: "font-uber-move font-medium text-sm",
//   small: "font-uber-move font-normal text-xs",
// } as const;

// export type FontVariant = keyof typeof fontVariants;

// // Utility function to combine font classes
// export function getFontClass(variant: FontVariant, className?: string): string {
//   return clsx(fontVariants[variant], className);
// }