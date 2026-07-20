import React from 'react'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { FEATURED_PROJECTS } from '@/lib/constants'

export function ExperienceTimeline() {
  const initiatives = FEATURED_PROJECTS.map((project) => ({
    title: project.title,
    company: project.company,
    period: project.duration,
    description: [project.businessProblem, ...project.outcomes.slice(0, 2)],
    tags: project.tags.slice(0, 5),
  }))

  return (
    <Section id="experience" className="bg-background-secondary">
      <SectionHeader>
        <SectionTitle>Selected Production Initiatives</SectionTitle>
        <SectionSubtitle>
          Four production systems that show how I work across retrieval, LLM applications, platform engineering, and applied machine learning.
        </SectionSubtitle>
      </SectionHeader>

      <div className="space-y-8">
        {initiatives.map((exp, index) => (
          <div
            key={index}
            className="animate-fade-in rounded-[1.75rem] border border-border bg-surface/70 p-6 md:p-8"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
              <div>
                <div className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-accent">
                  {exp.period}
                </div>
              </div>

              <div>
                <h3 className="text-heading-3 text-text-primary font-semibold mb-1">{exp.title}</h3>
                <div className="text-text-secondary mb-4">{exp.company}</div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-text-secondary flex items-start leading-7">
                      <span className="text-accent mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
