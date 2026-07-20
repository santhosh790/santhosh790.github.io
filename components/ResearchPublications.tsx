import React from 'react'
import Image from 'next/image'
import { PUBLICATIONS } from '@/lib/constants'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'

export function ResearchPublications() {
  return (
    <Section id="research">
      <SectionHeader>
        <SectionTitle>Selected Publications</SectionTitle>
        <SectionSubtitle>
          Optional reading for deeper technical context and academic work.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
        <div className="space-y-5">
          {PUBLICATIONS.map((paper, index) => (
            <article
              key={paper.title}
              className="animate-fade-in rounded-[1.5rem] border border-border bg-surface/65 p-6"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-accent">
                  {paper.year}
                </span>
                <p className="text-sm text-text-tertiary">{paper.venue}</p>
              </div>
              <h3 className="mt-4 text-heading-3 font-semibold text-text-primary">{paper.title}</h3>
              <p className="mt-3 text-text-secondary leading-7">{paper.impact}</p>
              <a
                href={paper.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-light"
              >
                View publication
              </a>
            </article>
          ))}
        </div>

        <aside className="rounded-[1.8rem] border border-border bg-surface/70 p-6">
          <Image
            src="/images/research-network.jpg"
            alt="Research and social network visualization"
            width={360}
            height={208}
            className="h-52 w-full rounded-2xl object-cover"
          />
          <h3 className="mt-5 text-xl font-semibold text-text-primary">Technical Background</h3>
          <p className="mt-3 text-text-secondary leading-7">
            Earlier publication work in trust and ranking complements current production engineering across search and LLM systems.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.12em] text-text-tertiary">5 publications</p>
        </aside>
      </div>
    </Section>
  )
}
