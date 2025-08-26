import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/app/dashboard/(sidebar)/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <header>
        <SidebarTrigger />
      </header>
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
