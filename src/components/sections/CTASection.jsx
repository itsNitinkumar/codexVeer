import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '../ui/button'

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-24 bg-background">
      {/* Subtle Lamp Effect Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main soft glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />
        
        {/* Horizontal light line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm sm:text-base font-bold text-primary mb-6 uppercase tracking-wider text-center"
        >
          Get In Touch
        </motion.h2>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight"
        >
          Let's build something <span className="text-primary">incredible</span>
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed"
        >
          Have a project in mind? Drop us a line and let's bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <Button size="lg" className="group">
            Start a Project
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Mail, label: 'Email', value: 'hello@codexveer.dev' },
            { icon: Phone, label: 'Phone', value: '+1 (555) 000-1234' },
            { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                <div className="font-medium text-center text-sm sm:text-base">{contact.value}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
