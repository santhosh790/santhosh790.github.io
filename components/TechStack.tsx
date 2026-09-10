import React from 'react'
import Image from 'next/image'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import layeredTechStack from '@/assets/images/layered_tech_stack_latest.png'

export function TechStack() {
  return (
    <Section id="skills">
      <SectionHeader>
        <SectionTitle>Tech Stack</SectionTitle>
        <SectionSubtitle>
          Capabilities organized by system responsibility rather than a flat keyword list.
        </SectionSubtitle>
      </SectionHeader>

      <div className="animate-fade-in overflow-hidden rounded-[1.5rem] border border-border bg-surface/65 p-3 shadow-sm md:p-5">
        <Image
          src={layeredTechStack}
          alt="Layered technology stack across application, machine learning, data, and cloud infrastructure"
          width={1536}
          height={1024}
          className="h-auto w-full rounded-xl object-contain"
        />
      </div>
    </Section>
  )
}
