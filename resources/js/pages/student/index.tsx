import { index as student } from "@/routes/student";
import { usePage } from "@inertiajs/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { StudentType } from "@/types/data";

interface Props extends Record<string, unknown>{
    students : StudentType[];
}

export default function StudentIndex() {

    const props = usePage<Props>().props;
    const { students } = props;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Student</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>DOB</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Admission Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.dob}</TableCell>
                                <TableCell>{student.gender}</TableCell>
                                <TableCell>{student.admission_date}</TableCell>
                                <TableCell>{student.status}</TableCell>
                                <TableCell>
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
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