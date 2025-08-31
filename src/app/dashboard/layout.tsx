import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { AppSidebar } from "@/app/dashboard/(sidebar)/app-sidebar";

import { Bell, CircleQuestionMark, Moon } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex flex-col w-full">
        <header className="flex justify-between border-b border-border py-2 px-3 items-center gap-4">
          <SidebarTrigger />

          <div className="flex items-center gap-6">
            <CircleQuestionMark className="w-5 h-5" />
            <Bell className="w-5 h-5" />
            <Moon className="w-5 h-5" />

            <Avatar className="h-10 w-10 rounded-full">
              <AvatarImage src="htt://github.com/shadcn.png" />
              <AvatarFallback className="bg-secondary text-secondary-foreground leading-6">
                OD
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="w-full">{children}</main>
      </div>
    </SidebarProvider>
  );
}
