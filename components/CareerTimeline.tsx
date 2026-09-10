import React from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { LEADERSHIP_HIGHLIGHTS } from '@/lib/constants'
import cognizantLogo from '@/assets/images/cognizant_logo.jpeg'
import eurowingsLogo from '@/assets/images/eurowings_logo.jpeg'
import hitachiVantaraLogo from '@/assets/images/hitachi_vantara_logo.png'
import relevanceLabLogo from '@/assets/images/relevancelab_logo.jpeg'
import sapientLogo from '@/assets/images/sapient_logo.jpeg'

interface TimelineRole {
  title: string
  period: string
  description: string
  tags: string[]
  current?: boolean
}

interface TimelineEntry {
  company: string
  location: string
  period: string
  roles: TimelineRole[]
}

const CAREER_TIMELINE: TimelineEntry[] = [
  {
    company: 'Eurowings Digital GmbH',
    location: 'Europe',
    period: 'Current',
    roles: [
      {
        title: 'Senior ML Engineer | Senior Data Scientist',
        period: 'July 2022 – Present',
        description:
          'Led end-to-end development of 5 production AI systems across aviation and e-commerce domains. Architected semantic search (91% recall@10, 40ms P99), RAG solutions, MLOps/LLMOps pipelines, and AI agents. Achieved €420K annual savings through 18% support call reduction and 110% search satisfaction improvement. Technical lead for AI strategy and cross-functional delivery.',
        tags: ['Semantic Search', 'RAG', 'AI Agents', 'MLOps & LLMOps', 'Azure Databricks', 'Team Leadership'],
        current: true,
      },
    ],
  },
  {
    company: 'Hitachi Vantara (Hitachi Data Systems)',
    location: 'Pune, India',
    period: '2020 – 2022',
    roles: [
      {
        title: 'Senior Consultant (SC2)',
        period: 'July 2020 – June 2022',
        description:
          'Contributed to enterprise data analytics initiatives. Led cross-functional teams across analytics and machine learning models. Successfully delivered enterprise analytics solutions for global customers and led multidisciplinary teams to complete projects within scope and timelines.',
        tags: ['Java', 'AWS', 'AWS EC2', 'Scikit-learn', 'ML Models', 'AEM', 'Team Leadership'],
      },
    ],
  },
  {
    company: 'Relevance Lab',
    location: 'Bangalore, India',
    period: '2016 – 2020',
    roles: [
      {
        title: 'Team Lead',
        period: 'April 2016 – July 2020',
        description:
          'Led a team of 10+ professionals across project planning, execution, and delivery. Coordinated stakeholder communication and mentored team members. Ensured quality standards and delivery timelines were consistently met.',
        tags: ['Java', 'Kafka', 'Docker', 'AWS', 'AWS S3', 'AWS EC2', 'Team Leadership'],
      },
    ],
  },
  {
    company: 'Sapient',
    location: 'Bangalore, India',
    period: '2014 – 2016',
    roles: [
      {
        title: 'Associate Technology L2',
        period: 'September 2014 – April 2016',
        description:
          'Developed web applications using Adobe Experience Manager (AEM). Built backend services with Java and front-end solutions with JavaScript, HTML, and CSS. Contributed to enterprise digital experience platform delivery.',
        tags: ['Java', 'AWS', 'AEM', 'JavaScript', 'HTML', 'CSS'],
      },
    ],
  },
  {
    company: 'Cognizant',
    location: 'Chennai, India',
    period: '2012 – 2014',
    roles: [
      {
        title: 'Programmer Analyst',
        period: 'December 2012 – August 2014',
        description:
          'Developed enterprise Java applications and web services. Built scalable backend systems and contributed to full-stack development projects for global enterprise clients.',
        tags: ['Java', 'AWS', 'AEM', 'Web Services'],
      },
    ],
  },
]

const COMPANY_LOGOS: Record<string, StaticImageData> = {
  'Eurowings Digital GmbH': eurowingsLogo,
  'Hitachi Vantara (Hitachi Data Systems)': hitachiVantaraLogo,
  'Relevance Lab': relevanceLabLogo,
  Sapient: sapientLogo,
  Cognizant: cognizantLogo,
}

const EDUCATION_TIMELINE = [
  {
    institution: 'Vellore Institute of Technology',
    degree: 'Ph.D. in Information Technology',
    period: '2014 – 2020',
    location: 'India',
    description: 'Doctoral research in Machine Learning with focus on rumor control in online social networks using neural networks and bio-inspired algorithms.',
  },
  {
    institution: 'Vellore Institute of Technology',
    degree: 'Master\'s Degree in Software Engineering',
    period: '2007 – 2012',
    location: 'India',
    description: 'Advanced study in software engineering, algorithms, and system design.',
  },
]

