import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import InputError from '../input-error'
import { Asterisk } from 'lucide-react'

interface Props {
    label?: string,
    type: string,
    required?: boolean,
    error: string,
    placeholder?: string,
    name: string
}

export default function InputWithLabel({
    label,
    type = "text",
    required = false,
    error,
    placeholder,
    name
}: Props) {
    return (
        <div className="grid gap-2">
            <Label htmlFor={label}>
                {label}
                {required && <Asterisk color='red' />}
            </Label>
            <Input
                id={label}
                type={type}
                required={required}
                autoComplete={label}
                name={label}
                placeholder={placeholder}
            />
            <InputError
                message={error}
                className="mt-2"
            />
        </div>
    )
}
