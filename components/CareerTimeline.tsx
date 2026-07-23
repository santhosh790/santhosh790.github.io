import React from 'react'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'

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
          'Led development of enterprise AI systems including semantic search, RAG chatbots, MLOps platform, and forecasting pipelines. Technical lead for AI initiatives involving cross-functional teams (Product, Engineering, Support). Architected and deployed production systems serving millions of customers.',
        tags: ['Semantic Search', 'RAG', 'MLOps', 'Azure Databricks', 'GPT-4', 'Team Leadership'],
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
        period: 'July 2020 – Jun 2022',
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
        period: 'Apr 2016 – July 2020',
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
        period: 'Sept 2014 – Apr 2016',
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
        period: 'Dec 2012 – Aug 2014',
        description:
          'Developed enterprise Java applications and web services. Built scalable backend systems and contributed to full-stack development projects for global enterprise clients.',
        tags: ['Java', 'AWS', 'AEM', 'Web Services'],
      },
    ],
  },
]

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

      <div className="mx-auto max-w-5xl">
        {CAREER_TIMELINE.map((entry, index) => (
          <div key={index} className="relative">
            {/* Timeline Line */}
            {index < CAREER_TIMELINE.length - 1 && (
              <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-border" />
            )}

            <div className="relative mb-12 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Period Badge */}
              <div className="mb-4 flex items-center gap-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background shadow-lg">
                  {entry.period === 'Current' ? (
                    <span className="text-xl">⭐</span>
                  ) : (
                    <span className="text-sm font-bold text-accent">{entry.period.split(' ')[0]}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-heading-3 font-bold text-text-primary">{entry.period}</h3>
                  {entry.period === 'Current' && (
                    <p className="text-sm text-accent font-medium">Ongoing</p>
                  )}
                </div>
              </div>

              {/* Company Card */}
              <div className="ml-16 rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-8 shadow-md hover:border-accent/30 hover:shadow-xl transition-all">
                {/* Company Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-heading-2 font-bold text-text-primary">{entry.company}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-tertiary">
                      <span>📍</span>
                      <span>{entry.location}</span>
                    </div>
                  </div>
                </div>

                {/* Roles */}
                <div className="space-y-6">
                  {entry.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      {roleIndex > 0 && <div className="mb-6 border-t border-border" />}
                      
                      <div className="flex items-start gap-4 mb-3">
                        {role.current && (
                          <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                            Current Role
                          </span>
                        )}
                      </div>

                      <h5 className="text-heading-3 font-semibold text-text-primary mb-2">
                        {role.title}
                      </h5>
                      
                      <p className="text-sm text-text-tertiary mb-4 flex items-center gap-2">
                        <span>📅</span>
                        <span>{role.period}</span>
                      </p>

                      <p className="text-body text-text-secondary leading-relaxed mb-5">
                        {role.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-secondary hover:border-accent/50 hover:bg-accent/5 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
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
