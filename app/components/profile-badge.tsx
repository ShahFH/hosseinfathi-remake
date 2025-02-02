"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const positions = ["UI/UX Designer", "Frontend Designer", "UI Developer", "Web Designer"]

export default function ProfileBadge() {
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % positions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-start gap-2.5">
      <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-lg">
        <Image
          src="https://framerusercontent.com/images/tb2ZvrIuhHAW9a6HYeyWtA8bSo.jpg"
          alt="Profile"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="bg-[#71FF7C] text-[#123E17] px-8 py-2 rounded-full relative h-[36px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={positions[currentPosition]}
            className="text-base font-medium whitespace-nowrap  "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {positions[currentPosition]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}

