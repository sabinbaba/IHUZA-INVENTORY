"use client"

import { useInventory } from "../hooks/useInventory"
import StatusCard from "../components/dashboard/StatusCard"
import StatsCards from "../components/dashboard/StatsCards"
import RecentProducts from "../components/dashboard/RecentProducts"
import UsersTable from "../components/dashboard/UsersTable"
import ActivityFeed from "../components/dashboard/ActivityFeed"
import QuickActions from "../components/dashboard/QuickActions"
import { useDarkMode } from "../context/DarkModeContext"

const Dashboard = () => {
  const { loading } = useInventory()
  const { isDarkMode } = useDarkMode()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div 
          className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 transition-colors duration-200"
          style={{
            borderColor: isDarkMode ? "#60a5fa" : "#2563eb"
          }}
        />
      </div>
    )
  }

  return (
    <div 
      className="space-y-4 sm:space-y-6 min-h-screen p-4 sm:p-6 transition-colors duration-200"
      style={{ 
        backgroundColor: isDarkMode ? "#0f172a" : "#f1f5f9" 
      }}
    >
      {/* Status Overview */}
      <StatusCard darkMode={isDarkMode} />

      {/* Key Metrics */}
      <StatsCards darkMode={isDarkMode} />

      {/* Recent Products Table */}
      <RecentProducts darkMode={isDarkMode} />

      {/* Users Table */}
      <UsersTable darkMode={isDarkMode} />

      {/* Bottom Section - Activity Feed and Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <ActivityFeed darkMode={isDarkMode} />
        <QuickActions darkMode={isDarkMode} />
      </div>
    </div>
  )
}

export default Dashboard