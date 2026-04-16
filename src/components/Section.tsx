"use client";

import React from "react";
import Container from "@/components/Container";
import { Card } from "@nextui-org/react";

type SectionProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
}>;

const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;
