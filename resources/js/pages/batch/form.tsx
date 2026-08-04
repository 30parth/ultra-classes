import StatusDropdown from "@/components/dropdown/status-dropdown";
import { DatePickerWithLabel } from "@/components/form/date-picker-with-label";
import InputWithLabel from "@/components/form/input-with-label";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import PageLayout from "@/layouts/page-layout";
import { index as batch, create as insertBatch, store, update } from "@/routes/batch";
import { BatchType } from "@/types/data";
import { Form, usePage } from "@inertiajs/react";


export default function BatchForm() {

    const props = usePage().props;

    const batch = props.batch as BatchType;

    return (
        <PageLayout title="Batch Form">
            <>
                <Heading title={batch ? "Edit Batch" : "Add Batch"} />
                <Form
                    {...(batch ? update.form(batch.id) : store.form())}
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <InputWithLabel
                                    type="text"
                                    name="name"
                                    label="Batch Name"
                                    placeholder="Enter Batch Name"
                                    error={errors.name}
                                    required={true}
                                    defaultValue={batch?.name}
                                />
                                <DatePickerWithLabel
                                    label="Start Date"
                                    name="start_date"
                                    required
                                    error={errors.start_date}
                                    defaultValue={batch?.start_date}
                                />
                                <DatePickerWithLabel
                                    label="End Date"
                                    name="end_date"
                                    error={errors.end_date}
                                    required={false}
                                    defaultValue={batch?.end_date}
                                />
                                <StatusDropdown
                                    label="Status"
                                    name="status"
                                    error={errors.status}
                                    required={true}
                                    defaultValue={batch?.status}
                                />
                            </div>
                            <Button type="submit">
                                {processing && <Spinner />}
                                {batch ? "Update Batch" : "Add Batch"}
                            </Button>
                        </>
                    )}
                </Form>
            </>
        </PageLayout>
    );
}

BatchForm.layout = {
    breadcrumbs: [
        {
            title: "Batch",
            href: batch(),
        },
        {
            title: "Add",
            href: insertBatch(),
        }
    ]
}