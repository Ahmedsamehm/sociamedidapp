"use client";
import { Home, Settings, TestTube, User } from "lucide-react";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./shared/sidebar";
import Link from "next/link";

import { usePathname } from "next/navigation";

const items = [
  {
    title: "Feed",
    url: "/",
    icon: Home,
  },

  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },

  {
    title: "Settings",
    url: "/setting",
    icon: Settings,
  },
  {
    title: "test",
    url: "/test",
    icon: TestTube,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="h-full  inset-y-16 border" variant="inset" collapsible="icon">
      <SidebarContent className="bg-background ">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url} className="flex items-center gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
