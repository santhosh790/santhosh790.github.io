import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { EngineeringPhilosophy } from '@/components/EngineeringPhilosophy'
import { CurrentlyExploring } from '@/components/CurrentlyExploring'

export const metadata: Metadata = {
  title: `About | ${SITE_CONFIG.name}`,
  description: 'Engineering philosophy and approach to building production AI systems',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-display-3 font-bold text-text-primary mb-6">About</h1>
        <p className="text-heading-3 text-text-secondary mb-12">
          How I approach building production AI systems
        </p>
        
        {/* Professional Summary */}
        <section className="mb-16">
          <div className="rounded-2xl border border-border bg-surface/60 p-8 md:p-10">
            {/* Quick Facts */}
            <div className="mb-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚡</span>
                <h2 className="text-heading-3 font-bold text-text-primary">Quick Facts</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">13+</div>
                  <div className="text-xs text-text-tertiary mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">Ph.D.</div>
                  <div className="text-xs text-text-tertiary mt-1">Machine Learning</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">5</div>
                  <div className="text-xs text-text-tertiary mt-1">AI Systems</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">Azure</div>
                  <div className="text-xs text-text-tertiary mt-1">Databricks</div>
                </div>
              </div>
            </div>

            <p className="text-heading-3 text-text-primary font-semibold leading-relaxed mb-4">
              Most AI prototypes never become successful products. My passion is turning innovative ideas into reliable production systems.
            </p>

            <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
              <strong className="text-text-primary">Specialization:</strong> LLM • RAG • AI Agents • Semantic Search • MLOps & LLMOps
            </p>

            <div className="space-y-6">
              <p className="text-body-lg text-text-secondary leading-relaxed">
                I design and deliver <strong className="text-text-primary">scalable AI solutions</strong> that transform complex business problems into measurable outcomes. With{' '}
                <strong className="text-text-primary">13+ years of industry experience spanning software engineering, machine learning, and AI systems</strong>, and a{' '}
                <strong className="text-text-primary">Ph.D. in Machine Learning</strong>, I specialize in developing enterprise AI platforms including semantic search, retrieval-augmented generation (RAG), forecasting solutions, and MLOps systems that improve customer experience while operating reliably at scale.
              </p>

              <p className="text-body-lg text-text-secondary leading-relaxed">
                My background in backend engineering, technical leadership, applied machine learning, and research enables me to bridge the gap between experimentation and production. I build AI solutions that balance{' '}
                <strong className="text-text-primary">model performance, retrieval quality, latency, scalability, governance, and operational cost</strong> to create systems that deliver sustained business value.
              </p>

              <p className="text-body-lg text-text-secondary leading-relaxed">
                I enjoy solving the complete AI lifecycle—from data exploration and model development to deployment, monitoring, evaluation, and continuous improvement—because successful AI is not just about building accurate models; it is about building systems that work reliably in the real world.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Philosophy */}
        <EngineeringPhilosophy />

        {/* Currently Exploring */}
        <div className="mt-16">
          <CurrentlyExploring />
        </div>
      </div>
    </main>
  )
}
