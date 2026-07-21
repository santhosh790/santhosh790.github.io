import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FEATURED_PROJECTS, OPEN_SOURCE_PROJECTS, SITE_CONFIG } from '@/lib/constants'

type ProjectSlug = (typeof FEATURED_PROJECTS)[number]['slug'] | (typeof OPEN_SOURCE_PROJECTS)[number]['slug']

function getProject(slug: string) {
  const featured = FEATURED_PROJECTS.find((project) => project.slug === slug)
  if (featured) return { ...featured, type: 'featured' as const }
  
  const opensource = OPEN_SOURCE_PROJECTS.find((project) => project.slug === slug)
  if (opensource) return { ...opensource, type: 'opensource' as const }
  
  return null
}

export function generateStaticParams() {
  return [
    ...FEATURED_PROJECTS.map((project) => ({ slug: project.slug })),
    ...OPEN_SOURCE_PROJECTS.map((project) => ({ slug: project.slug })),
  ]
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug)

  if (!project) {
    return {
      title: `Project Not Found | ${SITE_CONFIG.name}`,
    }
  }

  return {
    title: `${project.title} | ${SITE_CONFIG.name}`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: ProjectSlug } }) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  const isOpenSource = project.type === 'opensource'
  const backLink = isOpenSource ? '/#open-source' : '/#projects'

  return (
    <div className="bg-background pt-28 pb-20">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <Link href={backLink} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
          ← Back to projects
        </Link>

        <header className="mt-8 border-b border-border pb-12">
          {isOpenSource && (
            <div className="mb-4">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Open Source Project
              </span>
            </div>
          )}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-text-tertiary">
            {'company' in project && <span>{project.company}</span>}
            {'company' in project && 'duration' in project && <span>•</span>}
            {'duration' in project && <span>{project.duration}</span>}
          </div>
          <h1 className="text-display-3 md:text-display-2 text-text-primary font-bold leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-heading-3 text-accent">{project.tagline}</p>
          <p className="mt-6 max-w-3xl text-body-lg text-text-secondary">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-14 grid gap-14">
          <section>
            <h2 className="text-heading-2 text-text-primary font-semibold">
              {isOpenSource ? 'Problem Statement' : 'Business Problem'}
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">{project.businessProblem}</p>
          </section>

          {!isOpenSource && 'architecture' in project && (
            <section>
              <h2 className="text-heading-2 text-text-primary font-semibold">Architecture</h2>
              <ul className="mt-6 grid gap-4">
                {project.architecture.map((item) => (
                  <li key={item} className="rounded-2xl border border-border bg-surface px-5 py-4 text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {!isOpenSource && 'technicalDecisions' in project && (
            <section>
              <h2 className="text-heading-2 text-text-primary font-semibold">Technical Decisions</h2>
              <ul className="mt-6 space-y-4">
                {project.technicalDecisions.map((item) => (
                  <li key={item} className="flex items-start text-body text-text-secondary">
                    <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-accent"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {isOpenSource && 'technicalChallenges' in project && (
            <section>
              <h2 className="text-heading-2 text-text-primary font-semibold">Technical Challenges</h2>
              <ul className="mt-6 space-y-4">
                {project.technicalChallenges.map((item) => (
                  <li key={item} className="flex items-start text-body text-text-secondary">
                    <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-accent"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {!isOpenSource && 'productionChallenges' in project && (
            <section>
              <h2 className="text-heading-2 text-text-primary font-semibold">Production Challenges</h2>
              <ul className="mt-6 space-y-4">
                {project.productionChallenges.map((item) => (
                  <li key={item} className="flex items-start text-body text-text-secondary">
                    <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-accent"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-heading-2 text-text-primary font-semibold">
              {isOpenSource ? 'Results' : 'Outcomes'}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.outcomes.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-background-secondary px-5 py-4 text-text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </section>

          {project.links.length > 0 && (
            <section>
              <h2 className="text-heading-2 text-text-primary font-semibold">
                {isOpenSource ? 'View on GitHub' : 'Related Links'}
              </h2>
              <div className="mt-6 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}