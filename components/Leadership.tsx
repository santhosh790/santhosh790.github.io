import React from 'react'
import { LEADERSHIP_HIGHLIGHTS } from '@/lib/constants'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'

export function Leadership() {
  const responsibilities = [
    'Technical lead for enterprise AI initiatives involving product managers, software engineers, data scientists, and business stakeholders.',
    'Designed end-to-end AI architectures from requirements gathering through production deployment and monitoring.',
    'Standardized reusable MLOps patterns using Azure Databricks and MLflow to accelerate ML delivery.',
    'Collaborated across engineering and business teams to translate customer problems into production AI solutions.',
    'Mentored engineers on production ML practices, evaluation methodologies, and system design.',
  ]

  return (
    <Section id="leadership" className="bg-background-secondary">
      <SectionHeader>
        <SectionTitle>Leadership & Technical Delivery</SectionTitle>
        <SectionSubtitle>
          10+ years leading technical teams and delivering enterprise AI systems from concept to production
        </SectionSubtitle>
      </SectionHeader>

      {/* Career Highlights Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {LEADERSHIP_HIGHLIGHTS.map((item, index) => (
          <article
            key={item.title}
            className="animate-fade-in rounded-[1.5rem] border border-border bg-surface/70 p-6"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-heading-3 font-semibold text-text-primary">{item.title}</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-accent">{item.detail}</p>
            <p className="mt-4 text-text-secondary leading-7">{item.description}</p>
          </article>
        ))}
      </div>

      {/* Key Responsibilities */}
      <div className="mx-auto max-w-4xl">
        <h3 className="text-heading-2 font-bold text-text-primary mb-6 text-center">
          Key Leadership Responsibilities
        </h3>
        <ul className="space-y-4">
          {responsibilities.map((item, index) => (
            <li
              key={index}
              className="flex items-start rounded-2xl border border-border bg-surface/60 p-5 transition-all hover:border-accent/30 hover:bg-surface/80"
            >
              <span className="mr-4 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              <span className="text-body-lg text-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
