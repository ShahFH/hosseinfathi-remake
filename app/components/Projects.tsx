import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, title: 'chat ai', image: 'https://framerusercontent.com/images/yx3AJK09TR0cUixmBQLvOk9JUw.jpg?scale-down-to=512' },
  { id: 2, title: 'mobile app', image: 'https://framerusercontent.com/images/7p4qM0bPxJ9HhFHyfmV8pd9uvg.jpg?scale-down-to=512' },
  { id: 3, title: 'Proposal creating', image: 'https://framerusercontent.com/images/kz0TRiuu8vxjHpVPodyv8mTJWVI.jpg?scale-down-to=512' },
  { id: 4, title: 'New', image: 'https://framerusercontent.com/images/z5A12rbJkeEcHyUq15jXBP8RIJw.jpg?scale-down-to=512' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

