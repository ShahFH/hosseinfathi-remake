"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function NavHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isScrolled ? (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="mx-4 my-2">
            <nav className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full flex justify-between items-center max-w-2xl mx-auto">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-bold text-neutral-950"
              >
                Hossein
                <span className="block -mt-1 text-neutral-400">Fathi</span>
              </motion.h1>
              <div className="flex gap-4">
                <Button variant="ghost" className="text-neutral-500 hover:text-neutral-950 rounded-full">
                  Download CV
                </Button>
                <Button className="bg-neutral-950 text-white hover:bg-neutral-800 rounded-full">Contact me</Button>
              </div>
            </nav>
          </div>
        </motion.header>
      ) : null}
    </AnimatePresence>
  )
}

