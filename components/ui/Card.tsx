import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export function Card({ children, hover = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface p-6 shadow-[0_10px_35px_rgba(0,0,0,0.2)]',
        hover &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-border-light hover:bg-surface-hover hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-heading-3 text-text-primary font-semibold', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-body text-text-secondary', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mt-4 flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  )
}
