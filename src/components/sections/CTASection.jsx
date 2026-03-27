import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '../ui/button'
import { LampContainer } from '../ui/lamp'

export default function CTASection() {
    return (
        <section id="contact" className="relative overflow-hidden">
            <LampContainer>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider text-center"
                >
                    Get In Touch
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                >
                    Let's build something <span className="text-primary">incredible</span>
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center"
                >
                    Have a project in mind? Drop us a line and let's bring your vision to life.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button size="lg" className="group mb-12">
                        Start a Project
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                    <Icon className="text-primary" size={24} />
                                </div>
                                <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                                <div className="font-medium text-center">{contact.value}</div>
                            </motion.div>
                        )
                    })}
                </div>
            </LampContainer>
        </section>
    )
}
