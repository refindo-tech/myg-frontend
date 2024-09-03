"use client";

import React from "react";
import NavbarComponent from "@/components/adminComponent/navbar/navbar";
import { SidebarWrapper } from "@/components/adminComponent/sidebar/sidebar";
import { SidebarProvider } from "@/components/adminComponent/layout/layout-context";
import { useLockedBody } from "@/components/adminComponent/hooks/useBodyLock";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [, setLocked] = useLockedBody();

  // Example: Lock the body scroll when the sidebar is open
  const toggleSidebar = (isOpen: boolean) => {
    setLocked(isOpen);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <SidebarWrapper onToggle={toggleSidebar} />

        {/* Main content area */}
        <div className="w-screen">
          {/* Navbar */}
          <NavbarComponent
            userData={{
              email: "johndoe@example.com",
              profilePicture: null,
              fullName: "John Doe",
            }}
            onLogout={() => console.log("User logged out")}
          />

          {/* Page content */}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;