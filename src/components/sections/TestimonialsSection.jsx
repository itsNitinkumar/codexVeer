import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { AnimatedTestimonials } from '../ui/animated-testimonials'

export default function TestimonialsSection() {
  const { items: testimonials, loading } = useSelector((state) => state.testimonials)

  if (loading || testimonials.length === 0) {
    return null
  }

  // Transform testimonials to match AnimatedTestimonials format
  const formattedTestimonials = testimonials.map(t => ({
    quote: t.content,
    name: t.name,
    designation: t.role,
    src: t.image, // Using actual image now
  }))

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
            What Our Clients Say
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h3>
        </motion.div>

        <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={true} />
      </div>
    </section>
  )
}
