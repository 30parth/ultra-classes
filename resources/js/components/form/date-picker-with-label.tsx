"use client"

import * as React from "react"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "../ui/label"
import { useEffect } from "react"

interface Props {
    name: string
    onChange: (value: any) => void
}

export function DatePickerWithLabel({ name, onChange }: Props) {
    const [date, setDate] = React.useState<Date>()

    useEffect(() => {
        onChange(date)
    }, [date])

    return (
        <div className="grid gap-2">
            <Label
            // htmlFor={label}
            >
                {/* {label} */}
                {/* {required && <Asterisk color='red' />} */}
                Date
            </Label>
            <Popover >
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        data-empty={!date}
                        className="justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                    >
                        {date ? format(date, "dd-MM-yyyy") : <span>Pick a date</span>}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        defaultMonth={date}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
