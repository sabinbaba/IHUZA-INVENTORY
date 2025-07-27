"use client"

import { Users, Package, ClipboardList, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useDarkMode } from "../../context/DarkModeContext"

const QuickActions = () => {
  const { isDarkMode } = useDarkMode()
  
  const actions = [
    {
      title: "View Users",
      description: "View all registered users",
      icon: <Users className="h-5 w-5" />,
      path: "/users",
    },
    {
      title: "View Products",
      description: "View all registered products",
      icon: <Package className="h-5 w-5" />,
      path: "/products",
    },
    {
      title: "View Assignments",
      description: "View all product assignments",
      icon: <ClipboardList className="h-5 w-5" />,
      path: "/assignments",
    },
  ]

  return (
    <div className={`rounded-xl border p-6 shadow-sm transition-colors duration-200 ${
      isDarkMode 
        ? "bg-gray-800 border-gray-700" 
        : "bg-white border-gray-200"
    }`}>
      <h2 className={`text-lg font-semibold mb-6 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}>
        Quick Actions
      </h2>

      <div className="space-y-3">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.path}
            className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 border ${
              isDarkMode
                ? "border-gray-700 hover:bg-gray-700/50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                isDarkMode 
                  ? "bg-blue-900/30 text-blue-400" 
                  : "bg-blue-50 text-blue-600"
              }`}>
                {action.icon}
              </div>
              <div>
                <p className={`font-medium ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  {action.title}
                </p>
                <p className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  {action.description}
                </p>
              </div>
            </div>
            <div className={`flex items-center gap-2 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}>
              <span className="text-sm font-medium">Go</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default QuickActions