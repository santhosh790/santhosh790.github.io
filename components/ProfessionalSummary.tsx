import React from 'react'
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section'

export function ProfessionalSummary() {
  return (
    <Section id="about">
      <SectionHeader>
        <SectionTitle>About</SectionTitle>
      </SectionHeader>

      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border bg-surface/60 p-8 md:p-10">
          <p className="text-body-lg text-text-secondary leading-relaxed">
            Most AI prototypes never become successful products. My passion is turning innovative ideas into reliable production systems.
          </p>

          <p className="mt-6 text-body-lg text-text-secondary leading-relaxed">
            I design and deliver <strong className="text-text-primary">production-grade AI solutions</strong> that transform complex business problems into measurable outcomes. With{' '}
            <strong className="text-text-primary">13+ years of industry experience spanning software engineering, machine learning, and AI systems</strong>, and a{' '}
            <strong className="text-text-primary">Ph.D. in Machine Learning</strong>, I specialize in developing enterprise AI platforms including semantic search, retrieval-augmented generation (RAG), forecasting solutions, and MLOps systems that improve customer experience while operating reliably at scale.
          </p>

          <p className="mt-6 text-body-lg text-text-secondary leading-relaxed">
            My background in backend engineering, technical leadership, applied machine learning, and research enables me to bridge the gap between experimentation and production. I build AI solutions that balance{' '}
            <strong className="text-text-primary">model performance, retrieval quality, latency, scalability, governance, and operational cost</strong> to create systems that deliver sustained business value.
          </p>

          <p className="mt-6 text-body-lg text-text-secondary leading-relaxed">
            I enjoy solving the complete AI lifecycle—from data exploration and model development to deployment, monitoring, evaluation, and continuous improvement—because successful AI is not just about building accurate models; it is about building systems that work reliably in the real world.
          </p>
        </div>
      </div>
    </Section>
  )
}
