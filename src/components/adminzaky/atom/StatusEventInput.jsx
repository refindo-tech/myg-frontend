import { Select, SelectItem } from '@nextui-org/react'
const StatusEventInput = () => {
    const data = [
        {key: "active", label: "Active"},
        {key: "passed", label: "Passed"},
    ];
    return (
        <Select
            color='warning'
            label="Status"
            variant='bordered'
            items={data}
            placeholder="Pilih status"
        >
            {(data)=><SelectItem>{data.label}</SelectItem>}
        </Select>
    )
}
export default StatusEventInput