"use client"

import { motion } from "framer-motion"
import { Heart, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Aayush Sood
            </h3>
            <p className="text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate software developer and computer science student dedicated to creating innovative solutions and
              contributing to the tech community through continuous learning and excellence.
            </p>
          </div>

          <div className="border-t border-gray-700 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>and</span>
                <Code className="h-4 w-4 text-blue-400" />
                <span>by Aayush Sood</span>
              </div>
              <div className="text-gray-400 dark:text-gray-500 text-sm">
                © {new Date().getFullYear()} Aayush Sood. All rights reserved.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
