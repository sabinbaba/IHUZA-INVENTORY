"use client"

import { useAuth } from "../../context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"
import LoginForm from "../auth/LoginForm"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    // Only redirect if we're not already on the login page
    if (location.pathname === "/login") {
      return <LoginForm />
    }
    // Redirect to login page, preserving the location they came from
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
