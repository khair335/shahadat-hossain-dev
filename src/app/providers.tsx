"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            {children}
            <Sonner />
          </TooltipProvider>
        </QueryClientProvider>
      </NextUIProvider>
    </ThemeProvider>
  );
}


