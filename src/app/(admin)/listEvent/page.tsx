"use client";
import ListEvent from "@/components/adminComponent/listEvent/template/ListEvent";
import { useState, useEffect } from "react";
import AddEvent from "@/components/adminComponent/listEvent/template/AddEvent";

const AdminEvent = () => {
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const handleIsAdd = () => {
        setIsAdd(!isAdd)
    }
  return (
    <>{
      isAdd?(
        <AddEvent handleIsAdd={handleIsAdd}/>
      ):(
        <ListEvent handleIsAdd={handleIsAdd}/>
      )
    }
    </>
  );
};
export default AdminEvent;
