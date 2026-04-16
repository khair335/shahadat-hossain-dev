"use client";

import React from "react";
import { Divider } from "@nextui-org/react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, align = "center" }) => {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} mb-10`}>
      <h2 className="text-4xl font-bold text-foreground mb-3">{title}</h2>
      {subtitle && <p className="text-foreground/70">{subtitle}</p>}
      <div className={`${align === "center" ? "mx-auto" : ""} mt-4 w-24`}>
        <Divider className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 rounded" />
      </div>
    </div>
  );
};

export default PageHeader;
