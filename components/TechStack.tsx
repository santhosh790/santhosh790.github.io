import React from 'react'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { TECH_STACK } from '@/lib/constants'

export function TechStack() {
  return (
    <Section id="skills">
      <SectionHeader>
        <SectionTitle>Tech Stack</SectionTitle>
        <SectionSubtitle>
          Capabilities organized by system responsibility rather than a flat keyword list.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(TECH_STACK).map(([category, technologies], index) => (
          <div
            key={category}
            className="animate-fade-in rounded-[1.5rem] border border-border bg-surface/65 p-6"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-heading-3 text-text-primary font-semibold mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-background/60 px-4 py-2 text-text-secondary hover:border-accent hover:text-text-primary transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
