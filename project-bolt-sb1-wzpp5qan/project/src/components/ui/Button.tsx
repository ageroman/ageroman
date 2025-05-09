import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'btn-outline',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClasses,
    className,
  ].join(' ');
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}