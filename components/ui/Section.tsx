import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  id?: string
  containerClassName?: string
}

export function Section({ children, id, className, containerClassName, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative py-20 md:py-32', className)}
      {...props}
    >
      <div className={cn('container mx-auto max-w-7xl px-6 md:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-12 md:mb-16', className)} {...props}>
      {children}
    </div>
  )
}

export function SectionTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('text-display-3 md:text-display-2 text-text-primary font-bold mb-4', className)} {...props}>
      {children}
    </h2>
  )
}

export function SectionSubtitle({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-body-lg text-text-secondary max-w-3xl', className)} {...props}>
      {children}
    </p>
  )
}
