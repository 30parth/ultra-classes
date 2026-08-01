import { index as student, create as insertStudent, edit as editStudent } from "@/routes/student";
import { Head, Link, usePage } from "@inertiajs/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { StudentType } from "@/types/data";
import { Input } from "@/components/ui/input";
import PageLayout from "@/layouts/page-layout";

interface Props extends Record<string, unknown> {
    students: StudentType[];
}

export default function StudentIndex() {

    const props = usePage<Props>().props;
    const { students } = props;

    return (
        <PageLayout title="Student">
            <>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Input
                        type="text"
                        placeholder="Search .."
                        className="w-full sm:w-1/2 lg:w-1/3"
                    />
                    <Button asChild>
                        <Link href={insertStudent().url}>Add</Link>
                    </Button>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Sr No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.map((student: StudentType, index: number) => (
                                <TableRow key={student.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" asChild>
                                            <Link href={editStudent(student.id).url}>Edit</Link>
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

StudentIndex.layout = {
    breadcrumbs: [
        {
            title: "Student",
            href: student()
        }
    ]
}