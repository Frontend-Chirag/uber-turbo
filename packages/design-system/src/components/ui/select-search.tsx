import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Input, InputProps } from "./input"
import React, { SetStateAction, useRef, useState } from "react";
import { cn } from "../../lib/utils";

// Base interface with mandatory fields
interface BaseSelectSearchOption {
    id: string;
    label: string;
}

// Generic interface that extends base with additional properties
interface SelectSearchOption extends BaseSelectSearchOption {
    [key: string]: any;
}

export type SelectSearchLabelType<TOption> = {
    option: TOption;
    index: number;
    optionState: { setOpen: React.Dispatch<SetStateAction<boolean>> };
}

type SelectSearchLabel<TOption> = ({
    option,
    index,
    optionState,
}: SelectSearchLabelType<TOption>) => React.ReactElement;

interface SelectSearchProps<TOption extends SelectSearchOption = SelectSearchOption> {
    input: Omit<InputProps, 'onChange' | 'value' | 'defaultValue'>
    getLabel?: SelectSearchLabel<TOption>
    options: TOption[];
    onChange?: (value: string) => void;
    value?: string;
    onSelect?: (option: TOption) => void;
    closeOnSelect?: boolean;
    labelKey?: keyof TOption;
    valueKey?: keyof TOption;
    disabled?: boolean;
    className?: string;
    selectClassName?: string;
    selectContentClassName?: string;
    selectTriggerClassName?: string;
    selectItemClassName?: string
}


export const SelectSearch = <TOption extends SelectSearchOption>(props: SelectSearchProps<TOption>) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<TOption | null>(null);
    const isControlled = props.value !== undefined;
    const [internalValue, setInternalValue] = useState<string>(props.value ?? '');
    const searchValue = isControlled ? (props.value || '') : internalValue;
    const inputRef = useRef<HTMLInputElement | null>(null)
    const optionsRef = useRef<HTMLDivElement[]>([]);
    const labelKey = props.labelKey || 'label';
    const valueKey = props.valueKey || 'id';


    const filterOptions = props.options.filter(option => {
        const label = String(option[labelKey] || '').toLowerCase();
        const value = String(option[valueKey] || '').toLowerCase();
        const search = searchValue.toLowerCase();
        return label.includes(search) || value.includes(search);
    })


    const handleSelect = (option: TOption, index: number) => {
        setSelectedOption(option)
        const newValue = String(option[labelKey]);

        if (!isControlled) {
            setInternalValue(newValue);
        }
        props.onSelect?.(option)
        props.onChange?.(String(option[valueKey]));

        if (props.closeOnSelect !== false) {
            setOpen(false);
            inputRef.current?.blur();
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
            setInternalValue(e.target.value);
        } else {
            props.onChange?.(e.target.value)
        }
        if (!open) setOpen(true) // only set if not already open
    }

    const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {

        setOpen(true);
        if (props.input.onClick) {
            props.input.onClick(e);
        } else {
            e.preventDefault()
        }
    }

    const handleClear = () => {
        if(!isControlled){
            setInternalValue('')
        }else {
            props.onChange?.("")
        };
        props.input.overrides?.onClear?.()
        inputRef.current?.focus()
        setOpen(true)
    }

    const renderOption = (option: TOption, index: number) => {
        const isSelected = selectedOption?.[valueKey] === option[valueKey];

        return (
            <div
                key={String(option[valueKey])}
                ref={(el) => {
                    if (el) optionsRef.current[index] = el;
                }}
                className={cn(
                    "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground",
                    isSelected && "bg-accent text-accent-foreground",
                    props.selectItemClassName
                )}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSelect(option, index);
                }}
                role="option"
                aria-selected={isSelected}
            >
                {props.getLabel
                    ? props.getLabel({ option, index, optionState: { setOpen } })
                    : <span>{String(option[labelKey])}</span>
                }
            </div>
        );
    };


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className={cn( props.selectTriggerClassName)}>
                    <Input
                        ref={inputRef}
                        {...props.input}
                        value={props.value ?? internalValue}
                        onChange={handleChange}
                        onFocus={(e) => {
                            setOpen(true)
                            props.input.onFocus?.(e)
                        }}
                        onClick={handleInputClick}
                        overrides={{
                            onClear:handleClear,
                            clearable: true,
                            ...props.input.overrides
                        }}
                    />
                </div>
            </PopoverTrigger> 

            <PopoverContent
                className={cn(
                     "bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-1 overflow-y-auto",
                    props.selectContentClassName
                )}
                side="bottom"
                align="start"
                sideOffset={4}
                onOpenAutoFocus={(e) => {
                    e.preventDefault() 
                }}
            >
                {filterOptions.map((option, index) => renderOption(option, index))}
            </PopoverContent>

        </Popover>
    )
}