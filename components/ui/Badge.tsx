import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary'
  children: React.ReactNode
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-surface text-text-secondary border border-border',
    primary: 'bg-accent/10 text-accent border border-accent/20',
    secondary: 'bg-text-tertiary/10 text-text-secondary border border-text-tertiary/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
