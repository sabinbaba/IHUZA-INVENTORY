"use client"

import { Package, CircleCheckBig } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"

export default function StatusCard() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`p-6 rounded-xl shadow-lg transition-colors duration-200 ${
      isDarkMode 
        ? "bg-blue-600"  // Darker blue for dark mode
        : "bg-blue-600"  // Original blue for light mode
    }`}>
      <div className="flex items-center gap-3 mb-3">
      <div className="bg-blue-400 p-2 rounded-md">
          <Package className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">
          iHUZA INVENTORY - System Overview
        </h1>
      </div>
      <p className={`mt-2 text-base ${
        isDarkMode ? "text-blue-100 ml-13" : "text-blue-100 ml-13"
      }`}>
        Monitor your iHUZA inventory and product assignments in real-time.
      </p>
      <div className="flex items-center mt-4">
        <CircleCheckBig className="h-5 w-5 text-green-400 mr-2 ml-13" />
        <span className={`text-sm ${
          isDarkMode ? "text-blue-200 ml-14" : "text-blue-100 "
        }`}>
          All Systems Operational
        </span>
      </div>
    </div>
  )
}