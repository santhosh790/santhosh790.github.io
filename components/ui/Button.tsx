import React from 'react'
import { cn } from '@/lib/utils'

type ButtonChildProps = {
  className?: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover active:scale-95 shadow-[0_16px_36px_rgba(59,130,246,0.24)]',
    secondary:
      'bg-surface text-text-primary border border-border hover:bg-surface-hover active:scale-95',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface-hover',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  // If asChild, return children wrapped with classes
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<ButtonChildProps>

    return React.cloneElement(child, {
      className: cn(classes, child.props.className),
    })
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
