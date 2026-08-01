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
import InputError from "../input-error"

interface Props {
    value?: Date | string
    onChange: (value: Date | undefined) => void
    error?: string
}

export function DatePickerWithLabel({ value, onChange, error }: Props) {
    const [date, setDate] = React.useState<Date | undefined>(() => {
        if (!value) return undefined;
        const d = value instanceof Date ? value : new Date(value);
        return isNaN(d.getTime()) ? undefined : d;
    });

    React.useEffect(() => {
        if (value) {
            const parsed = value instanceof Date ? value : new Date(value);
            if (!isNaN(parsed.getTime())) {
                if (!date || date.getTime() !== parsed.getTime()) {
                    setDate(parsed);
                }
            }
        } else {
            if (date) setDate(undefined);
        }
    }, [value]);

    const handleSelect = (newDate: Date | undefined) => {
        setDate(newDate);
        onChange(newDate);
    };

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
                        onSelect={handleSelect}
                        defaultMonth={date}
                    />
                </PopoverContent>
            </Popover>
            <InputError
                message={error}
            />
        </div>
    )
}
