
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { LayoutDashboard, Edit3, Briefcase, Route as RouteIcon, Rss, MessageSquare } from 'lucide-react';

const sidebarNavItems = [
  { title: 'Hero Section', icon: LayoutDashboard, sectionId: 'hero-section' },
  { title: 'Portfolio', icon: Briefcase, sectionId: 'portfolio-section' },
  { title: 'Services', icon: Edit3, sectionId: 'services-section' },
  { title: 'My Journey', icon: RouteIcon, sectionId: 'timeline-section' },
  { title: 'Blog & Insights', icon: Rss, sectionId: 'blog-section' },
];

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 justify-center">
        <LayoutDashboard className="w-8 h-8 text-primary" />
        <span className="text-lg font-semibold ml-2 group-data-[collapsible=icon]:hidden">CMS Dashboard</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">Manage Content</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.sectionId)}
                    tooltip={{ children: item.title, side: 'right', align: 'center' }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 group-data-[collapsible=icon]:hidden">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} My Website</p>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
