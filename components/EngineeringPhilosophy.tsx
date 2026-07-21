import React from 'react'
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section'

export function EngineeringPhilosophy() {
  const principles = [
    'Retrieval quality before prompt engineering',
    'Measure before optimizing',
    'Reliability over novelty',
    'Simple systems outperform complex systems in production',
    'Evaluation should drive every deployment decision',
  ]

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Engineering Philosophy</SectionTitle>
      </SectionHeader>

      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border bg-background-secondary p-8 md:p-10">
          <p className="text-heading-3 text-text-primary font-semibold mb-8">
            I believe successful AI products are built through engineering discipline rather than larger models.
          </p>

          <div className="space-y-2 mb-8">
            <p className="text-body font-semibold text-text-secondary">My design principles are:</p>
          </div>

          <ul className="space-y-4">
            {principles.map((principle, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-4 mt-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-semibold text-accent">
                  {index + 1}
                </span>
                <span className="text-body-lg text-text-secondary pt-1">{principle}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-body-lg text-text-primary font-medium">
            My goal is to build AI systems that engineers can confidently operate and customers can trust.
          </p>
        </div>
      </div>
    </Section>
  )
}
