import * as React from "react";
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
import { LayoutDashboard, Building2, Users, Settings, FileText } from "lucide-react";

// Perbarui interface atau data statis jika navData tidak dikirim dari backend
export function AppSidebar({ active = "", user, appName, navData, ...props }: any) {
    // Jika navData dinamis, pastikan di AppLayout data ini menyertakan "Tata Usaha"
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="p-1.5">
                            <a href="/home">
                                <img src="/img/logo/sdi-logo-dark.png" alt="Logo" className="w-6 dark:hidden" />
                                <span className="font-bold">{appName}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className={cn({ "bg-primary/5 text-primary border-l-2 border-primary": active === "Dashboard" })}>
                                <a href={route('home')}><LayoutDashboard size={18}/> <span>Dashboard</span></a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        
                        {/* Tambahan Menu Tata Usaha */}
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className={cn({ "bg-primary/5 text-primary border-l-2 border-primary": active === "Tata Usaha" })}>
                                <a href={route('tata-usaha')}><Users size={18}/> <span>Tata Usaha</span></a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className={cn({ "bg-primary/5 text-primary border-l-2 border-primary": active === "Perusahaan" })}>
                                <a href={route('perusahaan')}><Building2 size={18}/> <span>Perusahaan</span></a>
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