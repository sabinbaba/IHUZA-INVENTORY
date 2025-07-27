"use client"

import { createContext, useContext, useState, useEffect } from "react"

const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    // 1. Check localStorage for saved preference
    const savedTheme = localStorage.getItem("theme")
    // 2. Check system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    // Set initial state - prefers saved theme, falls back to system preference
    const initialMode = savedTheme ? savedTheme === "dark" : systemPrefersDark
    setIsDarkMode(initialMode)
    applyTheme(initialMode)
  }, [])

  // Apply theme changes to DOM
  const applyTheme = (darkMode) => {
    const root = document.documentElement
    
    if (darkMode) {
      root.classList.add("dark")
      root.setAttribute("data-theme", "dark")
      root.style.colorScheme = "dark"
      document.body.style.backgroundColor = "#0f172a" // dark:bg-slate-900
      document.body.style.color = "#f8fafc" // dark:text-slate-100
    } else {
      root.classList.remove("dark")
      root.setAttribute("data-theme", "light")
      root.style.colorScheme = "light"
      document.body.style.backgroundColor = "#f1f5f9" // bg-slate-100
      document.body.style.color = "#1e293b" // text-slate-800
    }
  }

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem("theme", newMode ? "dark" : "light")
    applyTheme(newMode)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider")
  }
  return context
}