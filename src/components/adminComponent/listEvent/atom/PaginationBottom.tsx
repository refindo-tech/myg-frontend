"use client";
import React, { useState, useEffect } from "react";
import { Pagination, Button } from "@nextui-org/react";
interface propsPaginationBottom {
  totalPage: number;
  handleChange: (params: number) => void;
}
const PaginationBottom: React.FC<propsPaginationBottom> = ({
  totalPage,
  handleChange,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    handleChange(currentPage);
  }, [currentPage, handleChange]);

  return (
    <div className="flex flex-row gap-2">
      {totalPage !== 1 && (
        <Button
          size="sm"
          variant="light"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
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
        onChange={setCurrentPage}
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
  );
};
export default PaginationBottom;
