"use client"

import { createContext, useContext, useState, useEffect } from "react"

const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved preference first
    const savedTheme = localStorage.getItem("theme")
    
    // If no saved preference, check system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    // Determine initial mode
    const initialMode = savedTheme ? savedTheme === "dark" : systemPrefersDark
    setIsDarkMode(initialMode)
    applyTheme(initialMode)

    // Cleanup function
    return () => {}
  }, [])

  const applyTheme = (darkMode) => {
    if (typeof document === 'undefined') return // Safety check for SSR
    
    const root = document.documentElement
    root.classList.toggle('dark', darkMode)
    root.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    root.style.colorScheme = darkMode ? 'dark' : 'light'
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