import React from 'react'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { CAREER_METRICS } from '@/lib/constants'

export function CareerHighlights() {
  const metrics = [
    {
      value: CAREER_METRICS.experience,
      label: CAREER_METRICS.experienceLabel,
    },
    {
      value: CAREER_METRICS.systems,
      label: CAREER_METRICS.systemsLabel,
    },
    {
      value: CAREER_METRICS.llmApps,
      label: CAREER_METRICS.llmAppsLabel,
    },
    {
      value: CAREER_METRICS.focus,
      label: CAREER_METRICS.focusLabel,
    },
  ]

  return (
    <Section className="bg-background-secondary">
      <SectionHeader className="text-center">
        <SectionTitle>Impact at Scale</SectionTitle>
        <SectionSubtitle className="mx-auto">
          Production systems, measurable outcomes, and engineering ownership across search, LLM applications, and platform delivery.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="animate-fade-in rounded-[1.5rem] border border-border bg-surface/70 px-5 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
              {metric.value}
            </div>
            <div className="text-sm md:text-base text-text-secondary font-medium">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
