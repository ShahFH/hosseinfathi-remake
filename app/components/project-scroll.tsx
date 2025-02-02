"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Chat ai",
    image: "https://framerusercontent.com/images/yx3AJK09TR0cUixmBQLvOk9JUw.jpg?scale-down-to=512",
    category: "Mobile App",
  },
  {
    id: 2,
    title: "Awesome App",
    image: "https://framerusercontent.com/images/7p4qM0bPxJ9HhFHyfmV8pd9uvg.jpg?scale-down-to=512",
    category: "Website",
  },
  {
    id: 3,
    title: "Proposal Creating",
    image: "https://framerusercontent.com/images/kz0TRiuu8vxjHpVPodyv8mTJWVI.jpg?scale-down-to=512",
    category: "Dashboard",
  },
  {
    id: 4,
    title: "Project 4",
    image: "https://framerusercontent.com/images/z5A12rbJkeEcHyUq15jXBP8RIJw.jpg?scale-down-to=512",
    category: "Mobile App",
  },
]

export default function ProjectScroll() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className={`relative ${isHovering ? "cursor-none" : ""}`}
      onMouseMove={handleMouseMove}
    >
      <div className="marquee-container overflow-hidden">
        <motion.div
          className="flex space-x-6 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className={`relative flex-none w-[80vw] md:w-[45vw] lg:w-[35vw] rounded-2xl overflow-hidden ${
                isHovering ? "scale-98" : ""
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-[60vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-sm mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-medium">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-50 flex items-center justify-center bg-black text-white rounded-full w-24 h-24"
          animate={{
            x: cursorPosition.x - 48,
            y: cursorPosition.y - 48,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1,
          }}
        >
          <span className="text-sm font-medium">View</span>
        </motion.div>
      )}
    </motion.div>
  )
}

