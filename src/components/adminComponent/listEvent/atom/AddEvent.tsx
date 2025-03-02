import React from "react";
import Link from "next/link";
import icons from "@/components/icons/icon";
const AddEvent = () => {
  const { PlusCircleIcon } = icons;
  return (
    <Link
      prefetch
      href={'/admin/listEvent/add'}
      aria-label="add event"
      className="bg-kuning2 text-abugelap flex flex-row gap-1 lg:gap-3 text-2xl rounded-xl"
    >
      <div
      // className='hidden lg:block'
      className="mx-5 flex flex-row gap-1 items-center"
      >
        <PlusCircleIcon />
        <p className="font-sans font-semibold text-sm lg:text-base text-nowrap">
          Tambah Acara
        </p>
      </div>
    </Link>
  );
};
export default AddEvent;
