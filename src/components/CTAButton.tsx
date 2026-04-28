import React from "react";
import { Button, ButtonProps } from "@nextui-org/react";

interface CustomCTAButtonProps extends ButtonProps {
  // Add any extra props if needed
}

const CTAButton: React.FC<CustomCTAButtonProps> = ({ className = "", variant = "solid", children, ...props }) => {
  const base = "font-black shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest text-sm md:text-lg";
  
  // Custom styles are handled via the className prop or variant mappings
  const composed = `${base} ${className}`;

  return (
    <Button 
      {...props} 
      variant={variant} 
      className={composed}
      radius="full"
    >
      {children}
    </Button>
  );
};

export default CTAButton;
