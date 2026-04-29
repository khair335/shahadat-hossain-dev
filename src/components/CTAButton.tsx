import React from "react";
import { Button, ButtonProps } from "@nextui-org/react";

const CTAButton: React.FC<ButtonProps> = ({ className = "", variant = "solid", children, ...props }) => {
  const base = "font-black shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest text-sm md:text-lg";
  
  // Custom styles are handled via the className prop or variant mappings
  const composed = `${base} ${className}`;

  return (
    <Button 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)} 
      variant={variant} 
      className={composed}
      radius="full"
    >
      {children}
    </Button>
  );
};

export default CTAButton;
