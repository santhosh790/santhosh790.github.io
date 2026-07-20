import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS, SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Blog | ${SITE_CONFIG.name}`,
  description: 'Technical writing on production AI engineering, search, and LLM systems.',
}

export default function BlogPage() {
  const currentExperienceCategories = new Set([
    'LLM Engineering',
    'Production AI Lessons',
    'LLM Fundamentals',
    'AI Systems',
  ])

  const dataScienceCategories = new Set([
    'Applied ML Research',
    'Data Science Practice',
    'Data Engineering',
    'ML Foundations',
    'Data Science Foundations',
  ])

  const currentExperiencePosts = BLOG_POSTS.filter((post) =>
    currentExperienceCategories.has(post.category)
  )
  const dataSciencePosts = BLOG_POSTS.filter((post) => dataScienceCategories.has(post.category))
  const archivePosts = BLOG_POSTS.filter(
    (post) =>
      !currentExperienceCategories.has(post.category) && !dataScienceCategories.has(post.category)
  )

  const renderPostGrid = (posts: (typeof BLOG_POSTS)[number][]) => (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group rounded-[1.5rem] border border-border bg-surface/70 p-6 transition-all hover:-translate-y-1 hover:border-border-light hover:bg-surface-hover"
        >
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-text-primary group-hover:text-accent transition-colors">
            {post.title}
          </h2>
          <p className="mt-3 text-text-secondary leading-7">{post.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  )

  return (
    <div className="bg-background pt-28 pb-20">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <header className="mb-12 border-b border-border pb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Writing</p>
          <h1 className="mt-4 text-display-3 md:text-display-2 font-bold text-text-primary">
            Engineering Notes from Production
          </h1>
          <p className="mt-5 max-w-3xl text-body-lg text-text-secondary">
            Curated writing across production AI systems, applied machine learning, and data science foundations.
          </p>
        </header>

        <section className="mb-14">
          <h2 className="text-display-5 font-semibold text-text-primary">Current AI Engineering</h2>
          <p className="mt-2 mb-6 text-text-secondary">
            Recent writing aligned with production LLM, search, and enterprise AI delivery.
          </p>
          {renderPostGrid(currentExperiencePosts)}
        </section>

        <section className="mb-14 border-t border-border pt-10">
          <h2 className="text-display-5 font-semibold text-text-primary">Data Science and ML Foundations</h2>
          <p className="mt-2 mb-6 text-text-secondary">
            Applied machine learning and data science articles that show modeling depth and evaluation rigor.
          </p>
          {renderPostGrid(dataSciencePosts)}
        </section>

        {archivePosts.length > 0 && (
          <section className="border-t border-border pt-10">
            <h2 className="text-display-5 font-semibold text-text-primary">Engineering Archives</h2>
            <p className="mt-2 mb-6 text-text-secondary">
              Selected platform and architecture notes from previous engineering domains.
            </p>
            {renderPostGrid(archivePosts)}
          </section>
        )}
      </div>
    </div>
  )
}