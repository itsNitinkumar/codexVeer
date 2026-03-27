import { motion } from 'framer-motion'
import { Search, Palette, Code, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Deep-dive into your business, users, and market to uncover the real problems worth solving.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Craft intuitive interfaces and user flows that balance beauty with usability.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Build with modern frameworks, clean architecture, and obsessive attention to performance.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Launch with CI/CD, monitoring, and ongoing support to ensure everything runs flawlessly.',
    color: 'from-yellow-500 to-amber-500',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
            How We Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Process</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that transforms ideas into exceptional digital products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="text-white" size={36} />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
