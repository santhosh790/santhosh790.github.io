import { Hero } from '@/components/Hero'
import { ProfessionalSummary } from '@/components/ProfessionalSummary'
import { EngineeringPhilosophy } from '@/components/EngineeringPhilosophy'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { LeadershipDelivery } from '@/components/LeadershipDelivery'
import { OpenSourceProjects } from '@/components/OpenSourceProjects'
import { CurrentlyExploring } from '@/components/CurrentlyExploring'
import { CareerHighlights } from '@/components/CareerHighlights'
import { LeadershipProof } from '@/components/LeadershipProof'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { SpeakingAndCredentials } from '@/components/SpeakingAndCredentials'
import { TechStack } from '@/components/TechStack'
import { BlogPreview } from '@/components/BlogPreview'
import { ResearchPublications } from '@/components/ResearchPublications'
import { Contact } from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfessionalSummary />
      <EngineeringPhilosophy />
      <FeaturedProjects />
      <LeadershipDelivery />
      <OpenSourceProjects />
      <CurrentlyExploring />
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
