'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { SITE_CONFIG, NAVIGATION, SOCIAL_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    
    // If we're on the homepage, scroll to section
    if (pathname === '/') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      router.push(`/${href}`)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-text-primary hover:text-accent transition-colors"
          >
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              item.href === '/blog' ? (
                <Link
                  key={item.name}
                  href="/blog"
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
                >
                  {item.name}
                </button>
              )
            ))}
            <Button size="sm" asChild>
              <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {NAVIGATION.map((item) => (
                item.href === '/blog' ? (
                  <Link
                    key={item.name}
                    href="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-text-secondary hover:text-text-primary transition-colors text-left py-2"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-text-secondary hover:text-text-primary transition-colors text-left py-2"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <Button size="md" className="w-full" asChild>
                <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
