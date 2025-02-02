"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const tools = [
  {
    name: "Figma",
    icon: "https://framerusercontent.com/images/S7SyrV4BeClIpfHxT26FgISug4.png",
  },
  {
    name: "Framer",
    icon: "https://framerusercontent.com/images/l1GivaxeJ5a4vmCjPnNoZolmUA.png",
  },
  {
    name: "Notion",
    icon: "https://framerusercontent.com/images/O2iBbyJ3tP8HlLiEsCqNuTbDoTM.png",
  },
  {
    name: "Relume",
    icon: "https://framerusercontent.com/images/EGx5rTVzOiwqEeE08fcwoW9gjHk.svg",
  },
  {
    name: "Perplexity",
    icon: "https://framerusercontent.com/images/A5jV9orBapBERc0eJgKIXOVNWs.png",
  },
  {
    name: "ChatGPT",
    icon: "https://framerusercontent.com/images/70lXJr8v2a8fF8pNKvEZ6MiJunc.png",
  },
]

export default function ToolsSection() {
  return (
    <section className="py-32 w-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-medium text-neutral-950 mb-6">Tools</h2>
        <p className="text-xl text-neutral-600 w-lg mx-auto">
          Mastering the Craft with Cutting-Edge Tools That Bring Ideas to Life
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 max-w-[510px] mx-auto"
      >
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative w-[150px] h-[150px] bg-white rounded-[25px] flex items-center justify-center"
          >
            <div className="relative w-16 h-16">
              <Image src={tool.icon || "/placeholder.svg"} alt={tool.name} fill className="object-contain" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center bg-neutral-950/80 rounded-[25px] backdrop-blur-sm"
            >
              <p className="text-white text-sm font-semibold">{tool.name}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

