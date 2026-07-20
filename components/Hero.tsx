'use client'

import React from 'react'
import Image from 'next/image'
import { HERO_SIGNALS, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_56%)]" />
      <div className="absolute right-0 top-24 hidden h-72 w-72 rounded-full bg-accent/10 blur-3xl lg:block" />
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 pb-20 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]">
          <div className="animate-fade-in">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-accent">
              {SITE_CONFIG.currentRole} at {SITE_CONFIG.company}
            </p>

            <h1 className="max-w-4xl text-display-2 md:text-[5.75rem] text-text-primary font-bold leading-[0.98]">
              Building production AI systems that survive real-world complexity.
            </h1>

            <p className="mt-6 text-heading-3 text-accent font-semibold">
              {SITE_CONFIG.name} · {SITE_CONFIG.title}
            </p>

            <p className="mt-8 max-w-3xl text-body-lg md:text-heading-3 text-text-secondary">
              {SITE_CONFIG.tagline}
            </p>

            <p className="mt-6 max-w-3xl text-body md:text-body-lg text-text-tertiary">
              I build reliable AI systems that work in production. Specializing in making search intelligent, LLMs useful, and ML operations repeatable at enterprise scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {HERO_SIGNALS.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-text-secondary backdrop-blur"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="shadow-[0_18px_50px_rgba(59,130,246,0.18)]">
                <a href={SOCIAL_LINKS.resume}>View Resume</a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Case Studies
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact
              </Button>
            </div>

            <p className="mt-10 text-body-sm text-text-tertiary">
              {SITE_CONFIG.company} • {SITE_CONFIG.location}
            </p>
          </div>

          <div className="relative animate-slide-up">
            <div className="panel-grid rounded-[2rem] border border-border bg-background-secondary/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-4 rounded-2xl border border-border bg-surface/70 p-3">
                <Image
                  src="/images/profile.png"
                  alt="Dr. Santhoshkumar"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div>
                  <p className="text-sm uppercase tracking-[0.14em] text-accent">Production AI Leadership</p>
                  <p className="text-text-primary font-semibold">Senior ML Engineer</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-accent">Current Focus</p>
                  <p className="mt-2 text-xl font-semibold text-text-primary">Search, LLMs, and MLOps</p>
                </div>
                <div className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-sm text-accent">
                  Production
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-surface/80 p-5">
                  <div className="text-4xl font-bold text-text-primary">13+</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.15em] text-text-tertiary">Years</div>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    Building ML systems across applied modeling, retrieval, and enterprise delivery.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface/80 p-5">
                  <div className="text-4xl font-bold text-text-primary">4</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.15em] text-text-tertiary">Systems</div>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    Production initiatives spanning semantic search, RAG, platform engineering, and forecasting.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-surface/60 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-text-tertiary">Proof points</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-text-secondary">
                  <li className="flex items-start"><span className="mr-3 mt-2 h-2 w-2 rounded-full bg-accent" />18% reduction in support calls through better search journeys</li>
                  <li className="flex items-start"><span className="mr-3 mt-2 h-2 w-2 rounded-full bg-accent" />45% improvement in search satisfaction with hybrid retrieval and evaluation</li>
                  <li className="flex items-start"><span className="mr-3 mt-2 h-2 w-2 rounded-full bg-accent" />Weeks-to-hours model deployment through governed Databricks MLOps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-text-tertiary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
