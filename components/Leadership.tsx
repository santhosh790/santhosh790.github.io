import React from 'react'
import { LEADERSHIP_HIGHLIGHTS } from '@/lib/constants'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'

export function Leadership() {
  return (
    <Section id="leadership" className="bg-background-secondary">
      <SectionHeader>
        <SectionTitle>Leadership & Technical Delivery</SectionTitle>
        <SectionSubtitle>
          10+ years leading technical teams and delivering enterprise AI systems from concept to production
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-3">
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

    </Section>
  )
}
