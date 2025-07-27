"use client"

import { Clock, Package, User, Wrench, UserPlus } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"

const ActivityFeed = () => {
  const { isDarkMode } = useDarkMode()
  
  const activities = [
    {
      id: 1,
      type: "product_added",
      title: "Product added to inventory",
      details: 'MacBook Pro 16" M3 (PROD2024001)',
      date: "Dec 4, 2024",
    },
    {
      id: 2,
      type: "product_assigned",
      title: "Product assigned to Sarah Johnson",
      details: "Dell ThinkPad X1 Carbon (PROD2024001)",
      date: "Dec 3, 2024",
    },
    {
      id: 3,
      type: "product_assigned",
      title: "Product assigned to Michael Brown",
      details: "Apple MacBook Air M2 (PROD2024001)",
      date: "Dec 2, 2024",
    },
    {
      id: 4,
      type: "maintenance",
      title: "Product sent for maintenance",
      details: "HP Spectre x360 - Screen replacement required",
      date: "Jan 16, 2024",
    },
    {
      id: 5,
      type: "user_registered",
      title: "New user registered",
      details: "Amanda White - Staff Member",
      date: "Jan 14, 2024",
    },
  ]

  const iconMap = {
    product_added: <Package className="h-4 w-4 text-blue-500 dark:text-blue-400" />,
    product_assigned: <User className="h-4 w-4 text-green-500 dark:text-green-400" />,
    maintenance: <Wrench className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />,
    user_registered: <UserPlus className="h-4 w-4 text-purple-500 dark:text-purple-400" />,
  }

  return (
    <div className={`rounded-xl border p-6 shadow-sm transition-colors duration-200 ${
      isDarkMode 
        ? "bg-gray-800 border-gray-700" 
        : "bg-white border-gray-200"
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-semibold flex items-center gap-2 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}>
          <Clock className={`h-5 w-5 ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`} />
          Recent Activity
        </h2>
        <button className={`text-sm hover:underline transition-colors ${
          isDarkMode ? "text-blue-400" : "text-blue-600"
        }`}>
          View all
        </button>
      </div>

      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3">
            <div className={`flex-shrink-0 mt-0.5 p-2 rounded-full ${
              isDarkMode ? "bg-gray-700" : "bg-gray-100"
            }`}>
              {iconMap[activity.type] || <Package className="h-4 w-4" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`font-medium ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}>
                {activity.title}
              </p>
              <p className={`text-sm truncate ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                {activity.details}
              </p>
              <p className={`text-xs mt-1 ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}>
                {activity.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ActivityFeed