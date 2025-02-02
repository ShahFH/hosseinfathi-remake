"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import ProjectScroll from "./components/project-scroll"
import ToolsSection from "./components/tools-section"
import ContactSection from "./components/contact-section"
import ProfileBadge from "./components/profile-badge"
import NavHeader from "./components/nav-header"
import AboutSection from "./components/about-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <NavHeader />
      <main className="pt-32 container mx-auto px-4">
        <section className="max-w-[510px] mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-left mb-6"
          >
            <ProfileBadge />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-bold text-left text-neutral-950 mb-6"
          >
            Hey there, I'm Hossein
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-left text-neutral-600 mb-12"
          >
            Designing Seamless Experiences That Look Great and Work Even Better
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8"
          >
            {[
              { name: "Twitter", href: "https://x.com/WHOISHOSSEINAM" },
              { name: "Layers", href: "https://layers.to/hossein" },
              { name: "Dribbble", href: "https://dribbble.com/Hvssein" },
              { name: "Instagram", href: "https://www.instagram.com/who.ishossein/" },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-neutral-400 hover:text-neutral-950 transition-colors"
              >
                {social.name}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </motion.div>
        </section>

        <ProjectScroll />
        <AboutSection />
        <ToolsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

