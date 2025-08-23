"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { FaTimes } from "react-icons/fa"
import { TiDelete } from "react-icons/ti"
import { Label } from "./label"
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "flex gap-2 rounded-md border-2 bg-neutral-100 relative transition-all duration-200 ease-in-out group",
  {
    variants: {
      variant: {
        mini: "text-sm py-1 px-2",
        compact: "text-sm px-1.5 py-3.5",
        default: "text-base px-2.5 py-3.5",
        large: "text-lg p-3.5",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

interface InputProps
  extends React.ComponentProps<"input">,
  VariantProps<typeof inputVariants> {
  clearable?: boolean
  startEnhancer?: React.ReactNode
  endEnhancer?: React.ReactNode
  error?: boolean
  positive?: boolean
  label?: string
  animatedLabel?: boolean

  onClear?: () => void;
  // Custom class overrides
  rootClass?: string
  wrapperClass?: string
  inputClass?: string
}

export function Input({
  className,
  rootClass,
  wrapperClass,
  inputClass,
  type,
  clearable,
  onClear,
  startEnhancer,
  endEnhancer,
  value,
  onChange,
  error,
  positive,
  variant,
  placeholder,
  label,
  animatedLabel,
  ref,
  ...props
}: InputProps) {
  const [internalValue, setInternalValue] = React.useState(value ?? "")
  const [isFocused, setIsFocused] = React.useState(false)
  const isControlled = value !== undefined
  const val = isControlled ? value : internalValue
  const inputRef = React.useRef<HTMLInputElement | null>(null)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e)
  }

  const handleClear = () => {
    if (!isControlled) setInternalValue("")
    else
      onChange?.({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>)
    onClear?.()
    inputRef.current?.focus()
  }

  const hasValue = !!val
  const showClear = clearable && hasValue

  return (
    <div className={cn("flex flex-col gap-1", rootClass)}>
      {label && !animatedLabel && <Label>{label}</Label>}

      <div
        className={cn(
          inputVariants({ variant }),
          {
            "border-red-400": error,
            "border-green-400": positive,
            "border-black bg-white": isFocused && !error && !positive,
            "border-white": !isFocused && !error && !positive,
          },
          className,
          wrapperClass
        )}
      >
        {startEnhancer && (
          <div className="flex items-center pointer-events-none">
            {startEnhancer}
          </div>
        )}

        <div className="flex-1 relative">
          {animatedLabel && (
            <Label
              className={cn(
                "absolute transition-all duration-200 ease-out font-light pointer-events-none",
                isFocused || hasValue
                  ? "left-3 -top-full text-sm bg-white px-1 rounded"
                  : "left-3 top-1/2 -translate-y-1/2 text-base text-neutral-500",
                error && (isFocused || hasValue) && "text-red-500",
                positive && (isFocused || hasValue) && "text-green-500"
              )}
            >
              {label}
            </Label>
          )}
          <input
            ref={inputRef}
            type={type}
            value={val}
            onChange={handleChange}
            onFocus={(e) => {
              setIsFocused(true)
            }}
            onBlur={(e) => {
              setIsFocused(false)
            }}
            placeholder={animatedLabel ? "" : placeholder}
            className={cn(
              "bg-transparent border-none outline-none text-black placeholder:text-sm placeholder:text-neutral-400 w-full",
              inputClass
            )}
            {...props}
          />
        </div>

        {(showClear || endEnhancer) && (
          <div className="flex items-center gap-1">
            {showClear && (
              <button
                type="button"
                onClick={handleClear}
                aria-label="Clear input"
              >
                <TiDelete className="size-4" />
              </button>
            )}
            {!showClear && endEnhancer && (
              <div className="flex items-center pointer-events-none">
                {endEnhancer}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
