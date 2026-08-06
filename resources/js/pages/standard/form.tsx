import React from 'react'
import { index as standard, create as insertStandard, edit as editStandard, store, update } from '@/routes/standard'
import PageLayout from '@/layouts/page-layout'
import Heading from '@/components/heading'
import { Form, usePage } from '@inertiajs/react'
import InputWithLabel from '@/components/form/input-with-label'
import StatusDropdown from '@/components/dropdown/status-dropdown'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { StandardType } from '@/types/data'

export default function StandardForm() {

    const props = usePage().props;

    const standard = props.standard as StandardType;

    return (
        <PageLayout title={`${standard ? 'Edit Standard' : 'Add Standard'}`}>
            <>
                <Heading title={`${standard ? 'Edit Standard' : 'Add Standard'}`} />
                <Form
                    {...(standard ? update.form(standard.id) : store.form())}
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <InputWithLabel
                                    name='standard_name'
                                    label='Standard Name'
                                    placeholder='Enter Standard Name'
                                    error={errors.standard_name}
                                    defaultValue={standard?.standard_name}
                                    required={true}
                                    type='text'
                                />
                                <InputWithLabel
                                    name='standard_code'
                                    label='Standard Code'
                                    placeholder='Enter Standard code'
                                    error={errors.standard_code}
                                    required={true}
                                    defaultValue={standard?.standard_code}
                                    type='text'
                                />
                                <StatusDropdown
                                    name='status'
                                    error={errors.status}
                                    defaultValue={standard?.status}
                                    label='Status'
                                />
                            </div>
                            <Button type="submit">
                                {processing && <Spinner />}
                                Add Standard
                            </Button>
                        </>
                    )}
                </Form>
            </>
        </PageLayout>
    )
}

StandardForm.layout = {
    breadcrumb: [
        {
            label: "Standard",
            href: standard(),
        },
        {
            label: "Add",
            href: insertStandard(),
        }
    ]
}