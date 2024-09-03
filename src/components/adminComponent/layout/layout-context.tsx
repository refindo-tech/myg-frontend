"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type SidebarContextType = {
  collapsed: boolean;
  setCollapsed: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsedState] = useState(false);

  const setCollapsed = () => {
    setCollapsedState((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};
