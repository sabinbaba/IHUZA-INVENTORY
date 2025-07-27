"use client"

import { Users, Package, CheckCircle, XCircle } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"

const StatsCards = () => {
  const { isDarkMode } = useDarkMode()

  const stats = [
    {
      title: "Total Users",
      value: "116",
      icon: <Users className="h-6 w-6" />,
      lightBg: "bg-blue-100",
      darkBg: "bg-blue-900/30",
      lightText: "text-blue-800",
      darkText: "text-blue-200",
      lightIcon: "text-blue-600",
      darkIcon: "text-blue-400"
    },
    {
      title: "Total Products",
      value: "100",
      icon: <Package className="h-6 w-6" />,
      lightBg: "bg-green-100",
      darkBg: "bg-green-900/30",
      lightText: "text-green-800",
      darkText: "text-green-200",
      lightIcon: "text-green-600",
      darkIcon: "text-green-400"
    },
    {
      title: "Assigned Products",
      value: "10",
      icon: <CheckCircle className="h-6 w-6" />,
      lightBg: "bg-purple-100",
      darkBg: "bg-purple-900/30",
      lightText: "text-purple-800",
      darkText: "text-purple-200",
      lightIcon: "text-purple-600",
      darkIcon: "text-purple-400"
    },
    {
      title: "Unassigned Products",
      value: "90",
      icon: <XCircle className="h-6 w-6" />,
      lightBg: "bg-orange-100",
      darkBg: "bg-orange-900/30",
      lightText: "text-orange-800",
      darkText: "text-orange-200",
      lightIcon: "text-orange-600",
      darkIcon: "text-orange-400"
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`rounded-lg p-5 transition-all duration-300 border ${
            isDarkMode
              ? "bg-gray-800/80 border-gray-700 hover:bg-gray-700/60"
              : "bg-white border-gray-200 hover:bg-gray-50"
          } hover:shadow-md hover:-translate-y-1`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                {stat.title}
              </p>
              <p className={`text-2xl font-bold mt-1 ${
                isDarkMode ? stat.darkText : stat.lightText
              }`}>
                {stat.value}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${
              isDarkMode ? stat.darkBg : stat.lightBg
            } ${isDarkMode ? stat.darkIcon : stat.lightIcon}`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards