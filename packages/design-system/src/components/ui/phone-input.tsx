import React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger } from "./select"
import { COUNTRIES } from "../../lib/constants"
import { Country } from "../../lib/type"
import { Input } from "./input"
import { cn } from "../../lib/utils"

interface PhoneInputProps {
  text: string
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  country: Country
  onCountryChange: (country: Country) => void
  size?: "mini" | "compact" | "default" | "large"

  // Style overrides
  rootClass?: string
  selectTriggerClass?: string
  selectContentClass?: string
  selectItemClass?: string
  inputClass?: string
}

export function PhoneInput({
  text,
  onTextChange,
  country,
  onCountryChange,
  size = "default",
  rootClass,
  selectTriggerClass,
  selectContentClass,
  selectItemClass,
  inputClass,
}: PhoneInputProps) {
  const handleCountryChange = (value: string) => {
    const selected = COUNTRIES[value as Country["id"]]
    if (selected) onCountryChange(selected)
  }

  return (
    <div className={cn("flex gap-1", rootClass)}>
      {/* Country Select */}
      <Select onValueChange={handleCountryChange} defaultValue={country.id}>
        <SelectTrigger
          size={size}
          className={cn(
            "focus-within:ring-2 focus-within:ring-ring/50",
            selectTriggerClass
          )}
        >
          {country.id}
        </SelectTrigger>
        <SelectContent
          className={cn("border-none outline-none shadow-xl", selectContentClass)}
        >
          {Object.values(COUNTRIES).map((c) => (
            <SelectItem
              key={c.id}
              value={c.id}
              className={cn("flex items-center justify-between", selectItemClass)}
            >
              <span className="text-xl">
                {c.id}
                <span className="ml-2 text-sm">{c.label}</span>
              </span>
              <span>{c.dialCode}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Phone Number Input */}
      <Input
        startEnhancer={country.dialCode}
        variant={size}
        animatedLabel
        placeholder="Phone number"
        value={text}
        onChange={onTextChange}
        className={inputClass}
      />
    </div>
  )
}
