import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { ResearchPublications } from '@/components/ResearchPublications'
import { SpeakingAndCredentials } from '@/components/SpeakingAndCredentials'

export const metadata: Metadata = {
  title: `Publications & Speaking | ${SITE_CONFIG.name}`,
  description: 'Research publications, speaking engagements, and academic credentials',
}

export default function CredentialsPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <h1 className="text-display-3 font-bold text-text-primary mb-4">
            Publications & Speaking
          </h1>
          <p className="text-heading-3 text-text-secondary max-w-3xl">
            Academic research, speaking engagements, and credentials from my doctoral research and teaching experience.
          </p>
          <p className="mt-4 text-body text-text-tertiary max-w-3xl">
            While my current focus is production AI engineering, this page documents my academic background and research contributions.
          </p>
        </div>

        <ResearchPublications />
        <div className="mt-16">
          <SpeakingAndCredentials />
        </div>
      </div>
    </main>
  )
}
