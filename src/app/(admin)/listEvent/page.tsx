'use client'
import React from "react";
import { useState, useEffect } from "react";
import { Card } from "@nextui-org/card";
import TableEvent from "@/components/adminComponent/listEvent/organism/TableEvent";
import PaginationBottom from "@/components/adminComponent/listEvent/atom/PaginationBottom.jsx";
import OptionListEvent from "@/components/adminComponent/listEvent/organism/OptionListEvent";
import ListEventServices from "@/lib/admin/listEvent/listEventService";
import {EventListResponse, DetailEventData} from "@/types/myAcademy/admin/listEvent"

const ListEvent = () => {
  // const limit = 5
  const [limit, setLimit] = useState<number>(1)
  const [dataListEvent, setDataListEvent] = useState<DetailEventData[]>([])
  const handleLimit = (e:number) => {
    setLimit(e)
  }
  useEffect(()=>{
    const fetchAPI = async ():Promise<void>=> {
      try {
        // const response = await ListEventServices.listEvent(limit)
        // if(response){
        //   const data:EventListResponse = response.data
        //   setDataListEvent(data.results||[])
        // }
        const {data} = await ListEventServices.listEvent(limit)
        setDataListEvent(data.results||[])
      } catch (error:any) {
        console.error("Failed to fetch admins:", error);
        // setError("Failed to fetch admin list. Please try again.");
      }
    }
    fetchAPI()
  },[limit])
  return (
    <div className="min-h-screen w-full p-6">
      <h5 className="font-sans text-base text-gray-700">{new Date().toLocaleDateString('id-ID',{day:"numeric", month:"long", year:"numeric"})}</h5>
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
