import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS, SITE_CONFIG } from '@/lib/constants'

type BlogSlug = (typeof BLOG_POSTS)[number]['slug']

function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)

  if (!post) {
    return {
      title: `Article Not Found | ${SITE_CONFIG.name}`,
    }
  }

  return {
    title: `${post.title} | ${SITE_CONFIG.name}`,
    description: post.summary,
  }
}

export default function BlogPostPage({ params }: { params: { slug: BlogSlug } }) {
  const post = getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-background pt-28 pb-20">
      <article className="container mx-auto max-w-4xl px-6 md:px-8">
        <Link href="/blog" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
          ← Back to writing
        </Link>

        <header className="mt-8 border-b border-border pb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-text-tertiary uppercase tracking-[0.14em]">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mt-5 text-display-3 md:text-display-2 text-text-primary font-bold leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-body-lg text-text-secondary leading-8">{post.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-10 space-y-6 text-body text-text-secondary leading-8">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface/70 p-5">
          <p className="text-sm text-text-tertiary">Original reference</p>
          <a
            href={post.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex text-sm text-accent hover:text-accent-light"
          >
            Open source article ↗
          </a>
        </div>
      </article>
    </div>
  )
}