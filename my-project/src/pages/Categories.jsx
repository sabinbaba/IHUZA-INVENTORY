"use client"

import { Grid3X3 } from "lucide-react"
import { useDarkMode } from "../context/DarkModeContext"

const Categories = () => {
  const { isDarkMode } = useDarkMode()

  const categories = [
    { id: 1, name: "Laptops", count: 45, description: "Portable computers and notebooks" },
    { id: 2, name: "Tablets", count: 28, description: "Tablet devices and accessories" },
    { id: 3, name: "Mobile", count: 27, description: "Smartphones and mobile devices" },
  ]

  return (
    <div 
      className="space-y-6 p-4 sm:p-6 min-h-screen transition-colors duration-200"
      style={{ 
        backgroundColor: isDarkMode ? "#0f172a" : "#f1f5f9" 
      }}
    >
      {/* Header Section */}
      <div
        className="p-6 rounded-lg border transition-colors duration-200"
        style={{
          backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
          borderColor: isDarkMode ? "#334155" : "#e2e8f0",
        }}
      >
        <div className="flex items-center gap-3">
          <Grid3X3 className="h-6 w-6" style={{ color: isDarkMode ? "#60a5fa" : "#2563eb" }} />
          <div>
            <h1 
              className="text-2xl font-bold transition-colors duration-200"
              style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
            >
              Categories
            </h1>
            <p 
              className="transition-colors duration-200"
              style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
            >
              Manage product categories
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-lg border p-6 transition-colors duration-200 hover:shadow-md"
            style={{
              backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
              borderColor: isDarkMode ? "#334155" : "#e2e8f0",
            }}
          >
            <h3 
              className="text-lg font-semibold transition-colors duration-200"
              style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
            >
              {category.name}
            </h3>
            <p 
              className="text-sm mt-1 transition-colors duration-200"
              style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
            >
              {category.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span 
                className="text-2xl font-bold transition-colors duration-200"
                style={{ color: isDarkMode ? "#93c5fd" : "#2563eb" }}
              >
                {category.count}
              </span>
              <span 
                className="text-sm transition-colors duration-200"
                style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
              >
                Products
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories