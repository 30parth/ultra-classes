import Heading from '@/components/heading'
import PageLayout from '@/layouts/page-layout'
import { index as student , create as insertStudent} from '@/routes/student'
import React from 'react'

export default function StudentForm() {
    return (
        <PageLayout title='Student Form'>
            <>
                <Heading title='Add Student'/>
                <div className="grid">
                    
                </div>
            </>
        </PageLayout>
    )
}

StudentForm.layout = {
    breadcrumbs : [
        {
            title: "Student",
            href: student(),
        },
        {
            title: "Add",
            href: insertStudent(),
        }
    ]
}