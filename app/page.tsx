import { Hero } from '@/components/Hero'
import { CareerHighlights } from '@/components/CareerHighlights'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { OpenSourceProjects } from '@/components/OpenSourceProjects'
import { LeadershipProof } from '@/components/LeadershipProof'
import { ResearchPublications } from '@/components/ResearchPublications'
import { SpeakingAndCredentials } from '@/components/SpeakingAndCredentials'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { TechStack } from '@/components/TechStack'
import { BlogPreview } from '@/components/BlogPreview'
import { Contact } from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <OpenSourceProjects />
      <CareerHighlights />
      <LeadershipProof />
      <ExperienceTimeline />
      <SpeakingAndCredentials />
      <TechStack />
      <BlogPreview />
      <ResearchPublications />
      <Contact />
    </>
  )
}
