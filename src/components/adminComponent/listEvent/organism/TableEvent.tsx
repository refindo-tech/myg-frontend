import React from "react";
import Image from "next/image";
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
import formatDateText from '@/helpers/formatDateText.js'
import {DetailEventData} from "@/types/myAcademy/admin/listEvent.js";

const TableEvent: React.FC<{ data: DetailEventData[] }> = ({ data }) => {
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
        <TableColumn>BANNER</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn className="text-center">TANGGAL</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {data?.map((item, index) => (
          <TableRow key={index} className="items-start">
            <TableCell className="align-top w-[300px]">
              <Image alt="banner" src={item.materials[0].brosur} height={300} width={300}/>
            </TableCell>
            <TableCell className="align-top max-w-[250px]">
              {/* <IconEvent /> */}
              <p className=" font-semibold lg:text-lg line-clamp-2">{item.materials[0].title}</p>
            </TableCell>
            <TableCell className="align-top">
              <p className="text-center">{new Date(item.dateStart).toLocaleDateString('id-ID',{day:"numeric", month:"long", year:"numeric"})}</p>
            </TableCell>
            <TableCell className="align-top">
              {new Date(item.dateStart) > new Date() ? (
                <Chip color="success" variant="flat">
                  Active
                </Chip>
              ) : (
                <Chip color="danger" variant="flat">
                  Passed
                </Chip>
              )}
            </TableCell>
            <TableCell className="align-top">
              <div className="flex flex-row gap-2">
                <DetailButtonEvent
                  href={`/listEvent/detail/${item.trainingId}`}
                />
                <EditButtonEvent href={`/listEvent/edit/${item.trainingId}`} />
                <DeleteButtonEvent />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default TableEvent;
