"use client"
import React, { useState, useEffect } from "react";
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
import EditButtonEvent from "../atom/EditButtonEvent";
import DetailButtonEvent from "../atom/DetailButtonEvent";
import DeleteButtonEvent from "../atom/DeleteButtonEvent";
import { DetailEventData } from "@/types/myAcademy/admin/listEvent.js";
interface propsTableEvent {
  data:DetailEventData[],
}
const TableEvent: React.FC<propsTableEvent> = ({ data }) => {
  const getProfilePictureUrl = (path: string) => `${process.env.NEXT_PUBLIC_BASE_API}/${path}`;
  const [listEvent, setListEvent] = useState<DetailEventData[]>(data)
  useEffect(()=>{
    setListEvent(data)
    console.log("Table Event", data)
  },[data])
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
        {listEvent?.map((item, index) => (
          <TableRow key={index} className="items-start">
            <TableCell className="align-top w-[300px]">
              {item.materials?.[0]?.brosur ? (
                <Image
                  alt="banner"
                  src={getProfilePictureUrl(item.materials[0].brosur)}
                  height={300}
                  width={300}
                  className="rounded-lg"
                />
              ) : (
                <p className="text-gray-400 py-3">No Banner</p> // Teks fallback jika tidak ada brosur
              )}
            </TableCell>
            <TableCell className="align-top max-w-[250px] py-3">
              {/* <IconEvent /> */}
              <p className=" font-semibold lg:text-lg line-clamp-2">
                {item.trainingName}
              </p>
            </TableCell>
            <TableCell className="align-top py-3">
              <p className="text-center">
                {new Date(item.dateStart).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </TableCell>
            <TableCell className="align-top py-3">
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
            <TableCell className="align-top py-3">
              <div className="flex flex-row gap-2">
                <DetailButtonEvent
                  href={`/admin/listEvent/detail/${item.trainingId}`}
                />
                <EditButtonEvent href={`/admin/listEvent/edit/${item.trainingId}`} />
                <DeleteButtonEvent trainingName={item.trainingName} idTraining={item.trainingId}/>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default TableEvent;
