'use client'

import React from 'react'
import Image from 'next/image'
import { HERO_SIGNALS, SITE_CONFIG } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_56%)]" />
      <div className="absolute right-0 top-24 hidden h-72 w-72 rounded-full bg-accent/10 blur-3xl lg:block" />
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 pb-20 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]">
          <div className="animate-fade-in">
            <h1 className="max-w-4xl text-display-3 md:text-display-2 text-text-primary font-bold leading-tight">
              {SITE_CONFIG.name}
            </h1>

            <p className="mt-6 text-heading-2 md:text-heading-1 text-accent font-semibold">
              Senior ML Engineer | Senior Data Scientist
            </p>

            <p className="mt-8 max-w-3xl text-body-lg md:text-heading-3 text-text-secondary">
              I build reliable <strong className="text-text-primary">enterprise search, RAG, and MLOps systems</strong>—from retrieval evaluation and architecture through monitored delivery.
            </p>

            <p className="mt-6 max-w-3xl text-body-lg text-text-tertiary">
              At <strong className="text-text-secondary">Eurowings Digital (Lufthansa Group)</strong>, I work on AI platforms that improve self-service and make ML delivery more repeatable.
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">Highlights</p>
              <ul className="space-y-3 text-body text-text-secondary">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span><strong className="text-text-primary">4 production AI systems</strong> across semantic search, RAG, MLOps, and forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span><strong className="text-text-primary">13+ years</strong> across software engineering, data analytics, and machine learning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span><strong className="text-text-primary">Ph.D. in Information Technology</strong> with machine-learning research focus</span>
                </li>
              </ul>
            </div>

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
                <a href="#projects">View case studies</a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
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
                  <p className="text-sm uppercase tracking-[0.14em] text-accent">Current Role</p>
                  <p className="text-text-primary font-semibold">Senior ML Engineer | Senior Data Scientist</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-surface/80 p-5">
                  <div className="text-4xl font-bold text-text-primary">13+</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.15em] text-text-tertiary">Years</div>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    Software engineering, data analytics, and machine learning.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface/80 p-5">
                  <div className="text-4xl font-bold text-text-primary">4</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.15em] text-text-tertiary">Production Systems</div>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    Search, RAG, MLOps, and forecasting for enterprise operations.
                  </p>
                </div>
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
