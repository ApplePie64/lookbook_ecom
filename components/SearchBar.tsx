import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="sticky top-[60px] z-40 px-4 pb-3 pt-3 bg-black/60 backdrop-blur-xl">
      <div className="relative flex items-center bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50">
        <Search className="absolute left-3 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent pl-10 pr-12 py-3 text-white placeholder-neutral-400 focus:outline-none text-sm"
        />
      </div>
    </div>
  )
}
