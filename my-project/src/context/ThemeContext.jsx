"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    console.log("🎯 toggleDarkMode function called")
    console.log("Current isDarkMode state:", isDarkMode)

    const newMode = !isDarkMode
    console.log("New mode will be:", newMode)

    // Update state
    setIsDarkMode(newMode)

    // Apply to DOM immediately and forcefully
    const html = document.documentElement
    const body = document.body

    if (newMode) {
      html.classList.add("dark")
      body.classList.add("dark")
      html.setAttribute("data-theme", "dark")
      console.log("✅ Added 'dark' class to html and body")
    } else {
      html.classList.remove("dark")
      body.classList.remove("dark")
      html.setAttribute("data-theme", "light")
      console.log("✅ Removed 'dark' class from html and body")
    }

    // Save to localStorage
    localStorage.setItem("theme", newMode ? "dark" : "light")
    console.log("💾 Saved to localStorage:", newMode ? "dark" : "light")

    // Force style recalculation
    html.style.colorScheme = newMode ? "dark" : "light"
    body.style.backgroundColor = newMode ? "#111827" : "#f9fafb"
    body.style.color = newMode ? "#f9fafb" : "#111827"

    console.log("🎨 Applied inline styles for immediate effect")

    // Trigger a custom event to notify all components
    window.dispatchEvent(new CustomEvent("themeChange", { detail: { isDarkMode: newMode } }))
  }

  // Initialize theme on mount
  useEffect(() => {
    console.log("🚀 ThemeProvider initializing...")

    // Clear any existing classes first
    const html = document.documentElement
    const body = document.body
    html.classList.remove("dark")
    body.classList.remove("dark")
    html.setAttribute("data-theme", "light")
    html.style.colorScheme = "light"
    body.style.backgroundColor = "#f9fafb"
    body.style.color = "#111827"

    const savedTheme = localStorage.getItem("theme")
    console.log("📱 Saved theme from localStorage:", savedTheme)

    if (savedTheme === "dark") {
      console.log("🌙 Setting dark mode from localStorage")
      setIsDarkMode(true)
      html.classList.add("dark")
      body.classList.add("dark")
      html.setAttribute("data-theme", "dark")
      html.style.colorScheme = "dark"
      body.style.backgroundColor = "#111827"
      body.style.color = "#f9fafb"
    } else {
      console.log("☀️ Setting light mode (default)")
      setIsDarkMode(false)
      localStorage.setItem("theme", "light")
    }
  }, [])

  console.log("🔄 ThemeProvider render - isDarkMode:", isDarkMode)

  return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}
