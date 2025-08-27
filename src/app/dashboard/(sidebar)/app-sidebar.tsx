"use client";

import { Header as SidebarHeader } from "./header";
import { Main as SidebarContent } from "./main";
import { Footer as SidebarFooter } from "./footer";

import { Sidebar, SidebarRail } from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="py-3">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
