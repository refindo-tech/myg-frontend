import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip
} from "@nextui-org/react";
import IconEvent from '../atom/IconEvent.jsx'
import ActionEvent from '../molecules/ActionEvent.jsx'
const TableEvent = () => {
    return (
        <Table
            color="default"
            aria-label="List Event"
            selectionMode="multiple"
            removeWrapper
        >
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>TANGGAL</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn>ACTION</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key='1'>
                    <TableCell>
                        <IconEvent />
                    </TableCell>
                    <TableCell>
                        <p>1 September 2024</p>
                    </TableCell>
                    <TableCell>
                        <Chip color="success" variant="flat">Active</Chip>
                    </TableCell>
                    <TableCell>
                        <ActionEvent/>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
export default TableEvent