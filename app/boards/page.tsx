"use client"

import { SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import Navigation from "@/components/Navigation"
import FilterModal from "@/components/FilterModal"

type Category = "Clothes" | "Outfits" | "Both"

export default function BoardsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Clothes")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories: Category[] = ["Clothes", "Outfits", "Both"]

  const clothesBoards = [
    { id: 1, size: "small", color: "bg-rose-400" },
    { id: 2, size: "large", color: "bg-rose-400" },
    { id: 3, size: "medium", color: "bg-rose-400" },
    { id: 4, size: "small", color: "bg-rose-400" },
    { id: 5, size: "small", color: "bg-rose-400" },
    { id: 6, size: "small", color: "bg-rose-400" },
    { id: 7, size: "medium", color: "bg-rose-400" },
    { id: 8, size: "small", color: "bg-rose-400" },
  ]

  const outfitsBoards = [
    { id: 9, size: "medium", color: "bg-purple-400" },
    { id: 10, size: "small", color: "bg-purple-400" },
    { id: 11, size: "large", color: "bg-purple-400" },
    { id: 12, size: "small", color: "bg-purple-400" },
    { id: 13, size: "medium", color: "bg-purple-400" },
    { id: 14, size: "small", color: "bg-purple-400" },
  ]

  const bothBoards = [
    { id: 15, size: "small", color: "bg-emerald-400" },
    { id: 16, size: "medium", color: "bg-rose-400" },
    { id: 17, size: "small", color: "bg-purple-400" },
    { id: 18, size: "large", color: "bg-emerald-400" },
    { id: 19, size: "small", color: "bg-rose-400" },
    { id: 20, size: "medium", color: "bg-purple-400" },
    { id: 21, size: "small", color: "bg-emerald-400" },
    { id: 22, size: "small", color: "bg-rose-400" },
    { id: 23, size: "medium", color: "bg-purple-400" },
    { id: 24, size: "small", color: "bg-emerald-400" },
  ]

  const getCurrentBoards = () => {
    switch (activeCategory) {
      case "Clothes":
        return clothesBoards
      case "Outfits":
        return outfitsBoards
      case "Both":
        return bothBoards
    }
  }

  const boards = getCurrentBoards()

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto pb-32">
      <Header />
      <SearchBar />

      <div className="sticky top-[132px] z-30 px-4 pb-4 bg-black/60 backdrop-blur-xl flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-neutral-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsFilterOpen(true)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5 text-white" />
        </button>
      </div>

      <main className="px-4 pt-4 pb-8">
        <div className="columns-2 gap-3 space-y-3">
          {boards.map((board) => (
            <div
              key={board.id}
              className={`${board.color} rounded-3xl break-inside-avoid ${
                board.size === "small"
                  ? "h-40"
                  : board.size === "medium"
                  ? "h-60"
                  : "h-80"
              }`}
            ></div>
          ))}
        </div>
      </main>

      <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      <Navigation />
    </div>
  )
}
