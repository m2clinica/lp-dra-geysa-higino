import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-[#4A3256] shadow-[0_4px_14px_rgba(91,62,106,0.2)]",
    secondary: "bg-secondary text-primary hover:bg-[#C28CAE] shadow-sm",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    white: "bg-white text-primary hover:bg-secondary hover:text-primary shadow-lg border border-transparent",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href } : {};

  return (
    // @ts-ignore - Framer motion generic types handling
    <Component
      {...linkProps}
      {...props}
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
};