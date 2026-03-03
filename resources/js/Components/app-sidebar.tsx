import * as React from "react";
import { LayoutDashboard, Users } from "lucide-react";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export function AppSidebar({ active = "", user, appName, ...props }: any) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="p-1.5">
                            <Link href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                                    <Users className="size-4" />
                                </div>
                                <span className="font-bold text-xl">{appName}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
                    <SidebarMenu>
                        {/* Menu Tata Usaha */}
                        <SidebarMenuItem>
                            <SidebarMenuButton 
                                asChild 
                                isActive={active === "Tata Usaha"}
                                className={cn(
                                    "transition-colors",
                                    active === "Tata Usaha" && "bg-primary/10 text-primary border-l-2 border-primary"
                                )}
                            >
                                <Link href={route('tata-usaha')}>
                                    <Users size={18} />
                                    <span>Tata Usaha</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        
                        {/* Menu Dashboard */}
                        <SidebarMenuItem>
                            <SidebarMenuButton 
                                asChild 
                                isActive={active === "Dashboard"}
                                className={cn(active === "Dashboard" && "bg-primary/10 text-primary border-l-2 border-primary")}
                            >
                                <Link href={route('dashboard')}>
                                    <LayoutDashboard size={18} />
                                    <span>Dashboard</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}