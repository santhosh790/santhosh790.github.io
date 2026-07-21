import React from 'react'
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section'

export function LeadershipDelivery() {
  const responsibilities = [
    'Technical lead for enterprise AI initiatives involving product managers, software engineers, data scientists, and business stakeholders.',
    'Designed end-to-end AI architectures from requirements gathering through production deployment and monitoring.',
    'Standardized reusable MLOps patterns using Azure Databricks and MLflow to accelerate ML delivery.',
    'Collaborated across engineering and business teams to translate customer problems into production AI solutions.',
    'Mentored engineers on production ML practices, evaluation methodologies, and system design.',
  ]

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Leadership & Delivery</SectionTitle>
      </SectionHeader>

      <div className="mx-auto max-w-4xl">
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

        <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-6">
          <p className="text-sm text-text-tertiary italic">
            Note: Leadership responsibilities listed above reflect technical leadership and cross-functional 
            collaboration. Direct people management responsibilities are documented in individual project 
            ownership sections.
          </p>
        </div>
      </div>
    </Section>
  )
}
