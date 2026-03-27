import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchServices } from '@/redux/slices/servicesSlice'
import { fetchTestimonials } from '@/redux/slices/testimonialsSlice'
import { fetchProjects } from '@/redux/slices/projectsSlice'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/Footer'
import MarqueeText from '@/components/MarqueeText'

export default function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchServices())
    dispatch(fetchTestimonials())
    dispatch(fetchProjects())
  }, [dispatch])

  const marqueeItems = [
    'Website Development',
    'Mobile Apps',
    'UI/UX Design',
    'Cloud Solutions',
    'API Development',
    'DevOps',
    'Custom Software',
  ]

  const marqueeItems2 = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'Kubernetes',
  ]

  return (
    <>
      <HeroSection />
      <MarqueeText items={marqueeItems} speed={100} />
      <ServicesSection />
      <ProcessSection />
      <MarqueeText items={marqueeItems2} speed={90} />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  )
}
