

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/app/dashboard/(sidebar)/app-sidebar";

import { SidebarLayoutHeader } from "@/app/dashboard/(sidebar)/layout-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex flex-col w-full">
        <SidebarLayoutHeader />
        
        <main className="w-full">{children}</main>
      </div>
    </SidebarProvider>
  );
}
