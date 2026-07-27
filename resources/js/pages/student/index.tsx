import { index as student , create as insertStudent} from "@/routes/student";
import { Head, Link, usePage } from "@inertiajs/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { StudentType } from "@/types/data";
import { Input } from "@/components/ui/input";

interface Props extends Record<string, unknown> {
    students: StudentType[];
}

export default function StudentIndex() {

    const props = usePage<Props>().props;
    const { students } = props;

    return (

        <>
            <Head title="Student" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Input type="text" placeholder="Search .." />
                    <Button>
                        <Link href={insertStudent().url}>
                            Add
                        </Link>
                    </Button>
                </div>
            </div>
        </>
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