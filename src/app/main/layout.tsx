"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Settings, User, LogOut, Plane } from "lucide-react";
import { MenuItems } from "@/constant/MenuItems";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const { isLoggedIn, user, logout } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-sidebar-border p-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">Holidap</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {MenuItems.map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/profile" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/settings" className="flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-sidebar-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {user?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium">{user}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout} className="w-8 h-8">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome back, {user}!
              </h1>
            </div>
          </header>

          <div className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
