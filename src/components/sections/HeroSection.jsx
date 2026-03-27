import { motion } from 'framer-motion'
import { ArrowRight, Code2, Smartphone, Palette } from 'lucide-react'
import { Button } from '../ui/button'
import { Spotlight } from '../ui/spotlight'
import { TypewriterEffect } from '../ui/typewriter-effect'

export default function HeroSection() {
  const words = [
    { text: "We" },
    { text: "craft" },
    { text: "digital", className: "text-primary" },
    { text: "products", className: "text-primary" },
    { text: "that" },
    { text: "drive" },
    { text: "growth", className: "text-secondary" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: -100, y: -50 },
    { Icon: Smartphone, delay: 0.2, x: 100, y: -30 },
    { Icon: Palette, delay: 0.4, x: -80, y: 50 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}

          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [0, x, 0],
            y: [0, y, 0],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute hidden lg:block"
          style={{
            left: `${30 + index * 20}%`,
            top: `${30 + index * 10}%`,
          }}
        >
          <div className="p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
            <Icon size={32} className="text-primary" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Add a subtitle before typewriter */}
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
              Premium Digital Solutions
            </span>
          </motion.div>

          <TypewriterEffect words={words} className="text-5xl md:text-7xl lg:text-8xl" />

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            A full-service IT company building exceptional websites, mobile apps,
            and custom technical solutions for ambitious teams.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10">View Our Work</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm">
              Our Services
            </Button>
          </motion.div>

          {/* Trusted by section */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['TechFlow', 'StartupLab', 'InnovateCo', 'CloudSync', 'DataVerse'].map((company, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="text-lg font-bold tracking-wider"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'Projects Delivered', value: '50+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Support', value: '24/7' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