export function CareerTimeline() {
  return (
    <Section id="career-timeline" className="bg-background-secondary">
      <SectionHeader>
        <SectionTitle>Career Journey</SectionTitle>
        <SectionSubtitle>
          13+ years building ML systems: from research to enterprise AI platforms at scale
        </SectionSubtitle>
      </SectionHeader>

      {/* Leadership Highlights Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {LEADERSHIP_HIGHLIGHTS.map((item, index) => (
          <article
            key={item.title}
            className="animate-fade-in rounded-[1.5rem] border border-border bg-surface/70 p-6"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-heading-3 font-semibold text-text-primary">{item.title}</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-accent">{item.detail}</p>
            <p className="mt-4 text-text-secondary leading-7">{item.description}</p>
          </article>
        ))}
      </div>

      {/* Key Leadership Responsibilities */}
      <div className="mx-auto max-w-4xl mb-16">
        <h3 className="text-heading-2 font-bold text-text-primary mb-6 text-center">
          Key Leadership Responsibilities
        </h3>
        <ul className="space-y-4">
          {[
            'Technical lead for enterprise AI initiatives involving product managers, software engineers, data scientists, and business stakeholders.',
            'Designed end-to-end AI architectures from requirements gathering through production deployment and monitoring.',
            'Standardized reusable MLOps patterns using Azure Databricks and MLflow to accelerate ML delivery.',
            'Collaborated across engineering and business teams to translate customer problems into production AI solutions.',
            'Mentored engineers on production ML practices, evaluation methodologies, and system design.',
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start rounded-2xl border border-border bg-surface/60 p-5 transition-all hover:border-accent/30 hover:bg-surface/80"
            >
              <span className="mr-4 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              <span className="text-body-lg text-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="overflow-x-auto pb-5 [scrollbar-color:rgb(var(--color-accent))_transparent]">
          <div className="relative grid min-w-[1060px] grid-cols-5 gap-4 px-1 pt-5">
            <div className="absolute left-8 right-8 top-[3.25rem] h-px bg-gradient-to-r from-accent via-accent/60 to-border" aria-hidden="true" />

            {CAREER_TIMELINE.map((entry, index) => {
              const role = entry.roles[0]

              return (
                <article
                  key={entry.company}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="relative z-10 mb-7 flex items-center gap-3">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 bg-background text-sm font-bold shadow-lg ${role.current ? 'border-accent text-accent' : 'border-border-light text-text-secondary'}`}>
                      <Image
                        src={COMPANY_LOGOS[entry.company]}
                        alt={`${entry.company} logo`}
                        width={36}
                        height={36}
                        className="h-8 w-8 rounded-full object-contain"
                      />
                    </div>
                    <span className={`text-sm font-semibold ${role.current ? 'text-accent' : 'text-text-tertiary'}`}>
                      {entry.period}
                    </span>
                  </div>

                  <div className={`flex min-h-[22rem] flex-col rounded-2xl border p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl ${role.current ? 'border-accent/40 bg-accent/10' : 'border-border bg-gradient-to-br from-surface to-background'}`}>
                    <div className="mb-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-tertiary">{entry.location}</p>
                      <h4 className="mt-2 text-lg font-bold leading-tight text-text-primary">{entry.company}</h4>
                    </div>

                    {role.current && (
                      <span className="mb-4 w-fit rounded-full bg-accent/20 px-2.5 py-1 text-xs font-semibold text-accent">
                        Current role
                      </span>
                    )}

                    <h5 className="text-base font-semibold leading-snug text-text-primary">{role.title}</h5>
                    <p className="mt-2 text-xs text-text-tertiary">{role.period}</p>
                    <p className="mt-4 flex-1 text-sm leading-6 text-text-secondary">{role.description}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {role.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="rounded-full border border-border bg-surface/70 px-2 py-1 text-[11px] text-text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        <p className="mt-2 text-center text-xs uppercase tracking-[0.16em] text-text-tertiary md:hidden">
          Scroll horizontally to explore the timeline
        </p>
      </div>

      {/* Summary Stats */}
      <div className="mt-12 mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
          <div className="text-3xl font-bold text-accent">13+</div>
          <div className="mt-2 text-xs text-text-tertiary uppercase tracking-wider">Years</div>
        </div>
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
          <div className="text-3xl font-bold text-accent">5</div>
          <div className="mt-2 text-xs text-text-tertiary uppercase tracking-wider">Companies</div>
        </div>
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
          <div className="text-3xl font-bold text-accent">5</div>
          <div className="mt-2 text-xs text-text-tertiary uppercase tracking-wider">Systems Shipped</div>
        </div>
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
          <div className="text-3xl font-bold text-accent">10+</div>
          <div className="mt-2 text-xs text-text-tertiary uppercase tracking-wider">Team Leadership</div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-20 mx-auto max-w-5xl">
        <div className="mb-12">
          <h3 className="text-heading-2 font-bold text-text-primary mb-2 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <span>Education</span>
          </h3>
          <p className="text-text-secondary">Academic foundation in ML research and software engineering</p>
        </div>

        <div className="space-y-6">
          {EDUCATION_TIMELINE.map((edu, index) => (
            <div 
              key={index} 
              className="rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-8 shadow-md hover:border-accent/30 hover:shadow-xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-heading-3 font-bold text-text-primary mb-1">{edu.degree}</h4>
                  <p className="text-text-secondary font-medium">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-accent">{edu.period}</p>
                  <p className="text-xs text-text-tertiary mt-1">📍 {edu.location}</p>
                </div>
              </div>
              <p className="text-body text-text-secondary leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
