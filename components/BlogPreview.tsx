import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { BLOG_POSTS } from '@/lib/constants'

export function BlogPreview() {
  return (
    <Section id="blog" className="bg-background-secondary">
      <SectionHeader>
        <SectionTitle>Latest Writing</SectionTitle>
        <SectionSubtitle>
          Engineering judgement from production search, enterprise AI delivery, and retrieval system design.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BLOG_POSTS.slice(0, 2).map((post, index) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <Card
              hover
              className="h-full animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-text-tertiary mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="mt-2">{post.summary}</CardDescription>
              </CardHeader>

              <div className="mt-4 flex flex-wrap gap-2 px-6 pb-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/blog"
          className="rounded-full border border-border px-5 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
        >
          View all writing →
        </Link>
      </div>
    </Section>
  )
}
