"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Mock authentication - replace with real API call
    const mockUsers = [
      { id: 1, email: "admin@ihuza.com", password: "admin123", name: "Admin User", role: "Admin" },
      { id: 2, email: "manager@ihuza.com", password: "manager123", name: "Manager User", role: "Manager" },
      { id: 3, email: "staff@ihuza.com", password: "staff123", name: "Staff User", role: "Staff" },
    ]

    const foundUser = mockUsers.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      setIsAuthenticated(true)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))
      return { success: true }
    } else {
      return { success: false, error: "Invalid email or password" }
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>{children}</AuthContext.Provider>
  )
}
