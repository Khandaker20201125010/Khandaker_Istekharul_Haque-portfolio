import * as React from "react"
import logo from "../../public/images/logo.png"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"



type NavSubItem = { title: string; url: string }
type NavItem = { title: string; url?: string; items?: NavSubItem[] }
// This is sample data.
const data: { navMain: NavItem[] } = {
  navMain: [
    {
      title: "Project Overview",
      items: [{ title: "Projects Management", url: "/dashboard/Manage-Projects" },
      { title: "Create Projects", url: "/dashboard/create-projects" },],
    },
    { 
      title: "Blogs Overview",
      items: [{ title: "Blogs Management", url: "/dashboard/manage-blogs" },
      { title: "Create Blogs", url: "/dashboard/create-blogs" },
      ],
    },
    {
      title: "Dashboard Home",
      url: "/dashboard", // ✅ direct url
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex gap-2 items-center">
                <Link href="/">
                  <Image className="h-10 w-10" src={logo} alt="logo" />
                </Link>
                <div className="hidden font-bold sm:block">Admin Panel</div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                {/* top-level as Link */}
                <SidebarMenuButton asChild>
                  <Link href={item.items?.length ? "#" : (item.url ?? "#")}>
                    {item.title}
                  </Link>
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
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
