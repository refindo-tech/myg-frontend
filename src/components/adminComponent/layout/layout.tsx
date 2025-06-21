"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavbarComponent from "@/components/adminComponent/navbar/navbar";
import { SidebarWrapper } from "@/components/adminComponent/sidebar/sidebar";
import { SidebarProvider } from "@/components/adminComponent/layout/layout-context";
import { useLockedBody } from "@/components/adminComponent/hooks/useBodyLock";
import { getUserProfile, logoutUser } from "@/lib/authentication/fetchData";
import useAuthCheck from "@/hooks/common/auth";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [, setLocked] = useLockedBody();
  const isLogged = useAuthCheck();
  const [userData, setUserData] = useState<{ email: string; profilePicture: string | null; fullName: string; } | null>(null);

  // Example: Lock the body scroll when the sidebar is open
  const toggleSidebar = (isOpen: boolean) => {
    setLocked(isOpen);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (isLogged) {
        const profile = await getUserProfile();
        setUserData(profile);
      }
    };

    fetchUserProfile();
  }, [isLogged]);

  const handleLogout = async () => {
    await logoutUser();
    sessionStorage.removeItem('accessToken');
    router.push('/login');
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <SidebarWrapper onToggle={toggleSidebar} />

        {/* Main content area */}
        <div className="w-screen max-h-full bg-slate-100 overflow-y-auto">
          {/* Navbar */}
          <NavbarComponent
            userData={userData}
            onLogout={handleLogout}
          />

          {/* Page content */}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;