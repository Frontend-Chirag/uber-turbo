"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { FaTimes } from "react-icons/fa"
import { TiDelete } from "react-icons/ti"
import { Label } from "./label"
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "font-uber-regular flex flex-1 gap-2 rounded-md border-2 bg-neutral-100 relative transition-all duration-200 ease-in-out group",
  {
    variants: {
      variant: {
        mini: "text-sm py-1 px-2",
        compact: "text-sm px-1.5 py-2.5",
        default: "text-[16px] px-2.5 py-2.5",
        large: "text-lg p-3.5",
      },
    },
    defaultVariants: { variant: "default" },
  }
)


export interface Inputoverrides {
  clearable?: boolean
  startEnhancer?: React.ReactNode
  endEnhancer?: React.ReactNode
  error?: boolean
  positive?: boolean
  label?: string
  animatedLabel?: boolean
  // Custom class overrides
  rootClass?: string
  wrapperClass?: string
  inputClass?: string
  onClear?: () => void;
};


export interface InputProps extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {
  overrides?: Inputoverrides;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const [internalValue, setInterValue] = React.useState(props.value ?? '')
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const isControlled = props.value !== undefined
  const val = isControlled ? props.value : internalValue;

  const combinedRef = React.useCallback((node: HTMLInputElement | null) => {
    inputRef.current = node
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
  }, [ref])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInterValue(e.target.value);
    props.onChange?.(e)
  }

  const handleClear = () => {
    props.onChange?.({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>)
    props.overrides?.onClear?.()
    inputRef.current?.focus()
  }

  const hasValue = !!val
  const showClear = props.overrides?.clearable && hasValue && isFocused


  return (
    <div className={cn("flex flex-1 flex-col gap-1 ", props.overrides?.rootClass)}>
      {props.overrides?.label && !props.overrides?.animatedLabel && <Label>{props.overrides?.label}</Label>}

      <div
        className={cn(
          inputVariants({ variant: props.variant }),
          {
            "border-red-400": props.overrides?.error,
            "border-green-400": props.overrides?.positive,
            "border-black bg-white": isFocused && !props.overrides?.error && !props.overrides?.positive,
            "border-transparent": !isFocused && !props.overrides?.error && !props.overrides?.positive,
          },
          props.className,
          props.overrides?.wrapperClass,
          ' cursor-text'
        )}
      >
        {props.overrides?.startEnhancer && (
          <div className="flex items-center pointer-events-none relative ">
            {props.overrides?.startEnhancer}
          </div>
        )}

        <div className="flex-1 relative">
          {props.overrides?.animatedLabel && (
            <Label
              className={cn(
                "absolute transition-all duration-200 ease-out font-light pointer-events-none",
                isFocused || hasValue
                  ? "left-3 -top-full text-sm bg-white px-1 rounded"
                  : "left-3 top-1/2 -translate-y-1/2 text-base text-neutral-500",
                props.overrides?.error && (isFocused || hasValue) && "text-red-500",
                props.overrides?.positive && (isFocused || hasValue) && "text-green-500"
              )}
            >
              {props.overrides?.label}
            </Label>
          )}
          <input
            ref={combinedRef}
            value={val}
            {...props}
            onFocus={(e) => {
              console.log("Input FOCUSED")
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            
            onChange={handleChange}
            placeholder={props.overrides?.animatedLabel ? "" : props.placeholder}
            className={cn(
              "bg-transparent border-none outline-none text-black placeholder:text-[16px] placeholder:text-neutral-400 w-full",
              props.overrides?.inputClass
            )}
          />
        </div>

        {(showClear || props.overrides?.endEnhancer) && (
          <div className="flex items-center gap-1">
            {showClear && (
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault(); // prevent blur
                  handleClear();
                }}
              >
                <TiDelete className="size-4" />
              </button>
            )}
            {!showClear && props.overrides?.endEnhancer && (
              <div className="flex items-center pointer-events-none">
                {props.overrides?.endEnhancer}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
});
