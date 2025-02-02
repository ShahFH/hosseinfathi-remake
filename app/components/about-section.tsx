"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="py-32 w-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-[510px] mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[#4ADE80] text-6xl mb-8 text-left"
        >
          " "
        </motion.div>

        <div className="space-y-8 text-xl text-neutral-950 text-justify">
          <p className="text-2xl">
            I'm a <span className="font-semibold">UI/UX</span> and{" "}
            <span className="font-semibold">Product Designer</span> with two years of experience creating visually
            striking and user-friendly digital products. Specializing in{" "}
            <span className="font-semibold">web design, app design, and web templates</span>, I've had the privilege of
            collaborating with renowned agencies, where I honed my skills across diverse industries and projects.
          </p>

          <p className="text-2xl">
            As a freelancer, I've tackled <span className="font-semibold">unique design</span>
            challenges, delivering tailored solutions that balance <span className="font-semibold">creativity</span> and{" "}
            <span className="font-semibold">functionality</span>. My passion for design goes hand-in-hand with my strong
            interest in business.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

