import React from 'react'
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"

interface Props {
    label: string
    name: string
    items: any
    placeholder: string
}

export default function SelectWithLabel({ name, label, items, placeholder }: Props) {
    return (
        <Combobox
            name={name}
            items={items}
        >
            <ComboboxInput placeholder={placeholder} />
            <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                    {(item) => (
                        <ComboboxItem key={item} value={item.id}>
                            {item.label}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    )
}
