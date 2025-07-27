"use client"

import { useInventory } from "../hooks/useInventory"
import { ClipboardList } from "lucide-react"
import { useDarkMode } from "../context/DarkModeContext"

const Assignments = () => {
  const { loading } = useInventory()
  const { isDarkMode } = useDarkMode()

  // Mock assignment data
  const assignments = [
    { id: 1, product: 'MacBook Pro 16"', user: "John Smith", date: "Dec 1, 2024" },
    { id: 2, product: "Dell XPS 13", user: "Sarah Johnson", date: "Dec 3, 2024" },
  ]

  return (
    <div className="bg-gray-900 min-h-screen w-full p-0 m-0">
      {/* Header Section - Now as a card */}
      <div className="bg-gray-800 w-full p-6 rounded-none border-b border-gray-700">
        <div className="flex items-center gap-3">
          <ClipboardList className="h-6 w-6 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-gray-100">
              Product Assignments
            </h1>
            <p className="text-gray-400">
              Track all product assignments to users
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Full width and height */}
      <div className="w-full h-[calc(100vh-80px)]"> {/* Adjust based on header height */}
        {loading ? (
          <div className="flex justify-center items-center h-full bg-gray-900">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400" />
          </div>
        ) : (
          <div className="bg-gray-800 h-full w-full overflow-hidden rounded-none">
            <div className="overflow-auto h-full">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800 sticky top-0">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">
                      Assigned To
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">
                      Date Assigned
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 bg-gray-900">
                  {assignments.map((assignment) => (
                    <tr key={assignment.id} className="hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-100">
                        {assignment.product}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                        {assignment.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                        {assignment.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-400 hover:text-blue-300 text-sm mr-3">
                          Edit
                        </button>
                        <button className="text-red-400 hover:text-red-300 text-sm">
                          Revoke
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
    </div>
  )
}

export default Assignments