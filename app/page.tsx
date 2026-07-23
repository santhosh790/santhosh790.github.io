import { Hero } from '@/components/Hero'
import { MetricsDashboard } from '@/components/MetricsDashboard'
import { ProfessionalSummary } from '@/components/ProfessionalSummary'
import { EngineeringPhilosophy } from '@/components/EngineeringPhilosophy'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { Leadership } from '@/components/Leadership'
import { CareerTimeline } from '@/components/CareerTimeline'
import { OpenSourceProjects } from '@/components/OpenSourceProjects'
import { CurrentlyExploring } from '@/components/CurrentlyExploring'
import { CareerHighlights } from '@/components/CareerHighlights'
import { SpeakingAndCredentials } from '@/components/SpeakingAndCredentials'
import { TechStack } from '@/components/TechStack'
import { BlogPreview } from '@/components/BlogPreview'
import { ResearchPublications } from '@/components/ResearchPublications'
import { Contact } from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsDashboard />
      <ProfessionalSummary />
      <EngineeringPhilosophy />
      <FeaturedProjects />
      <Leadership />
      <CareerTimeline />
      <OpenSourceProjects />
      <CurrentlyExploring />
      <CareerHighlights />
      <SpeakingAndCredentials />
      <TechStack />
      <BlogPreview />
      <ResearchPublications />
      <Contact />
    </>
  )
}
