import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

export default function ProjectsSection() {
  const { items: projects, loading } = useSelector((state) => state.projects)

  if (loading) {
    return (
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">Loading projects...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
            Our Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real solutions for real businesses. See how we've helped teams ship exceptional products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <motion.a
                      href={project.link}
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="text-white flex items-center gap-2 font-medium"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
