"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import TableEvent from "@/components/adminComponent/listEvent/organism/TableEvent";
// import PaginationBottom from "@/components/adminComponent/listEvent/atom/PaginationBottom";
import OptionListEvent from "@/components/adminComponent/listEvent/organism/OptionListEvent";
import ListEventServices from "@/lib/admin/listEvent/listEventService";
import { Pagination } from "@nextui-org/react";
import {
  EventListResponse,
  DetailEventData,
} from "@/types/myAcademy/admin/listEvent";
import Swal from "sweetalert2";
import { Router } from "lucide-react";
const ListEvent = () => {
  // const limit = 5
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [totalData, setTotalData] = useState<number>(0);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [limit, setLimit] = useState<number>(1);
  const [dataListEvent, setDataListEvent] = useState<DetailEventData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleLimit = (e: number) => {
    setLimit(e);
  };
  const handlePage = (val: number) => {
    console.log("Page changed to:", val);
    setCurrentPage(val);
  };
  const handleQuery = (val: string | undefined) => {
    console.log(val);
    setQuery(val);
  };
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await ListEventServices.listEvent(limit, currentPage, query)
        console.log("Fetching data for page:", response)
        if (response.data.meta.success) {
          const data: EventListResponse = response.data;
          console.log(data);
          setDataListEvent(data.results.list || []);
          setTotalData(data.results.count);
        }
        // const {data} = await ListEventServices.listEvent(limit)
        // setDataListEvent(data.results.list||[])
      } catch (error: any) {
        console.error("Failed to fetch admins:", error);
        if (error.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Your sessioun was expired, please login again!",
          });
          router.push("/dashboard");
        }
        // setError("Failed to fetch admin list. Please try again.");
      }
    };
    fetchAPI();
  }, [limit, currentPage, query, router]);
  useEffect(() => {
    if (totalData > 0) {
      const result = totalData / limit;
      setTotalPage(Math.ceil(result));
    }
  }, [totalData, limit]);
  return (
    <div className="min-h-screen w-full p-6">
      <h5 className="font-sans text-base text-gray-700">
        {new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h5>
      <h1 className="font-sans text-2xl text-gray-700">
        List Acara My Academy
      </h1>
      <Card shadow="lg" className="w-full p-5 bg-white mt-9">
        <OptionListEvent
          onSearch={handleQuery}
          totalData={totalData}
          handleLimit={handleLimit}
        />
        <TableEvent data={dataListEvent} />
        <div className="flex justify-center mt-8">
          <div className="flex flex-row gap-2">
            {totalPage !== 1 && (
              <Button
                size="sm"
                variant="light"
                onPress={() =>
                  setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
                }
                isDisabled={currentPage == 1 ? true : false}
                className="font-semibold hidden lg:block"
              >
                Prev
              </Button>
            )}
            <Pagination
              total={totalPage}
              isCompact
              color="warning"
              page={currentPage}
              initialPage={1}
              onChange={(page)=>handlePage(page)}
            />
            {totalPage !== 1 && (
              <Button
                size="sm"
                variant="light"
                onPress={() =>
                  setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
                }
                className="font-semibold hidden lg:block"
              >
                Next
              </Button>
            )}
          </div>
          {/* <PaginationBottom totalPage={totalPage} handleChange={handlePage} /> */}
        </div>
      </Card>
    </div>
  );
};
export default ListEvent;
