
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  stagger?: number;
  baseDelay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = 'p',
  className,
  stagger = 0.05,
  baseDelay = 0,
}) => {
  const letters = Array.from(text);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: baseDelay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block', whiteSpace: 'pre-wrap', verticalAlign: 'bottom' }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            variants={childVariants}
            style={{ display: 'inline-block' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
