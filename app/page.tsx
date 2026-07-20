import { Hero } from '@/components/Hero'
import { CareerHighlights } from '@/components/CareerHighlights'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { TechStack } from '@/components/TechStack'
import { BlogPreview } from '@/components/BlogPreview'
import { Contact } from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CareerHighlights />
      <FeaturedProjects />
      <ExperienceTimeline />
      <TechStack />
      <BlogPreview />
      <Contact />
    </>
  )
}
