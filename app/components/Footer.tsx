import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-neutral-400 text-sm">Hossein Fathi</p>
      </div>
    </motion.footer>
  )
}

