import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const chartData = [
    { name: 'Jan', revenue: 4000, bills: 24 },
    { name: 'Feb', revenue: 3000, bills: 18 },
    { name: 'Mar', revenue: 5000, bills: 32 },
    { name: 'Apr', revenue: 4500, bills: 28 },
    { name: 'May', revenue: 6000, bills: 38 },
    { name: 'Jun', revenue: 5500, bills: 35 }
  ]

  const stats = [
    { title: 'Total Revenue', value: '₹2,87,500', icon: '💰', change: '+12.5%', positive: true },
    { title: 'Active Bills', value: '1,247', icon: '📄', change: '+8.3%', positive: true },
    { title: 'Completed', value: '934', icon: '✅', change: '+15.2%', positive: true },
    { title: 'Pending', value: '313', icon: '⏳', change: '-4.1%', positive: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-4">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">HAP-EB Dashboard</h1>
            <p className="text-blue-100">Welcome back, {user.name} 👋</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block text-white/80 text-sm">
              🚀 PWA Mode Active
            </div>
            <button
              onClick={onLogout}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </motion.header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl p-6 hover:bg-white transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{stat.icon}</div>
              <div className={`text-sm font-medium px-2 py-1 rounded ${
                stat.positive 
                  ? 'text-green-700 bg-green-100' 
                  : 'text-red-700 bg-red-100'
              }`}>
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Revenue Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="revenue" stroke="#667eea" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Bills Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Bills Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="bills" fill="#764ba2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Generate Report', icon: '📊', color: 'blue' },
            { title: 'Add New Bill', icon: '➕', color: 'green' },
            { title: 'Send Alerts', icon: '📧', color: 'yellow' },
            { title: 'View Analytics', icon: '📈', color: 'purple' }
          ].map((action, index) => (
            <motion.button
              key={action.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-lg text-white font-medium transition-all ${
                action.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                action.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                action.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                'bg-gradient-to-r from-purple-500 to-purple-600'
              } hover:shadow-lg`}
            >
              <div className="text-2xl mb-2">{action.icon}</div>
              <div className="text-sm">{action.title}</div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* PWA Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold mb-1">🎉 PWA Features Active</h3>
            <p className="text-green-100 text-sm">
              ✓ Offline Mode • ✓ Install Prompt • ✓ Fast Loading • ✓ Mobile Optimized
            </p>
          </div>
          <div className="hidden sm:block">
            <div className="text-4xl">🚀</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
