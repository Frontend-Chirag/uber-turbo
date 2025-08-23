"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames, useDayPicker } from "react-day-picker";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./select";

import { cn } from "../../lib/utils";
import { Button, buttonVariants } from "./button"
import { format, isBefore, startOfDay, startOfMonth, startOfToday } from "date-fns";
import { SelectViewport } from "@radix-ui/react-select";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,

  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {


  const defaultClassNames = getDefaultClassNames()

  const currentYear = new Date().getFullYear();
  const start = new Date(currentYear, 0);
  const end = new Date(currentYear + 5, 11);



  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      startMonth={start}
      endMonth={end}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center justify-center  font-uber-bold  h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative cursor-pointer px-2 flex   items-center  rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0  opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-uber-md text-xl",
          captionLayout === "label"
            ? "text-lg"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-4",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none  ",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size) ",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center  group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground ",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        MonthsDropdown: ({ className, onChange, value, options }) => {
          const currentMonth = startOfMonth(new Date())

          return (
            <Select
              onValueChange={(val) => {
                const event = {
                  target: { value: val }
                } as React.ChangeEvent<HTMLSelectElement>
                onChange?.(event)
              }}
              value={String(value)} // bind to current month
            >
              <SelectTrigger className={"text-[18px] font-uber-medium border-none outline-none ring-none gap-4 placeholder:text-black shadow-none relative z-20"}>
              {format(new Date(new Date().getFullYear(), Number(value)), "MMMM")}
                
              </SelectTrigger>
              <SelectContent className="max-h-60 border-none outline-none shadow-[0_1px_16px_rgba(0,0,0,0.2)]">
                <SelectViewport className="max-h-60 overflow-y-auto">
                  {options?.map((month) => {
                    const monthDate = new Date(new Date().getFullYear(), month.value) // build month date
                    const disabled = isBefore(monthDate, currentMonth)

                    return (
                      <SelectItem
                        key={month.value}
                        value={String(month.value)}
                        disabled={disabled}
                        className={cn(
                          "flex justify-start  items-center rounded-none py-2 pl-4 cursor-pointer",
                          disabled && "opacity-40 cursor-not-allowed"
                        )}
                      >
                        {format(monthDate, "MMMM")} {/* full month name */}
                      </SelectItem>
                    )
                  })}
                </SelectViewport>
              </SelectContent>
            </Select>
          )
        },
        YearsDropdown: ({ className, onChange, value, options, ...props }) => {
          return (
            <Select
              onValueChange={(value) => {
                const event = {
                  target: { value }
                } as React.ChangeEvent<HTMLSelectElement>;

                onChange?.(event)
              }}
              defaultValue={String(options?.[0]?.value!)}
            >
              <SelectTrigger className={"font-uber-medium text-[18px]  border-none outline-none ring-none gap-4 placeholder:text-black shadow-none relative z-20"}>
                {value || options?.[0]?.value!}
              </SelectTrigger>
              <SelectContent
                className="max-h-60 overflow-y-auto border-none outline-none scrollbar-thin shadow-[0_1px_16px_rgba(0,0,0,0.2)]"
              >
                {options?.map((year) => (
                  <SelectItem
                    key={year.value}
                    value={String(year.value)}
                    className="flex justify-center items-center rounded-none py-2 px-0 cursor-pointer"
                  >
                    {year.value}
                  </SelectItem>
                ))}
              </SelectContent>

            </Select>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-preview={modifiers.preview}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground transition-all dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-x",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
