import React from 'react'
import { index as standard, create as insertStandard, edit as editStandard } from '@/routes/standard'
import PageLayout from '@/layouts/page-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Link, usePage } from '@inertiajs/react'
import { StandardType } from '@/types/data'

export default function StandardIndex() {

    const props = usePage().props;
    const standards = props.standards as StandardType[];

    return (
        <PageLayout title='Standard'>
            <>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Input
                        type="text"
                        placeholder="Search .."
                        className="w-full sm:w-1/2 lg:w-1/3"
                    />
                    <Button asChild>
                        <Link href={insertStandard().url}>Add</Link>
                    </Button>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Sr No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Code</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {standards.map((standard: StandardType) => (
                                <TableRow key={standard.id}>
                                    <TableCell>{standard.id}</TableCell>
                                    <TableCell>{standard.standard_name}</TableCell>
                                    <TableCell>{standard.standard_code}</TableCell>
                                    <TableCell>{standard.status}</TableCell>
                                    <TableCell>
                                        <Button asChild>
                                            <Link href={editStandard(standard.id).url}>Edit</Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </>
        </PageLayout>
    )
}

StandardIndex.layout = {
    breadcrumb: [
        {
            label: "Standard",
            href: standard(),
        },
    ]
}