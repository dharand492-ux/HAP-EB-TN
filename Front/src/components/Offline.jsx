import React from 'react'
import { motion } from 'framer-motion'

const Offline = () => {
  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md text-center shadow
