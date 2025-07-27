const colorMap = {
  green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  gray: "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300",
}

export default function Badge({ color = "gray", text }) {
  return <span className={`text-xs px-2 py-1 rounded-full font-medium ${colorMap[color]}`}>{text}</span>
}
