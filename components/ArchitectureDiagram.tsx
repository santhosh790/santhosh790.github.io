'use client'

import React, { useState } from 'react'

interface ArchitectureDiagramProps {
  title: string
  mermaidCode: string
  description?: string
}

export function ArchitectureDiagram({ title, mermaidCode, description }: ArchitectureDiagramProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between rounded-xl border border-border bg-background-secondary p-4 hover:border-accent/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏗️</span>
          <div className="text-left">
            <div className="text-body-lg font-semibold text-text-primary">{title}</div>
            {description && !isExpanded && (
              <div className="text-sm text-text-tertiary mt-1">{description}</div>
            )}
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-accent transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="mt-4 rounded-xl border border-border bg-surface/60 p-6 animate-slide-up">
          {description && (
            <p className="text-body text-text-secondary mb-6">{description}</p>
          )}
          <div className="overflow-x-auto">
            <pre className="rounded-lg bg-background p-4 text-sm text-text-secondary font-mono">
              <code className="whitespace-pre">{mermaidCode}</code>
            </pre>
          </div>
          <div className="mt-4 text-xs text-text-tertiary italic">
            Note: Visual architecture diagram rendering will be added in the next phase
          </div>
        </div>
      )}
    </div>
  )
}
