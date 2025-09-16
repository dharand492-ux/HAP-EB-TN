// HAP-EB PWA API Function
// Simple Netlify function for demo API endpoints

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    }
  }

  try {
    const { path } = event
    const method = event.httpMethod

    // Mock data for demonstration
    const mockData = {
      stats: {
        totalRevenue: 287500,
        activeBills: 1247,
        completed: 934,
        pending: 313
      },
      chartData: [
        { name: 'Jan', revenue: 4000, bills: 24 },
        { name: 'Feb', revenue: 3000, bills: 18 },
        { name: 'Mar', revenue: 5000, bills: 32 },
        { name: 'Apr', revenue: 4500, bills: 28 },
        { name: 'May', revenue: 6000, bills: 38 },
        { name: 'Jun', revenue: 5500, bills: 35 }
      ],
      bills: [
        {
          id: '1',
          serviceNumber: 'HAP001',
          amount: 2500,
          status: 'paid',
          date: '2024-01-15'
        },
        {
          id: '2',
          serviceNumber: 'HAP002',
          amount: 1800,
          status: 'pending',
          date: '2024-01-16'
        },
        {
          id: '3',
          serviceNumber: 'HAP003',
          amount: 3200,
          status: 'overdue',
          date: '2024-01-10'
        }
      ]
    }

    // Simple routing
    if (path.includes('/stats') && method === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: mockData.stats
        })
      }
    }

    if (path.includes('/chart-data') && method === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: mockData.chartData
        })
      }
    }

    if (path.includes('/bills') && method === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: mockData.bills
        })
      }
    }

    if (path.includes('/generate-report') && method === 'POST') {
      // Simulate report generation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Report generated successfully',
          reportId: `report_${Date.now()}`,
          downloadUrl: '/reports/demo-report.xlsx'
        })
      }
    }

    // Health check
    if (path.includes('/health')) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: 'healthy',
          timestamp: new Date().toISOString(),
          service: 'HAP-EB PWA API'
        })
      }
    }

    // Default response
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({
        error: 'Endpoint not found',
        availableEndpoints: [
          '/api/stats',
          '/api/chart-data',
          '/api/bills',
          '/api/generate-report',
          '/api/health'
        ]
      })
    }

  } catch (error) {
    console.error('API Error:', error)

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    }
  }
}
