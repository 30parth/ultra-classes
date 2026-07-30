import { DatePickerWithLabel } from '@/components/form/date-picker-with-label'
import InputWithLabel from '@/components/form/input-with-label'
import SelectWithLabel from '@/components/form/select-with-label'
import Heading from '@/components/heading'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import PageLayout from '@/layouts/page-layout'
import { index as student, create as insertStudent, store } from '@/routes/student'
import { Form } from '@inertiajs/react'
import { format } from 'path'
import React, { useState } from 'react'

export default function StudentForm() {

    const [date, setDate] = useState<any>('');

    return (
        <PageLayout title='Student Form'>
            <>
                <Heading title='Add Student' />
                <Form
                    {...store.form()}
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <InputWithLabel
                                    label="Name"
                                    name="name"
                                    type="text"
                                    error={errors.name}
                                />
                                <InputWithLabel
                                    label="Gender"
                                    name="gender"
                                    type="text"
                                    error={errors.gender}
                                />
                                <SelectWithLabel name='sex' label='Render' />
                                <input className='hidden' type="date" name="date" defaultValue={date} />
                                <DatePickerWithLabel
                                    name="date"
                                    onChange={(fullDate) => { setDate(fullDate) }}
                                />
                            </div>
                            <Button type='submit'>
                                {processing && <Spinner />}
                                Save
                            </Button>
                        </>
                    )}
                </Form>
            </>
        </PageLayout>
    )
}

StudentForm.layout = {
    breadcrumbs: [
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