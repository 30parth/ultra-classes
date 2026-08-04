import GenderDropDown from '@/components/dropdown/gender-dropdown'
import StatusDropdown from '@/components/dropdown/status-dropdown'
import { DatePickerWithLabel } from '@/components/form/date-picker-with-label'
import InputWithLabel from '@/components/form/input-with-label'
import SelectWithLabel from '@/components/form/select-with-label'
import Heading from '@/components/heading'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import PageLayout from '@/layouts/page-layout'
import { index as studentRoute, create as insertStudent, store, update } from '@/routes/student'
import { Form } from '@inertiajs/react'
import React from 'react'
import { StudentType } from '@/types/data'

interface Props {
    student?: StudentType;
}

export default function StudentForm({ student }: Props) {

    return (
        <PageLayout title='Student Form'>
            <>
                <Heading title={student ? 'Edit Student' : 'Add Student'} />
                <Form
                    {... (student ? update.form(student.id) : store.form())}
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <InputWithLabel
                                    label="Name"
                                    name="name"
                                    type="text"
                                    error={errors.name}
                                    defaultValue={student?.name}
                                />
                                <GenderDropDown
                                    name="gender"
                                    label="Gender"
                                    required={true}
                                    error={errors.gender}
                                    defaultValue={student?.gender}
                                />
                                <DatePickerWithLabel
                                    name="admission_date"
                                    defaultValue={student?.admission_date}
                                    error={errors.admission_date}
                                />
                                <StatusDropdown
                                    name={'status'}
                                    label={'Status'}
                                    error={errors.status}
                                    defaultValue={student?.status}
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
            href: studentRoute(),
        },
        {
            title: "Add",
            href: insertStudent(),
        }
    ]
}