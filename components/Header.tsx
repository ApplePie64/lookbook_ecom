import { Bell } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 pb-3 flex items-center justify-between bg-black/60 backdrop-blur-xl border-b border-white/5">
      <h1 className="text-3xl font-bold">Misfits</h1>
      <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
        <Bell className="w-6 h-6" />
        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
      </button>
    </header>
  )
}
