import * as React from "react";
import { LayoutDashboard, Users, Building2 } from "lucide-react";
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

// Opsional: Jika menggunakan Ziggy secara eksplisit
// import { route } from "ziggy-js"; 

export function AppSidebar({ active = "", user, appName, ...props }: any) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="p-1.5">
                            <a href="/">
                                {/* Menambahkan placeholder logo jika diperlukan sesuai file lain */}
                                <span className="font-bold text-xl">{appName}</span>
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
                            <SidebarMenuButton 
                                asChild 
                                className={cn(
                                    "transition-colors",
                                    active === "Tata Usaha" && "bg-primary/10 text-primary border-l-2 border-primary"
                                )}
                            >
                                {/* Pastikan route 'tata-usaha' sudah ada di web.php */}
                                <a href={typeof route !== 'undefined' ? route('tata-usaha') : '#'}>
                                    <Users size={18} />
                                    <span>Tata Usaha</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        
                        {/* Contoh menu lainnya untuk konsistensi */}
                        <SidebarMenuItem>
                            <SidebarMenuButton 
                                asChild 
                                className={cn(active === "Dashboard" && "bg-primary/10 text-primary border-l-2 border-primary")}
                            >
                                <a href="/">
                                    <LayoutDashboard size={18} />
                                    <span>Dashboard</span>
                                </a>
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