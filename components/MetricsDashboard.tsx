import React from 'react'

export function MetricsDashboard() {
  const metrics = [
    {
      value: '18%',
      label: 'Support Reduction',
      detail: '$420K annual savings',
      icon: '📉',
      color: 'text-green-500',
    },
    {
      value: '45%',
      label: 'Satisfaction Increase',
      detail: '62% → 90%',
      icon: '📈',
      color: 'text-blue-500',
    },
    {
      value: '98%',
      label: 'Faster Deployment',
      detail: 'Weeks → Hours',
      icon: '⚡',
      color: 'text-yellow-500',
    },
    {
      value: '10K',
      label: 'QPS',
      detail: 'Production Scale',
      icon: '🚀',
      color: 'text-purple-500',
    },
    {
      value: '2M',
      label: 'Embeddings',
      detail: 'Indexed Documents',
      icon: '💾',
      color: 'text-indigo-500',
    },
    {
      value: '40ms',
      label: 'P99 Latency',
      detail: 'Search Performance',
      icon: '⏱️',
      color: 'text-orange-500',
    },
  ]

  return (
    <section className="relative py-16 bg-background-secondary border-y border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="container mx-auto max-w-7xl px-6 md:px-8 relative">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Production Impact
          </p>
          <h2 className="text-heading-1 md:text-display-3 font-bold text-text-primary">
            Enterprise AI Systems at Scale
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-surface/80 backdrop-blur p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-accent/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className={`text-4xl md:text-5xl font-bold ${metric.color} mb-2 group-hover:text-accent transition-colors`}>
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-text-primary mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-text-tertiary">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            Delivered across 5 enterprise AI platforms at <strong className="text-text-primary">Eurowings (Lufthansa Group)</strong>, 
            serving millions of customers with reliable, production-grade AI systems.
          </p>
        </div>
      </div>
    </section>
  )
}
