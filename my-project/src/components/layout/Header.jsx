"use client"

import { Bell, User, Moon, Sun, Settings, LogOut, Menu } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"
import { useAuth } from "../../context/AuthContext"
import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const Header = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const { user: authUser, logout } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setDropdownOpen(false)
  }, [location.pathname])

  const getPageTitle = () => {
    const path = location.pathname
    if (path === "/") return "Dashboard"
    if (path === "/users") return "User Management"
    if (path === "/products") return "Product Inventory"
    if (path === "/assignments") return "Assignments"
    if (path === "/categories") return "Categories"
    return "Dashboard"
  }

  const handleLogout = () => {
    setDropdownOpen(false)
    logout()
  }

  return (
    <header className={`sticky top-0 z-30 border-b transition-colors duration-200 ${
      isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
    }`}>
      <div className="flex items-center justify-between px-6 py-5 sm:px-6">
        {/* Mobile Menu Button */}
        {children}

        {/* Page Title */}
        <div className="flex-1 ml-4 md:ml-0">
          <h2 className={`text-xl font-semibold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}>
            {getPageTitle()}
          </h2>
          <p className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            Welcome back, {authUser?.name || "Admin"}
          </p>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg hover:bg-opacity-20 transition-colors ${
              isDarkMode ? "hover:bg-gray-700 text-yellow-300" : "hover:bg-gray-100 text-gray-600"
            }`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              className={`p-2 rounded-lg hover:bg-opacity-20 transition-colors ${
                isDarkMode ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-100 text-gray-600"
              }`}
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </div>

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              aria-label="User menu"
            >
              <div className="text-left hidden sm:block">
                <p className={`text-sm font-medium ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  {authUser?.name || "Admin"}
                </p>
              </div>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                isDarkMode ? "bg-blue-700" : "bg-blue-600"
              }`}>
                <User className="h-4 w-4 text-white" />
              </div>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 ${
                  isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                }`}
              >
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </div>
                </a>
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </div>
                </a>
                <button
                  onClick={handleLogout}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header