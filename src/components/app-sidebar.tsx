import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import SidebarNavItems from "@/app/(dashboardLayouts)/(dasboardPublicComponenets)/SidebarNavItems/SidebarNavItems";



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
          {/* Render all nav items from a separate component */}
          <SidebarNavItems />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
