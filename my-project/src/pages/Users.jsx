"use client"

import { useInventory } from "../hooks/useInventory"
import Badge from "../components/ui/Badge"
import { Plus, User } from "lucide-react"
import { useDarkMode } from "../context/DarkModeContext"

const Users = () => {
  const { loading } = useInventory()
  const { isDarkMode } = useDarkMode()

  // Complete mock users data
  const users = [
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
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa.a@ihuza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "30 min ago",
    },
    {
      id: 7,
      name: "Robert Taylor",
      email: "r.taylor@ihuza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "2 days ago",
    },
    {
      id: 8,
      name: "Jennifer Miller",
      email: "j.miller@ihuza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "4 hours ago",
    },
    {
      id: 9,
      name: "Christopher Lee",
      email: "c.lee@ihuza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "1 hour ago",
    },
    {
      id: 10,
      name: "Amanda White",
      email: "a.white@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1 week ago",
    },
  ]

  return (
    <div 
      className="space-y-4 sm:space-y-6 min-h-screen p-4 transition-colors duration-200"
      style={{ 
        backgroundColor: isDarkMode ? "#0f172a" : "#f1f5f9" 
      }}
    >
      {/* Header Section */}
      <div
        className="p-4 sm:p-6 rounded-lg border transition-colors duration-200"
        style={{
          backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
          borderColor: isDarkMode ? "#334155" : "#e2e8f0",
        }}
      >
        <h1 
          className="text-xl sm:text-2xl font-bold transition-colors duration-200"
          style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
        >
          User Management
        </h1>
        <p 
          className="mt-2 transition-colors duration-200"
          style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
        >
          View and manage all registered users
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div 
            className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 transition-colors duration-200"
            style={{ 
              borderColor: isDarkMode ? "#60a5fa" : "#2563eb",
            }}
          />
        </div>
      ) : (
        <div
          className="rounded-lg border p-4 sm:p-6 transition-colors duration-200"
          style={{
            backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
            borderColor: isDarkMode ? "#334155" : "#e2e8f0",
          }}
        >
          {/* Table Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
            <h2 
              className="text-lg font-semibold transition-colors duration-200"
              style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
            >
              Users ({users.length})
            </h2>
            <button 
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm w-full sm:w-auto transition-colors duration-200"
              style={{
                backgroundColor: isDarkMode ? "#2563eb" : "#2563eb",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? "#1d4ed8" : "#1e40af"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? "#2563eb" : "#2563eb"
              }}
            >
              <Plus className="h-4 w-4" />
              Add User
            </button>
          </div>

          {/* Mobile View - Cards */}
          <div className="block sm:hidden space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="rounded-lg p-4 border transition-colors duration-200"
                style={{
                  backgroundColor: isDarkMode ? "#334155" : "#f8fafc",
                  borderColor: isDarkMode ? "#475569" : "#e2e8f0",
                }}
              >
                {/* User Info */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-200"
                      style={{ backgroundColor: isDarkMode ? "#1d4ed8" : "#2563eb" }}
                    >
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div 
                        className="font-medium transition-colors duration-200"
                        style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
                      >
                        {user.name}
                      </div>
                      <div 
                        className="text-sm transition-colors duration-200"
                        style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                      >
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <Badge 
                    color={user.status === "Active" ? "green" : "red"} 
                    text={user.status}
                    darkMode={isDarkMode}
                  />
                </div>

                {/* User Details */}
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="text-sm transition-colors duration-200"
                    style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                  >
                    Role:
                  </div>
                  <Badge
                    color={user.role === "Admin" ? "purple" : user.role === "Manager" ? "blue" : "gray"}
                    text={user.role}
                    darkMode={isDarkMode}
                  />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="text-sm transition-colors duration-200"
                    style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                  >
                    Last Login:
                  </div>
                  <div 
                    className="text-sm transition-colors duration-200"
                    style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
                  >
                    {user.lastLogin}
                  </div>
                </div>

                {/* Action Buttons */}
                <div 
                  className="flex gap-2 pt-2 transition-colors duration-200"
                  style={{ borderTop: `1px solid ${isDarkMode ? "#475569" : "#e2e8f0"}` }}
                >
                  <button 
                    className="flex-1 text-sm py-2 px-3 rounded transition-colors duration-200"
                    style={{
                      backgroundColor: isDarkMode ? "#1e3a8a" : "#dbeafe",
                      color: isDarkMode ? "#93c5fd" : "#1d4ed8",
                    }}
                  >
                    Edit
                  </button>
                  <button 
                    className="flex-1 text-sm py-2 px-3 rounded transition-colors duration-200"
                    style={{
                      backgroundColor: isDarkMode ? "#7f1d1d" : "#fee2e2",
                      color: isDarkMode ? "#fca5a5" : "#b91c1c",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr 
                  className="border-b text-left text-sm transition-colors duration-200"
                  style={{ borderColor: isDarkMode ? "#475569" : "#e2e8f0" }}
                >
                  <th className="pb-3 pr-4">USER</th>
                  <th className="pb-3 pr-4">ROLE</th>
                  <th className="pb-3 pr-4">STATUS</th>
                  <th className="pb-3 pr-4">LAST LOGIN</th>
                  <th className="pb-3">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr 
                    key={user.id} 
                    className="border-b transition-colors duration-200 hover:bg-opacity-50"
                    style={{
                      borderColor: isDarkMode ? "#475569" : "#e2e8f0",
                    }}
                  >
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="h-8 w-8 rounded-full flex items-center justify-center transition-colors duration-200"
                          style={{ backgroundColor: isDarkMode ? "#1d4ed8" : "#2563eb" }}
                        >
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div 
                            className="font-medium transition-colors duration-200"
                            style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
                          >
                            {user.name}
                          </div>
                          <div 
                            className="text-xs transition-colors duration-200"
                            style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                          >
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pr-4">
                      <Badge
                        color={user.role === "Admin" ? "purple" : user.role === "Manager" ? "blue" : "gray"}
                        text={user.role}
                        darkMode={isDarkMode}
                      />
                    </td>
                    <td className="py-4 pr-4">
                      <Badge 
                        color={user.status === "Active" ? "green" : "red"} 
                        text={user.status}
                        darkMode={isDarkMode}
                      />
                    </td>
                    <td 
                      className="py-4 pr-4 text-sm transition-colors duration-200"
                      style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}
                    >
                      {user.lastLogin}
                    </td>
                    <td className="py-4">
                      <button 
                        className="text-sm mr-3 hover:underline transition-colors duration-200"
                        style={{ color: isDarkMode ? "#93c5fd" : "#2563eb" }}
                      >
                        Edit
                      </button>
                      <button 
                        className="text-sm hover:underline transition-colors duration-200"
                        style={{ color: isDarkMode ? "#fca5a5" : "#dc2626" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Users