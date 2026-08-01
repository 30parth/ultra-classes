import React from 'react'
import SelectWithLabel from '../form/select-with-label'
import { Label } from '../ui/label'
import { Asterisk } from 'lucide-react'
import InputError from '../input-error'

interface Props {
    name: string,
    label: string,
    error: string,
    required?: boolean,
    defaultValue?: string
}

export default function GenderDropDown({
    name,
    label,
    required = false,
    error,
    defaultValue }: Props) {

    const items = [
        {
            id: 'male',
            label: 'Male'
        },
        {
            id: 'female',
            label: 'Female'
        },
        {
            id: 'other',
            label: 'Other'
        },
    ]

    return (
        <div className='grid gap-2'>
            <Label htmlFor={label}>
                {label}
                {required && <Asterisk color='red' size={13} />}
            </Label>
            <SelectWithLabel
                name={name}
                label={label}
                items={items}
                placeholder='Select Gender'
                defaultValue={defaultValue}
            />
            <InputError
                message={error}
            />
        </div>
    )
}
