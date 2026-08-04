"use client"

import * as React from "react"
import { format } from "date-fns"
import { Asterisk, ChevronDownIcon } from "lucide-react"

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
    defaultValue?: Date | string
    label?: string
    required?: boolean
    error?: string
    name?: string
}

export function DatePickerWithLabel({ defaultValue, error, label = "Date", required = true, name }: Props) {

    const [date, setDate] = React.useState<Date | undefined>(() => {
        if (!defaultValue) return undefined;

        return defaultValue instanceof Date
            ? defaultValue
            : new Date(defaultValue);
    });

    const handleSelect = (newDate: Date | undefined) => {
        setDate(newDate);
    };

    return (
        <>
            <input
                type="date"
                className="hidden"
                name={name}
                value={date ? (date instanceof Date ? format(date, 'yyyy-MM-dd') : date) : ''}
                readOnly
            />
            <div className="grid gap-2">
                <Label>
                    {label}
                    {required && <Asterisk color='red' size={13} />}
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
        </>
    )
}
