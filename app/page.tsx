import { Hero } from '@/components/Hero'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { CareerTimeline } from '@/components/CareerTimeline'
import { OpenSourceProjects } from '@/components/OpenSourceProjects'
import { TechStack } from '@/components/TechStack'
import { BlogPreview } from '@/components/BlogPreview'
import { Contact } from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <CareerTimeline />
      <OpenSourceProjects />
      <TechStack />
      <BlogPreview />
      <Contact />
    </>
  )
}
