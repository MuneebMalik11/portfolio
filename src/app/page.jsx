'use client'

import React from 'react'
import { motion } from 'framer-motion'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Muneeb Malik</h1>
          <h2 className="text-2xl mb-6 text-gray-600 dark:text-gray-300">Web Developer & Designer</h2>
          <Image
            src="/images/DORAA.jpg?height=200&width=200"
            alt="MALIK"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6"
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate web developer with 5 years of experience in creating beautiful and functional websites. Specialized in React, Node.js, and modern web technologies.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'E-commerce Website', description: 'A fully functional online store built with React and Node.js.' },
              { title: 'Portfolio Website', description: 'A responsive portfolio website showcasing my skills and projects.' },
              { title: 'Task Management App', description: 'A productivity app built with React and Firebase.' },
              { title: 'Weather Dashboard', description: 'A real-time weather application using OpenWeatherMap API.' },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}