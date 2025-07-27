"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { InventoryProvider } from "./context/InventoryContext"
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext"
import { AuthProvider } from "./context/AuthContext"
import { DataProvider } from "./context/DataContext"
import ProtectedRoute from "./components/layout/ProtectedRoute"
import Sidebar from "./components/layout/Sidebar"
import Header from "./components/layout/Header"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Products from "./pages/Products"
import Assignments from "./pages/Assignments"
import Categories from "./pages/Categories"
import { Menu, X } from "lucide-react"

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setSidebarOpen(!mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Mobile overlay */}
      {sidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-50 h-full transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <Sidebar onClose={() => isMobile && setSidebarOpen(false)} />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Header>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </Header>

        <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="p-4 sm:p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <DarkModeProvider>
      <AuthProvider>
        <DataProvider>
          <InventoryProvider>
            <Router>
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            </Router>
          </InventoryProvider>
        </DataProvider>
      </AuthProvider>
    </DarkModeProvider>
  )
}

export default App