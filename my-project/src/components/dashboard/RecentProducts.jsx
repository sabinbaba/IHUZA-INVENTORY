"use client"

import { useDarkMode } from "../../context/DarkModeContext"

export default function RecentProducts() {
  const { isDarkMode } = useDarkMode()
  
  const recentProducts = [
    { id: 1, name: 'MacBook Pro 16"', category: "Laptops", date: "Dec 10, 2024", status: "In Stock" },
    { id: 2, name: "iPad Air", category: "Tablets", date: "Dec 7, 2024", status: "In Stock" },
    { id: 3, name: "Dell XPS 13", category: "Laptops", date: "Dec 9, 2024", status: "In Stock" },
    { id: 4, name: "Surface Pro 9", category: "Tablets", date: "Dec 6, 2024", status: "Low Stock" },
    { id: 5, name: "iPhone 15 Pro", category: "Mobile", date: "Dec 8, 2024", status: "Out of Stock" },
  ]

  const getStatusBadge = (status) => {
    const baseClasses = "px-2.5 py-0.5 rounded-full text-xs font-medium"
    
    if (isDarkMode) {
      switch (status) {
        case "In Stock": return `${baseClasses} bg-green-900/30 text-green-300`
        case "Low Stock": return `${baseClasses} bg-yellow-900/30 text-yellow-300`
        case "Out of Stock": return `${baseClasses} bg-red-900/30 text-red-300`
        default: return `${baseClasses} bg-gray-700 text-gray-300`
      }
    } else {
      switch (status) {
        case "In Stock": return `${baseClasses} bg-green-100 text-green-800`
        case "Low Stock": return `${baseClasses} bg-yellow-100 text-yellow-800`
        case "Out of Stock": return `${baseClasses} bg-red-100 text-red-800`
        default: return `${baseClasses} bg-gray-100 text-gray-800`
      }
    }
  }

  return (
    <div className={`rounded-xl border p-6 shadow-sm transition-colors duration-200 ${
      isDarkMode 
        ? "bg-gray-800 border-gray-700" 
        : "bg-white border-gray-200"
    }`}>
      <h2 className={`text-lg font-semibold mb-6 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}>
        Recent Added Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className={`p-4 border rounded-lg transition-all duration-200 ${
              isDarkMode
                ? "bg-gray-700/30 border-gray-600 hover:bg-gray-700/50"
                : "bg-gray-50 border-gray-200 hover:bg-gray-100"
            } hover:shadow-sm`}
          >
            <div className="flex flex-col space-y-3">
              <p className={`font-medium ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}>
                {product.name}
              </p>
              <p className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                {product.category}
              </p>
              <p className={`text-xs ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}>
                {product.date}
              </p>
              <div className="pt-1">
                <span className={getStatusBadge(product.status)}>
                  {product.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}