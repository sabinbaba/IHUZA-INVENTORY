"use client"

import { Plus, User } from "lucide-react"
import { useDarkMode } from "../../context/DarkModeContext"

export default function UsersTable() {
  const { isDarkMode } = useDarkMode()

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

  const getRoleText = (role) => {
    const colors = isDarkMode ? {
      Admin: "text-purple-400",
      Manager: "text-blue-400",
      Staff: "text-gray-400"
    } : {
      Admin: "text-purple-600",
      Manager: "text-blue-600",
      Staff: "text-gray-600"
    }
    return <span className={`font-medium ${colors[role] || "text-gray-600"}`}>{role}</span>
  }

  const getStatusText = (status) => {
    const colors = isDarkMode ? {
      Active: "text-green-400",
      Inactive: "text-red-400"
    } : {
      Active: "text-green-600",
      Inactive: "text-red-600"
    }
    return <span className={`font-medium ${colors[status] || "text-gray-600"}`}>{status}</span>
  }

  return (
    <div className={`rounded-xl border p-6 shadow-sm transition-colors duration-200 ${
      isDarkMode 
        ? "bg-gray-800 border-gray-700" 
        : "bg-white border-gray-200"
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className={`text-lg font-semibold ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}>
          Users
        </h2>
        <button className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm w-full sm:w-auto transition-colors shadow-sm ${
          isDarkMode
            ? "bg-blue-700 hover:bg-blue-600 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}>
          <Plus className="h-4 w-4" />
          Add User
        </button>
      </div>

      {/* Mobile Card View */}
      <div className="block sm:hidden space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className={`rounded-lg p-4 border transition-colors ${
              isDarkMode
                ? "bg-gray-700/30 border-gray-600"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <User className={`h-5 w-5 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`} />
                <div>
                  <div className={`font-medium ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}>
                    {user.name}
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}>
                    {user.email}
                  </div>
                </div>
              </div>
              {getStatusText(user.status)}
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                Role:
              </div>
              {getRoleText(user.role)}
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                Last Login:
              </div>
              <div className={`text-sm ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}>
                {user.lastLogin}
              </div>
            </div>

            <div className={`flex gap-2 pt-2 ${
              isDarkMode ? "border-gray-600" : "border-gray-200"
            }`} style={{ borderTopWidth: "1px" }}>
              <button className={`flex-1 text-sm py-2 px-3 rounded transition-colors ${
                isDarkMode
                  ? "bg-blue-900/30 text-blue-400 hover:bg-blue-900/50"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100"
              }`}>
                Edit
              </button>
              <button className={`flex-1 text-sm py-2 px-3 rounded transition-colors ${
                isDarkMode
                  ? "bg-red-900/30 text-red-400 hover:bg-red-900/50"
                  : "bg-red-50 text-red-600 hover:bg-red-100"
              }`}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b text-left text-sm ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}>
              <th className={`pb-3 font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                USER
              </th>
              <th className={`pb-3 font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                ROLE
              </th>
              <th className={`pb-3 font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                STATUS
              </th>
              <th className={`pb-3 font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                LAST LOGIN
              </th>
              <th className={`pb-3 font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`border-b hover:bg-opacity-50 transition-colors ${
                  isDarkMode 
                    ? "border-gray-700 hover:bg-gray-700" 
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <User className={`h-4 w-4 ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`} />
                    <div>
                      <div className={`font-medium ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}>
                        {user.name}
                      </div>
                      <div className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4">{getRoleText(user.role)}</td>
                <td className="py-4">{getStatusText(user.status)}</td>
                <td className={`py-4 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  {user.lastLogin}
                </td>
                <td className="py-4">
                  <button className={`text-sm mr-3 hover:underline transition-colors ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}>
                    Edit
                  </button>
                  <button className={`text-sm hover:underline transition-colors ${
                    isDarkMode ? "text-red-400" : "text-red-600"
                  }`}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}