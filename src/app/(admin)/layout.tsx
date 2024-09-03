"use client";
import React from 'react';
import Layout from '@/components/adminComponent/layout/layout';

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