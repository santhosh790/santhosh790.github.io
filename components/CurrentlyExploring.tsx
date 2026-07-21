import React from 'react'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'

export function CurrentlyExploring() {
  const topics = [
    { icon: '🤖', label: 'Agentic AI' },
    { icon: '📊', label: 'AI Evaluation Frameworks' },
    { icon: '🔌', label: 'MCP Servers' },
    { icon: '📚', label: 'Long-context RAG' },
    { icon: '🏗️', label: 'LLM System Design' },
    { icon: '🎯', label: 'Retrieval Benchmarks' },
  ]

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Currently Exploring</SectionTitle>
        <SectionSubtitle>
          Staying current with emerging AI patterns and infrastructure
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-border bg-surface/60 p-6 transition-all hover:border-accent/40 hover:bg-surface/80 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{topic.icon}</span>
              <span className="text-body-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                {topic.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
