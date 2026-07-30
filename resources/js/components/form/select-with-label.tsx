import React from 'react'
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"

const frameworks = [
    {
        "label": 'Demo',
        "id": 1,
    },
    {
        "label": 'xbc',
        "id": 2,
    },
    {
        "label": 'sdg',
        "id": 3,
    },
]

interface Props {
    label: string
    name: string
}

export default function SelectWithLabel({ name, label }: Props) {
    return (
        <Combobox
            name={name}
            items={frameworks}
            itemToStringValue={(item) => { item.label }}
        >
            <ComboboxInput placeholder="Select a framework" />
            <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                    {(item) => (
                        <ComboboxItem key={item} value={item.label}>
                            {item.label}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    )
}
