"use client"

import { useState, useRef } from "react"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import Navigation from "@/components/Navigation"

export default function MisfitsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const cards = [
    { id: 1, color: "bg-blue-400" },
    { id: 2, color: "bg-rose-400" },
    { id: 3, color: "bg-emerald-400" },
  ]

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollLeft = container.scrollLeft
    const itemWidth = container.offsetWidth
    const index = Math.round(scrollLeft / itemWidth)
    setCurrentIndex(index)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto pb-32">
      <Header />
      <SearchBar />

      <main className="flex flex-col items-center">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex px-4 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-[calc(100vw-2rem)] max-w-md snap-center"
              >
                <div className={`${card.color} rounded-3xl aspect-[3/4] w-full`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`rounded-full ${
                index === currentIndex
                  ? "w-16 h-1 bg-white"
                  : "w-2 h-2 bg-neutral-600 self-center"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-7xl font-bold text-white tracking-wide" style={{
            fontFamily: 'Arial Black, sans-serif',
            letterSpacing: '0.05em',
            textShadow: '2px 2px 0px rgba(255,255,255,0.3)'
          }}>
            OOTD
          </h2>
        </div>
      </main>

      <Navigation />
    </div>
  )
}
