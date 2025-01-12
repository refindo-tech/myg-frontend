'use client'
import React from "react";
import { useState, useEffect } from "react";
import { Card } from "@nextui-org/card";
import TableEvent from "../organism/TableEvent";
import PaginationBottom from "../atom/PaginationBottom.jsx";
import OptionListEvent from "../organism/OptionListEvent";
import ListEventServices from "@/lib/admin/listEvent/listEventService";
import {EventListResponse, ListEventData} from "@/types/myAcademy/admin/listEvent"

const ListEvent = () => {
  // const limit = 5
  const [limit, setLimit] = useState<number>(1)
  const [dataListEvent, setDataListEvent] = useState<ListEventData[]>([])
  const handleLimit = (e:number) => {
    setLimit(e)
  }
  useEffect(()=>{
    const fetchAPI = async ():Promise<void>=> {
      const response = await ListEventServices.listEvent(limit)
      if(response){
        const data:EventListResponse = response.data
        setDataListEvent(data.results||[])
      }
    }
    fetchAPI()
  },[limit])
  return (
    <div className="min-h-screen w-full p-6">
      <h5 className="font-sans text-base text-gray-700">1 September 2024</h5>
      <h1 className="font-sans text-2xl text-gray-700">
        List Acara My Academy
      </h1>
      <Card shadow="lg" className="w-full p-5 bg-white mt-9">
        <OptionListEvent handleLimit={handleLimit}/>
        <TableEvent data={dataListEvent}/>
        <div className="flex justify-center mt-8">
          <PaginationBottom />
        </div>
      </Card>
    </div>
  );
};
export default ListEvent;
