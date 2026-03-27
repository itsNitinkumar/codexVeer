import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Sparkles, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
}

export default function ServicesSection() {
  const { items: services, loading } = useSelector((state) => state.services)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  if (loading) {
    return (
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">Loading services...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
            What We Do
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we deliver end-to-end solutions that scale with your business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" className="group/btn p-0 h-auto">
                      Learn more
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
