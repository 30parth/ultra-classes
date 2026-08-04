import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import { BatchType } from '@/types/data';
import PageLayout from '@/layouts/page-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { index as batch, create as insertBatch, edit as editBatch } from "@/routes/batch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function BatchIndex() {

    const props = usePage().props;
    const batches = props.batches as BatchType[];

    return (
        <PageLayout title='Batch'>
            <>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Input
                        type="text"
                        placeholder="Search .."
                        className="w-full sm:w-1/2 lg:w-1/3"
                    />
                    <Button asChild>
                        <Link href={insertBatch().url}>Add</Link>
                    </Button>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Sr No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Start Date</TableHead>
                                <TableHead>End Date</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {batches.map((batch: BatchType) => (
                                <TableRow key={batch.id}>
                                    <TableCell>{batch.id}</TableCell>
                                    <TableCell>{batch.name}</TableCell>
                                    <TableCell>{batch.start_date}</TableCell>
                                    <TableCell>{batch.end_date}</TableCell>
                                    <TableCell>
                                        <Button asChild>
                                            <Link href={editBatch(batch.id).url}>Edit</Link>
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

BatchIndex.layout = {
    breadcrumb: [
        {
            label: "Batch",
            href: batch(),
        },
    ]
}