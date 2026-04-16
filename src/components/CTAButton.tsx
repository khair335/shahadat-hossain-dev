import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

const CTAButton: React.FC<ButtonProps> = ({ className = "", variant = "default", children, ...props }) => {
  const base = "group relative overflow-hidden rounded-xl px-5 py-2.5 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60";

  const primary = "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99]";

  const outline = "bg-transparent border border-blue-600/40 dark:border-blue-400/40 text-blue-700 dark:text-blue-300 hover:bg-blue-500/10 hover:scale-[1.02] active:scale-[0.99]";

  const shine = "before:absolute before:inset-y-0 before:-left-[120%] before:w-[160%] before:skew-x-[-20deg] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-all before:duration-700 group-hover:before:left-[120%]";

  const composed = `${base} ${variant === "outline" ? outline : primary} ${shine} ${className}`;

  return (
    <Button {...props} variant={variant} className={composed}>
      {children}
    </Button>
  );
};

export default CTAButton;
