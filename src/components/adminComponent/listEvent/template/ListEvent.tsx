import React from "react";
import { Card } from "@nextui-org/card";
import TableEvent from "../organism/TableEvent";
import PaginationBottom from "../atom/PaginationBottom.jsx";
import OptionListEvent from "../organism/OptionListEvent";

const ListEvent = () => {
  return (
    <div className="min-h-screen w-full p-6">
      <h5 className="font-sans text-base text-gray-700">1 September 2024</h5>
      <h1 className="font-sans text-2xl text-gray-700">
        List Acara My Academy
      </h1>
      <Card shadow="lg" className="w-full p-5 bg-white mt-9">
        <OptionListEvent />
        <TableEvent />
        <div className="flex justify-center mt-8">
          <PaginationBottom />
        </div>
      </Card>
    </div>
  );
};
export default ListEvent;
