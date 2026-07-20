import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FEATURED_PROJECTS } from '@/lib/constants'

export function FeaturedProjects() {
  return (
    <Section id="projects">
      <SectionHeader>
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionSubtitle>
          Production AI systems built for enterprise scale. From search to RAG to MLOps infrastructure.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
        {FEATURED_PROJECTS.map((project, index) => (
          <Card
            key={project.id}
            hover
            className={`animate-slide-up overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-surface to-background-secondary ${
              project.category === 'flagship' ? 'lg:col-span-6' : 'lg:col-span-3'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className={project.category === 'flagship' ? 'lg:flex lg:items-start lg:justify-between lg:gap-8' : ''}>
              <div>
              {project.category === 'flagship' && (
                <Badge variant="primary" className="mb-3 w-fit">
                  ⭐ Flagship Project
                </Badge>
              )}
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-text-tertiary">
                {project.company} • {project.duration}
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="mt-2">{project.tagline}</CardDescription>
              </div>

              {project.category === 'flagship' && (
                <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 px-5 py-4 lg:mt-0 lg:w-[18rem]">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Why it matters</p>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{project.businessProblem}</p>
                </div>
              )}
            </CardHeader>

            <CardContent className={project.category === 'flagship' ? 'lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-8' : ''}>
              <div>
                <p className="text-text-secondary text-sm mb-5 leading-7">{project.description}</p>

                <div className="mb-5 rounded-2xl border border-border bg-background/60 px-4 py-4">
                  <h4 className="text-xs font-semibold text-text-tertiary uppercase mb-2 tracking-[0.16em]">Architecture Highlights</h4>
                  <ul className="space-y-2">
                    {project.architecture.slice(0, 3).map((item) => (
                      <li key={item} className="text-sm text-text-secondary flex items-start leading-6">
                        <span className="text-accent mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 lg:mt-0">
                <div className="rounded-2xl border border-border bg-surface/60 px-4 py-4">
                  <h4 className="text-xs font-semibold text-text-tertiary uppercase mb-3 tracking-[0.16em]">Impact</h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="text-sm text-text-secondary flex items-start leading-6">
                        <span className="text-accent mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.category !== 'flagship' && (
                  <div className="mt-4 rounded-2xl border border-border bg-background/60 px-4 py-4">
                    <h4 className="text-xs font-semibold text-text-tertiary uppercase mb-3 tracking-[0.16em]">Core Challenge</h4>
                    <p className="text-sm leading-6 text-text-secondary">{project.businessProblem}</p>
                  </div>
                )}
              </div>
            </CardContent>

            <CardFooter className="mt-6 border-t border-border pt-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/projects/${project.slug}`}>
                  Read Case Study →
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  )
}
