import { ArrowDownUp } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = {
  n2: [
    {
      title: "Bubble Sort",
      url: "/bubble-sort",
      icon: ArrowDownUp,
    },
    {
      title: "Selection Sort",
      url: "/selection-sort",
      icon: ArrowDownUp,
    },
    {
      title: "Insertion Sort",
      url: "/insertion-sort",
      icon: ArrowDownUp,
    },
  ],
  nLogn: [
    {
      title: "Merge Sort",
      url: "/merge-sort",
      icon: ArrowDownUp,
    },
    {
      title: "Quick Sort",
      url: "/quick-sort",
      icon: ArrowDownUp,
    },
    {
      title: "Heap Sort",
      url: "/heap-sort",
      icon: ArrowDownUp,
    },

    {
      title: "Shell Sort",
      url: "/shell-sort",
      icon: ArrowDownUp,
    },
  ],
  n: [
    {
      title: "Counting Sort",
      url: "/counting-sort",
      icon: ArrowDownUp,
    },
    {
      title: "Radix Sort",
      url: "/radix-sort",
      icon: ArrowDownUp,
    },
    {
      title: "Bucket Sort",
      url: "/bucket-sort",
      icon: ArrowDownUp,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Time Complexity n<sup>2</sup>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.n2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Time Complexity nLog(n)</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.nLogn.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Time Complexity n</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.n.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
