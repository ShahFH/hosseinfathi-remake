import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hossein Fathi - Portfolio",
  description: "Personal portfolio website of Hossein Fathi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100 text-neutral-950`}>{children}</body>
    </html>
  )
}

