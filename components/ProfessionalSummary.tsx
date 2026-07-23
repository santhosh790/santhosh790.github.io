'use client'

import React, { useState } from 'react'
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section'

export function ProfessionalSummary() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Section id="about">
      <SectionHeader>
        <SectionTitle>About</SectionTitle>
      </SectionHeader>

      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border bg-surface/60 p-8 md:p-10">
          {/* Quick Facts - Always Visible */}
          <div className="mb-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚡</span>
              <h3 className="text-heading-3 font-bold text-text-primary">Quick Facts</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent">13+</div>
                <div className="text-xs text-text-tertiary mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">Ph.D.</div>
                <div className="text-xs text-text-tertiary mt-1">Machine Learning</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">5</div>
                <div className="text-xs text-text-tertiary mt-1">AI Systems</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">Azure</div>
                <div className="text-xs text-text-tertiary mt-1">Databricks</div>
              </div>
            </div>
          </div>

          {/* Main Hook - Always Visible */}
          <p className="text-heading-3 text-text-primary font-semibold leading-relaxed mb-4">
            Most AI prototypes never become successful products. My passion is turning innovative ideas into reliable production systems.
          </p>

          <p className="text-body-lg text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Specialization:</strong> Semantic Search • RAG • MLOps • Forecasting • AI Platforms
          </p>

          {/* Expandable Detailed Content */}
          {isExpanded && (
            <div className="mt-6 space-y-6 animate-slide-up">
              <p className="text-body-lg text-text-secondary leading-relaxed">
                I design and deliver <strong className="text-text-primary">production-grade AI solutions</strong> that transform complex business problems into measurable outcomes. With{' '}
                <strong className="text-text-primary">13+ years of industry experience spanning software engineering, machine learning, and AI systems</strong>, and a{' '}
                <strong className="text-text-primary">Ph.D. in Machine Learning</strong>, I specialize in developing enterprise AI platforms including semantic search, retrieval-augmented generation (RAG), forecasting solutions, and MLOps systems that improve customer experience while operating reliably at scale.
              </p>

              <p className="text-body-lg text-text-secondary leading-relaxed">
                My background in backend engineering, technical leadership, applied machine learning, and research enables me to bridge the gap between experimentation and production. I build AI solutions that balance{' '}
                <strong className="text-text-primary">model performance, retrieval quality, latency, scalability, governance, and operational cost</strong> to create systems that deliver sustained business value.
              </p>

              <p className="text-body-lg text-text-secondary leading-relaxed">
                I enjoy solving the complete AI lifecycle—from data exploration and model development to deployment, monitoring, evaluation, and continuous improvement—because successful AI is not just about building accurate models; it is about building systems that work reliably in the real world.
              </p>
            </div>
          )}

          {/* Read More/Less Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            <span>{isExpanded ? 'Read Less' : 'Read Full Story'}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  )
}
