"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import DashboardPage from "@/components/Dashboard/DashboardPage";

export default function AdminPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <DashboardPage />
      </div>
    </SidebarProvider>
  );
}


