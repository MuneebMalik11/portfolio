'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            MY PORTFOLIO
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/blogs">Blogs</NavItem>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem href="/" onClick={toggleMenu}>Home</NavItem>
            <NavItem href="/about" onClick={toggleMenu}>About</NavItem>
            <NavItem href="/blogs" onClick={toggleMenu}>Blogs</NavItem>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavItem({ href, children, onClick }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  )
}