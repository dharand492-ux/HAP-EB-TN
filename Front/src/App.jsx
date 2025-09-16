import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Offline from './components/Offline'

// PWA Install Prompt Component
const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  if (!showInstallPrompt) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs z-50"
    >
      <div className="flex items-center space-x-3">
        <div className="text-2xl">📱</div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">Install HAP-EB</h3>
          <p className="text-sm text-gray-600 mb-3">
            Get our app for better performance and offline access!
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleInstall}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Install
            </button>
            <button
              onClick={() => setShowInstallPrompt(false)}
              className="text-gray-600 hover:text-gray-800 px-3 py-1 text-sm transition-colors"
            >
              Later
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function App() {
  const [user, setUser] = useState(null)
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  // Load saved user
  useEffect(() => {
    const savedUser = localStorage.getItem('hap-eb-user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // Handle online/offline
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const login = (credentials) => {
    if (credentials.email === 'admin@hap-eb.local' && credentials.password === 'admin123') {
      const userData = { name: 'HAP-EB Admin', email: credentials.email }
      setUser(userData)
      localStorage.setItem('hap-eb-user', JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('hap-eb-user')
  }

  if (!isOnline) {
    return <Offline />
  }

  return (
    <div className="min-h-screen">
      <Routes>
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" replace /> : <Login onLogin={login} />} 
        />
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard user={user} onLogout={logout} /> : <Navigate to="/login" replace />} 
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      
      <PWAInstallPrompt />
      
      {/* Online Status */}
      <div className="fixed top-4 left-4 z-40">
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          isOnline ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {isOnline ? '🟢 Online' : '🔴 Offline'}
        </div>
      </div>
    </div>
  )
}

export default App
