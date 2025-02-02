"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ContactSection() {
  const [isCopied, setIsCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("hosseinfathidesigner@gmail.com")
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <section className="pt-16 px-6 md:py-16 md:px-22 bg-white rounded-[30px] my-32 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-left mb-12 space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-normal text-neutral-950 mb-4 text-left w-lg">
          Let's Build Something Unforgettable,
          <span className="font-bold"> Pixel By Pixel</span>
        </h2>
        <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
          <Button variant="outline" size="lg" className="text-lg px-8 rounded-full w-full sm:w-auto text-black" asChild>
            <Link href="mailto:hosseinfathidesigner@gmail.com">Say Hello!</Link>
          </Button>
          <Button
            size="lg"
            className="text-lg px-8 rounded-full bg-neutral-950 hover:bg-neutral-800 w-full sm:w-auto"
            asChild
          >
            <Link href="https://calendly.com/" target="_blank">
              Book a Call
            </Link>
          </Button>
        </div>
      </motion.div>

      <div className="border-t border-neutral-200 pt-12 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <h3 className="text-neutral-400 text-sm font-semibold">Contact</h3>
            <button
              onClick={copyEmail}
              className="text-neutral-950 hover:text-neutral-700 transition-colors flex items-center gap-2 group relative"
            >
              <span className="text-xl">📎</span>
              Hello@gmail.com
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isCopied ? 1 : 0, y: isCopied ? 0 : 10 }}
                className="absolute -top-8 left-0 bg-neutral-950 text-white text-xs py-1 px-2 rounded"
              >
                Copied!
              </motion.div>
            </button>
          </div>

          <div className="space-y-2">
            <h3 className="text-neutral-400 text-sm font-semibold">Socials</h3>
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com/"
                target="_blank"
                className="bg-neutral-100 p-2 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <Image
                  src="https://framerusercontent.com/images/uf3qX6P5Fkv1KU7wQBW3rD4ncHU.svg"
                  alt="Twitter"
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href="https://layers.to/"
                target="_blank"
                className="bg-neutral-100 p-2 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <Image
                  src="https://framerusercontent.com/images/2ivD7HbabKklMB0CIzCQk4TACo.svg"
                  alt="Layers"
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href="https://dribbble.com/"
                target="_blank"
                className="bg-neutral-100 p-2 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <Image
                  src="https://framerusercontent.com/images/rBK5FDPvEUaIdmrcmVXL2cXVK4.svg"
                  alt="Dribbble"
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="bg-neutral-100 p-2 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <Image
                  src="https://framerusercontent.com/images/rWjZzrUsxHvzgtkQmyfXSUCQ.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

