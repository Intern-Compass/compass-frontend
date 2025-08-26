"use client";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  UsersRound,
  Clock1,
  FileCheck,
  Users,
} from "lucide-react";

import {
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarContent,
} from "@/components/ui/sidebar";

import { type LucideIcon } from "lucide-react";

interface Item {
  title: string;
  url: string;
  icon: LucideIcon;
}

const items: Item[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Account",
    url: "/dashboard/account",
    icon: UsersRound,
  },
  {
    title: "Milestones",
    url: "/dashboard/milestones",
    icon: Clock1,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: FileCheck,
  },
  {
    title: "Community",
    url: "/dashboard/community",
    icon: Users,
  },
];

export const Main = () => {
  const pathname = usePathname();

  return (
    <SidebarContent>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.url}
              className="shrink-0"
            >
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
};
