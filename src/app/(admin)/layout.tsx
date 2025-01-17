"use client";
import React from 'react';
import Layout from '@/components/adminComponent/layout/layout';
import "../globals.css"
interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default AdminLayout;