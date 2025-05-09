import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ 
  variant = 'primary', 
  children, 
  className = '' 
}: BadgeProps) {
  const baseClasses = 'badge';
  
  const variantClasses = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    error: 'bg-error/10 text-error',
  };
  
  const classes = [baseClasses, variantClasses[variant], className].join(' ');
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
}