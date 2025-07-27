import { createContext, useState, useEffect } from "react"

export const InventoryContext = createContext()

export function InventoryProvider({ children }) {
  const [inventoryData, setInventoryData] = useState({
    products: [],
    users: [],
    activities: [],
    loading: true,
  })

  useEffect(() => {
    // Mock data matching the PDF
    const mockData = {
      products: [
        { id: 1, name: 'MacBook Pro 16"', category: "Laptops", date: "Dec 10, 2024", status: "In Stock" },
        { id: 2, name: "iPad Air", category: "Tablets", date: "Dec 7, 2024", status: "In Stock" },
        { id: 3, name: "Dell XPS 13", category: "Laptops", date: "Dec 9, 2024", status: "Assigned" },
        { id: 4, name: "Surface Pro 9", category: "Tablets", date: "Dec 6, 2024", status: "Low Stock" },
        { id: 5, name: "iPhone 15 Pro", category: "Mobile", date: "Dec 8, 2024", status: "Out of Stock" },
      ],
      users: [
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
      ],
      activities: [
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
        {
          id: 3,
          type: "product_assigned",
          title: "Product assigned to Michael Brown",
          details: "Apple MacBook Air M2 (PROD2024001)",
          date: "Dec 2, 2024",
        },
        {
          id: 4,
          type: "maintenance",
          title: "Product sent for maintenance",
          details: "HP Spectre x360 - Screen replacement required",
          date: "Jan 16, 2024",
        },
        {
          id: 5,
          type: "user_registered",
          title: "New user registered",
          details: "Amanda White - Staff Member",
          date: "Jan 14, 2024",
        },
      ],
    }

    setTimeout(() => {
      setInventoryData({
        ...mockData,
        loading: false,
      })
    }, 500)
  }, [])

  return <InventoryContext.Provider value={inventoryData}>{children}</InventoryContext.Provider>
}