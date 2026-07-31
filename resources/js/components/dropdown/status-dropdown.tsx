import React from 'react'
import { Label } from '../ui/label'
import { Asterisk } from 'lucide-react'
import InputError from '../input-error'
import SelectWithLabel from '../form/select-with-label'

interface Props {
    name: string
    label: string
    error: string
    required?: boolean
}

export default function StatusDropdown({ name, label, required = false, error }: Props) {

    const items = [
        {
            id: 'active',
            label: 'Active'
        },
        {
            id: 'inactive',
            label: 'Inactive'
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
                placeholder='Select Status'
            />
            <InputError
                message={error}
            />
        </div>
    )
}
