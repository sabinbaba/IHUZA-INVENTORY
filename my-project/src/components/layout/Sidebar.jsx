"use client"

import { Link, useLocation } from "react-router-dom"
import { Package, Users, AlignCenter, Laptop, Layers, LogOut } from "lucide-react"
import { useAuth } from "../../context/AuthContext"
import { useDarkMode } from "../../context/DarkModeContext"

export default function Sidebar({ onClose }) {
  const location = useLocation()
  const { logout } = useAuth()
  const { isDarkMode } = useDarkMode()

  const navItems = [
    { name: "Dashboard", icon: <Laptop />, path: "/" }, // Changed to Laptop
    { name: "Users", icon: <Users />, path: "/users", count: "116" },
    { name: "Products", icon: <Package />, path: "/products", count: "100" },
    { name: "Assignments", icon: <AlignCenter />, path: "/assignments", count: "10" }, // Changed to AlignCenter
    { name: "Categories", icon: <Layers />, path: "/categories" }, // Changed to Layers
  ]

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout()
    }
  }

  const handleItemClick = () => {
    if (onClose && window.innerWidth < 768) {
      onClose()
    }
  }

  return (
    <div
      className="w-84 h-full flex flex-col border-r shadow-sm transition-colors duration-200"
      style={{
        backgroundColor: isDarkMode ? "#1e293b" : "#f8fafc",
        borderColor: isDarkMode ? "#334155" : "#e2e8f0",
      }}
    >
      {/* Logo Section */}
      <div 
        className="p-6 border-b transition-colors duration-200" 
        style={{ borderColor: isDarkMode ? "#334155" : "#e2e8f0" }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Package className="h-6 w-6 text-blue-600 border rounded-md" />
          <h1 className="text-xl font-bold" style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}>
            iHUZA
          </h1>
        </div>
        <p className="text-xs font-medium ml-8" style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}>
          INVENTORY
        </p>
      </div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-2 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleItemClick}
              className="flex items-center justify-between p-3 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: isActive 
                  ? isDarkMode 
                    ? "#1e40af" 
                    : "#eff6ff" 
                  : "transparent",
                color: isActive 
                  ? "#1d4ed8" 
                  : isDarkMode 
                    ? "#e2e8f0" 
                    : "#374151",
                border: isActive 
                  ? isDarkMode 
                    ? "1px solid #1e40af" 
                    : "1px solid #dbeafe" 
                  : "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.style.backgroundColor = isDarkMode ? "#334155" : "#f1f5f9"
                  e.target.style.color = isDarkMode ? "#ffffff" : "#1e293b"
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.color = isDarkMode ? "#e2e8f0" : "#374151"
                }
              }}
            >
              <div className="flex items-center gap-3">
                <span style={{ color: isActive ? "#2563eb" : isDarkMode ? "#94a3b8" : "#64748b" }}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </div>
              {item.count && (
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: isActive 
                      ? isDarkMode 
                        ? "#1e40af" 
                        : "#dbeafe" 
                      : isDarkMode 
                        ? "#334155" 
                        : "#f1f5f9",
                    color: isActive 
                      ? "#1d4ed8" 
                      : isDarkMode 
                        ? "#e2e8f0" 
                        : "#64748b",
                  }}
                >
                  {item.count}
                </span>
              )}
            </Link>
          )
        })}

        {/* Logout Section */}
        <div className="pt-8">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-lg w-full transition-all duration-200"
            style={{ 
              color: isDarkMode ? "#e2e8f0" : "#374151",
              backgroundColor: isDarkMode ? "transparent" : "transparent"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = isDarkMode ? "#334155" : "#f1f5f9"
              e.target.style.color = isDarkMode ? "#ffffff" : "#1e293b"
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent"
              e.target.style.color = isDarkMode ? "#e2e8f0" : "#374151"
            }}
          >
            <LogOut className="h-4 w-4" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  )
}