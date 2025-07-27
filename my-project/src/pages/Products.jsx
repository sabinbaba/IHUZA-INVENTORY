"use client"

import { useInventory } from "../hooks/useInventory"
import { Package } from "lucide-react"
import { useDarkMode } from "../context/DarkModeContext"

const Products = () => {
  const { products, loading } = useInventory()
  const { isDarkMode } = useDarkMode()

  return (
    <div 
      className="space-y-6 p-4 min-h-screen transition-colors duration-200"
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
          <Package className={`h-6 w-6 ${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          }`} />
          <div>
            <h1 
              className="text-2xl font-bold transition-colors duration-200"
              style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
            >
              Product Inventory
            </h1>
            <p 
              className="transition-colors duration-200"
              style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
            >
              Manage all products in stock
            </p>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div 
            className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 transition-colors duration-200"
            style={{ 
              borderColor: isDarkMode ? "#60a5fa" : "#2563eb",
            }}
          />
        </div>
      ) : (
        <div
          className="rounded-lg border p-6 transition-colors duration-200"
          style={{
            backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
            borderColor: isDarkMode ? "#334155" : "#e2e8f0",
          }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y transition-colors duration-200" 
              style={{ borderColor: isDarkMode ? "#334155" : "#e2e8f0" }}>
              <thead style={{ 
                backgroundColor: isDarkMode ? "#1e293b" : "#f8fafc",
                borderColor: isDarkMode ? "#334155" : "#e2e8f0"
              }}>
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200"
                    style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                  >
                    Product
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200"
                    style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                  >
                    Category
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200"
                    style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                  >
                    Status
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200"
                    style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                  >
                    Date Added
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y transition-colors duration-200 ${
                isDarkMode ? "divide-gray-700" : "divide-gray-200"
              }`}>
                {products.map((product) => (
                  <tr 
                    key={product.id}
                    className={`transition-colors duration-200 ${
                      isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-50"
                    }`}
                  >
                    <td 
                      className="px-6 py-4 whitespace-nowrap font-medium transition-colors duration-200"
                      style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
                    >
                      {product.name}
                    </td>
                    <td 
                      className="px-6 py-4 whitespace-nowrap transition-colors duration-200"
                      style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                    >
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full transition-colors duration-200 ${
                          product.status === "In Stock"
                            ? isDarkMode 
                              ? "bg-green-900/30 text-green-300" 
                              : "bg-green-100 text-green-800"
                            : isDarkMode 
                              ? "bg-yellow-900/30 text-yellow-300"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td 
                      className="px-6 py-4 whitespace-nowrap transition-colors duration-200"
                      style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                    >
                      {product.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products