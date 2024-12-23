import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import IconEvent from "../atom/IconEvent.jsx";
import EditButtonEvent from "../atom/EditButtonEvent";
import DetailButtonEvent from "../atom/DetailButtonEvent";
import DeleteButtonEvent from "../atom/DeleteButtonEvent";
import ActionEvent from "../molecules/ActionEvent.jsx";

const TableEvent = () => {
  return (
    <Table
      color="default"
      aria-label="List Event"
      // selectionMode="multiple"
      isStriped={true}
      removeWrapper
      className="overflow-x-scroll lg:overflow-x-hidden"
    >
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>TANGGAL</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>
            <IconEvent />
          </TableCell>
          <TableCell>
            <p>1 September 2024</p>
          </TableCell>
          <TableCell>
            <Chip color="success" variant="flat">
              Active
            </Chip>
          </TableCell>
          <TableCell>
            <div className="flex flex-row gap-2">
              <DetailButtonEvent href={`/listEvent/detail/1`}/>
              <EditButtonEvent href={`/listEvent/edit/1`}/>
              <DeleteButtonEvent />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default TableEvent;
