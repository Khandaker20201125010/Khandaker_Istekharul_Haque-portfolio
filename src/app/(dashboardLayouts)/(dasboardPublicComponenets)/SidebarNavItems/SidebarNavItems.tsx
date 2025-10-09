"use client";

import { lazy, Suspense } from "react";
import Link from "next/link";

// Lazy-load Sidebar UI components
const SidebarMenu = lazy(() => import("@/components/ui/sidebar").then(m => ({ default: m.SidebarMenu })));
const SidebarMenuItem = lazy(() => import("@/components/ui/sidebar").then(m => ({ default: m.SidebarMenuItem })));
const SidebarMenuButton = lazy(() => import("@/components/ui/sidebar").then(m => ({ default: m.SidebarMenuButton })));
const SidebarMenuSub = lazy(() => import("@/components/ui/sidebar").then(m => ({ default: m.SidebarMenuSub })));
const SidebarMenuSubItem = lazy(() => import("@/components/ui/sidebar").then(m => ({ default: m.SidebarMenuSubItem })));
const SidebarMenuSubButton = lazy(() => import("@/components/ui/sidebar").then(m => ({ default: m.SidebarMenuSubButton })));

// Define your nav data here or import from lib/navData
const data: { title: string; url?: string; items?: { title: string; url: string }[] }[] = [
  {
    title: "Project Overview",
    items: [
      { title: "Projects Management", url: "/dashboard/Manage-Projects" },
      { title: "Create Projects", url: "/dashboard/create-projects" },
    ],
  },
  {
    title: "Blogs Overview",
    items: [
      { title: "Blogs Management", url: "/dashboard/manage-blogs" },
      { title: "Create Blogs", url: "/dashboard/create-blogs" },
    ],
  },
  {
    title: "Dashboard Home",
    items: [
      { title: "Home", url: "/" },
      { title: "View Project", url: "/project" },
      { title: "View Blogs", url: "/blogs" },
    ],
  },
];

export default function SidebarNavItems() {
  return (
    <Suspense fallback={<div className="text-gray-400 p-4">Loading menu...</div>}>
      <SidebarMenu className="gap-2">
        {data.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.items?.length ? "#" : item.url ?? "#"}>{item.title}</Link>
            </SidebarMenuButton>

            {item.items?.length ? (
              <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                {item.items.map((sub) => (
                  <SidebarMenuSubItem key={sub.title}>
                    <SidebarMenuSubButton asChild>
                      <Link href={sub.url}>{sub.title}</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            ) : null}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </Suspense>
  );
}
