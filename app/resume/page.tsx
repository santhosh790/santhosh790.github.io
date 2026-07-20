import type { Metadata } from 'next'
import { FEATURED_PROJECTS, SITE_CONFIG, SOCIAL_LINKS, TECH_STACK } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Resume | ${SITE_CONFIG.name}`,
  description: `${SITE_CONFIG.name} professional summary and selected production AI work.`,
}

export default function ResumePage() {
  return (
    <div className="bg-background pt-28 pb-20">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <header className="border-b border-border pb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Professional Summary
              </p>
              <h1 className="mt-3 text-display-3 md:text-display-2 font-bold text-text-primary">
                {SITE_CONFIG.name}
              </h1>
              <p className="mt-3 text-heading-3 text-accent">{SITE_CONFIG.title}</p>
              <p className="mt-6 max-w-3xl text-body-lg text-text-secondary">{SITE_CONFIG.description}</p>
            </div>

            <div className="text-sm text-text-secondary md:text-right">
              <div>{SITE_CONFIG.company}</div>
              <div>{SITE_CONFIG.location}</div>
              <a href={`mailto:${SITE_CONFIG.email}`} className="mt-2 block hover:text-text-primary">
                {SITE_CONFIG.email}
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-text-primary">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </header>

        <section className="mt-12">
          <h2 className="text-heading-2 font-semibold text-text-primary">Current Focus</h2>
          <p className="mt-4 max-w-3xl text-body text-text-secondary">
            Building enterprise AI systems across semantic search, LLM applications, and MLOps. My work focuses on reliable retrieval,
            production evaluation, governance, and scalable deployment on Azure and Databricks.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-heading-2 font-semibold text-text-primary">Selected Production Work</h2>
          <div className="mt-6 grid gap-5">
            {FEATURED_PROJECTS.map((project) => (
              <div key={project.id} className="rounded-2xl border border-border bg-surface px-5 py-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
                    <p className="mt-1 text-text-secondary">{project.tagline}</p>
                  </div>
                  <div className="text-sm text-text-tertiary">
                    {project.company} • {project.duration}
                  </div>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.impact.map((item) => (
                    <li key={item} className="rounded-full border border-border px-3 py-1 text-sm text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-heading-2 font-semibold text-text-primary">Core Stack</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {Object.entries(TECH_STACK).map(([category, items]) => (
              <div key={category} className="rounded-2xl border border-border bg-background-secondary px-5 py-5">
                <h3 className="text-lg font-semibold text-text-primary">{category}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{items.join(' • ')}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}