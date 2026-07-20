import React from 'react'
import Image from 'next/image'
import { CERTIFICATIONS, SPEAKING } from '@/lib/constants'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'

export function SpeakingAndCredentials() {
  return (
    <Section className="bg-background-secondary">
      <SectionHeader>
        <SectionTitle>Speaking and Credentials</SectionTitle>
        <SectionSubtitle>
          Teaching, invited talks, and certifications that reinforce technical leadership.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <div className="space-y-5">
          {SPEAKING.map((talk, index) => (
            <article
              key={talk.title}
              className="animate-fade-in rounded-[1.5rem] border border-border bg-surface/65 p-6"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="text-heading-3 font-semibold text-text-primary">{talk.title}</h3>
              <p className="mt-2 text-sm text-text-tertiary">
                {talk.venue} • {talk.date} • {talk.location}
              </p>
              <p className="mt-4 leading-7 text-text-secondary">{talk.summary}</p>
              {talk.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {talk.links.map((link, linkIndex) => (
                    <a
                      key={`${talk.title}-${linkIndex}`}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-text-secondary hover:border-accent hover:text-text-primary"
                    >
                      Resource {linkIndex + 1}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src="/images/FDPPoster1.jpg"
              alt="Faculty development program poster one"
              width={400}
              height={192}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <Image
              src="/images/FDPPoster2.jpg"
              alt="Faculty development program poster two"
              width={400}
              height={192}
              className="h-48 w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <aside className="rounded-[1.8rem] border border-border bg-surface/75 p-6">
          <Image
            src="/images/site-logo.png"
            alt="Site logo"
            width={64}
            height={64}
            className="h-16 w-16 rounded-xl bg-background p-2"
          />
          <h3 className="mt-4 text-xl font-semibold text-text-primary">Core Certifications</h3>
          <ul className="mt-5 space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.title} className="rounded-xl border border-border bg-background/60 p-4">
                <p className="font-medium text-text-primary">{cert.title}</p>
                <p className="text-sm text-text-tertiary">{cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-accent hover:text-accent-light"
                  >
                    Verify credential
                  </a>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
