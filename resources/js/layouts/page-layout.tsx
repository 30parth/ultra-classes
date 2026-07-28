import { Head } from '@inertiajs/react'
import React from 'react'

interface Props {
    title : string
    children : React.ReactNode;
}

export default function PageLayout({title,children}:Props) {
    return (
        <>
            <Head title={title} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4 md:p-6">
                {children}
            </div>
        </>
    )
}
