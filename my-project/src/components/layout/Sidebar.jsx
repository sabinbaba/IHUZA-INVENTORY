"use client"

import { Link, useLocation } from "react-router-dom"
import { Package, Users, AlignCenter, Laptop, Layers, LogOut } from "lucide-react"
import { useAuth } from "../../context/AuthContext"
import { useDarkMode } from "../../context/DarkModeContext"
import Swal from "sweetalert2"

export default function Sidebar({ onClose }) {
  const location = useLocation()
  const { logout } = useAuth()
  const { isDarkMode } = useDarkMode()

  const navItems = [
    { name: "Dashboard", icon: <Laptop size={18} />, path: "/" },
    { name: "Users", icon: <Users size={18} />, path: "/users", count: "116" },
    { name: "Products", icon: <Package size={18} />, path: "/products", count: "100" },
    { name: "Assignments", icon: <AlignCenter size={18} />, path: "/assignments", count: "10" },
    { name: "Categories", icon: <Layers size={18} />, path: "/categories" },
  ]

  const handleLogout = () => {
    Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to end your current session?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3b82f6',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'Cancel',
      background: isDarkMode ? '#1e293b' : '#ffffff',
      color: isDarkMode ? '#f8fafc' : '#1e293b',
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
      }
    })
  }

  const handleItemClick = () => {
    if (onClose && window.innerWidth < 768) {
      onClose()
    }
  }

  return (
    <div className={`w-64 h-full flex flex-col border-r shadow-sm transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
    }`}>
      {/* Logo Section */}
      <div className={`p-6 border-b transition-colors duration-200 ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-1">
          <div className="bg-blue-600 text-white p-2 rounded-md">
            <Package className="h-5 w-5" />
          </div>
          <h1 className={`text-xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            iHUZA
          </h1>
        </div>
        <p className={`text-xs font-medium ml-11 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
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
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? isDarkMode
                    ? 'bg-blue-900/30 text-white border border-blue-800'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                  : isDarkMode
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white border border-transparent'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={isActive 
                  ? 'text-blue-500' 
                  : isDarkMode 
                    ? 'text-gray-400' 
                    : 'text-gray-500'
                }>
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </div>
              {item.count && (
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  isActive
                    ? isDarkMode
                      ? 'bg-blue-800 text-blue-100'
                      : 'bg-blue-100 text-blue-800'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-200 text-gray-600'
                }`}>
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
            className={`flex items-center gap-3 p-3 rounded-lg w-full transition-all duration-200 ${
              isDarkMode
                ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <LogOut className="h-4 w-4" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  )
}