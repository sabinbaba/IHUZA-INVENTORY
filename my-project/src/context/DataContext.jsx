"use client"

import { createContext, useContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useLocalStorage("products", [
    {
      id: 1,
      name: 'MacBook Pro 16"',
      category: "Laptops",
      date: "Dec 10, 2024",
      status: "In Stock",
      serialNumber: "PROD2024001",
      description: "High-performance laptop",
    },
    {
      id: 2,
      name: "iPad Air",
      category: "Tablets",
      date: "Dec 7, 2024",
      status: "In Stock",
      serialNumber: "PROD2024002",
      description: "Lightweight tablet",
    },
    {
      id: 3,
      name: "Dell XPS 13",
      category: "Laptops",
      date: "Dec 9, 2024",
      status: "Assigned",
      serialNumber: "PROD2024003",
      description: "Business laptop",
    },
    {
      id: 4,
      name: "Surface Pro 9",
      category: "Tablets",
      date: "Dec 6, 2024",
      status: "Low Stock",
      serialNumber: "PROD2024004",
      description: "2-in-1 device",
    },
    {
      id: 5,
      name: "iPhone 15 Pro",
      category: "Mobile",
      date: "Dec 8, 2024",
      status: "Out of Stock",
      serialNumber: "PROD2024005",
      description: "Latest iPhone",
    },
  ])

  const [users, setUsers] = useLocalStorage("users", [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@ihuza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "5 hours ago",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "m.brown@ihuza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "1 day ago",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "3 days ago",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "d.wilson@ihuza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "6 hours ago",
    },
  ])

  const [assignments, setAssignments] = useLocalStorage("assignments", [
    { id: 1, productId: 3, userId: 2, date: "Dec 1, 2024", status: "Active", notes: "For project work" },
    { id: 2, productId: 1, userId: 1, date: "Dec 3, 2024", status: "Active", notes: "Development work" },
  ])

  const [activities, setActivities] = useLocalStorage("activities", [
    {
      id: 1,
      type: "product_added",
      title: "Product added to inventory",
      details: 'MacBook Pro 16" M3 (PROD2024001)',
      date: "Dec 4, 2024",
    },
    {
      id: 2,
      type: "product_assigned",
      title: "Product assigned to Sarah Johnson",
      details: "Dell ThinkPad X1 Carbon (PROD2024001)",
      date: "Dec 3, 2024",
    },
  ])

  // Product management functions
  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
    }
    setProducts((prev) => [...prev, newProduct])

    // Add activity
    addActivity({
      type: "product_added",
      title: "Product added to inventory",
      details: `${newProduct.name} (${newProduct.serialNumber})`,
    })
  }

  const updateProduct = (id, productData) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...productData } : p)))
  }

  const deleteProduct = (id) => {
    const product = products.find((p) => p.id === id)
    setProducts((prev) => prev.filter((p) => p.id !== id))

    // Remove any assignments for this product
    setAssignments((prev) => prev.filter((a) => a.productId !== id))

    if (product) {
      addActivity({
        type: "product_removed",
        title: "Product removed from inventory",
        details: `${product.name} (${product.serialNumber})`,
      })
    }
  }

  // Assignment management functions
  const addAssignment = (assignmentData) => {
    const newAssignment = {
      ...assignmentData,
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      status: "Active",
    }
    setAssignments((prev) => [...prev, newAssignment])

    // Update product status to Assigned
    updateProduct(assignmentData.productId, { status: "Assigned" })

    // Add activity
    const user = users.find((u) => u.id == assignmentData.userId)
    const product = products.find((p) => p.id == assignmentData.productId)
    if (user && product) {
      addActivity({
        type: "product_assigned",
        title: `Product assigned to ${user.name}`,
        details: `${product.name} (${product.serialNumber})`,
      })
    }
  }

  const updateAssignment = (id, assignmentData) => {
    setAssignments((prev) => prev.map((a) => (a.id === id ? { ...a, ...assignmentData } : a)))
  }

  const revokeAssignment = (id) => {
    const assignment = assignments.find((a) => a.id === id)
    if (assignment) {
      // Update product status back to In Stock
      updateProduct(assignment.productId, { status: "In Stock" })

      // Update assignment status
      setAssignments((prev) => prev.map((a) => (a.id === id ? { ...a, status: "Returned" } : a)))

      // Add activity
      const user = users.find((u) => u.id == assignment.userId)
      const product = products.find((p) => p.id == assignment.productId)
      if (user && product) {
        addActivity({
          type: "product_returned",
          title: `Product returned by ${user.name}`,
          details: `${product.name} (${product.serialNumber})`,
        })
      }
    }
  }

  // Activity management
  const addActivity = (activityData) => {
    const newActivity = {
      ...activityData,
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
    }
    setActivities((prev) => [newActivity, ...prev.slice(0, 9)]) // Keep only last 10 activities
  }

  // User management functions
  const addUser = (userData) => {
    const newUser = {
      ...userData,
      id: Date.now(),
      status: "Active",
      lastLogin: "Never",
    }
    setUsers((prev) => [...prev, newUser])

    addActivity({
      type: "user_registered",
      title: "New user registered",
      details: `${newUser.name} - ${newUser.role}`,
    })
  }

  const updateUser = (id, userData) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...userData } : u)))
  }

  const deleteUser = (id) => {
    const user = users.find((u) => u.id === id)
    setUsers((prev) => prev.filter((u) => u.id !== id))

    // Revoke all assignments for this user
    const userAssignments = assignments.filter((a) => a.userId === id)
    userAssignments.forEach((assignment) => {
      revokeAssignment(assignment.id)
    })

    if (user) {
      addActivity({
        type: "user_removed",
        title: "User removed",
        details: `${user.name} - ${user.role}`,
      })
    }
  }

  return (
    <DataContext.Provider
      value={{
        products,
        users,
        assignments,
        activities,
        addProduct,
        updateProduct,
        deleteProduct,
        addAssignment,
        updateAssignment,
        revokeAssignment,
        addUser,
        updateUser,
        deleteUser,
        addActivity,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
