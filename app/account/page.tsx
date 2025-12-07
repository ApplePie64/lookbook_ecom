"use client"

import { useState } from "react"
import { Bell, Menu, Search, Grid3x3, Shirt, ShoppingBag, Package, Pin, Lock } from "lucide-react"
import SearchBar from "@/components/SearchBar"
import Navigation from "@/components/Navigation"

type Tab = "Boards" | "Outfits" | "Wishlist" | "Orders"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Boards")

  const boards = [
    {
      id: 1,
      title: "Liked",
      subtitle: "Your liked activity 2w",
      icon: Pin,
      iconColor: "text-red-500",
      isLocked: false,
      colors: {
        left: "bg-red-500",
        topRight: "bg-blue-500",
        bottomRight: "bg-green-500",
      },
      badge: true,
    },
    {
      id: 2,
      title: "Tech Wear",
      subtitle: "67 Outfits 3w",
      icon: Lock,
      iconColor: "text-white",
      isLocked: true,
      colors: {
        left: "bg-red-500",
        topRight: "bg-blue-500",
        bottomRight: "bg-green-500",
      },
    },
    {
      id: 3,
      title: "Modern Desi",
      subtitle: "6 Outfits 3w",
      icon: Lock,
      iconColor: "text-white",
      isLocked: true,
      colors: {
        left: "bg-red-500",
        topRight: "bg-blue-500",
        bottomRight: "bg-green-500",
      },
    },
    {
      id: 4,
      title: "Old Money",
      subtitle: "11 Outfits 1m",
      icon: Lock,
      iconColor: "text-white",
      isLocked: true,
      colors: {
        left: "bg-red-500",
        topRight: "bg-blue-500",
        bottomRight: "bg-green-500",
      },
    },
  ]

  const tabs: { id: Tab; icon: typeof Grid3x3; label: string }[] = [
    { id: "Boards", icon: Grid3x3, label: "Boards" },
    { id: "Outfits", icon: Shirt, label: "Outfits" },
    { id: "Wishlist", icon: ShoppingBag, label: "Wishlist" },
    { id: "Orders", icon: Package, label: "Orders" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto pb-32">
      {/* Custom Header */}
      <header className="sticky top-0 z-40 px-4 pt-4 pb-3 flex items-center justify-between bg-black/60 backdrop-blur-xl border-b border-white/5">
        <h1 className="text-xl font-bold">_mokap15_</h1>
        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <SearchBar />

      {/* User Profile Section */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">Mr. Mokkapaty</h2>
            <div className="flex gap-4 text-sm text-white/70">
              <span>0 outfits</span>
              <span>69 followers</span>
              <span>96 following</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Navigation */}
      <div className="sticky top-[132px] z-30 px-4 pb-2 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-2 px-2 transition-colors relative ${
                  isActive ? "text-white" : "text-white/60"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{tab.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="px-4 pt-4 pb-8">
        {activeTab === "Boards" && (
          <div className="grid grid-cols-2 gap-3">
            {boards.map((board) => {
              const Icon = board.icon
              return (
                <div
                  key={board.id}
                  className="relative rounded-2xl overflow-hidden aspect-square bg-neutral-900 border border-white/10"
                >
                  {/* Colored Sections */}
                  <div className="absolute inset-0 flex">
                    <div className={`${board.colors.left} w-2/3`}></div>
                    <div className="flex flex-col w-1/3">
                      <div className={`${board.colors.topRight} flex-1`}></div>
                      <div className={`${board.colors.bottomRight} flex-1`}></div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-2 left-2 z-10">
                    <Icon className={`w-4 h-4 ${board.iconColor}`} />
                  </div>

                  {/* Badge (for Liked board) */}
                  {board.badge && (
                    <div className="absolute top-2 right-2 z-10">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-sm font-semibold mb-0.5">{board.title}</h3>
                    <p className="text-xs text-white/70">{board.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {activeTab === "Outfits" && (
          <div className="flex flex-col items-center justify-center py-12 text-white/50">
            <Shirt className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-sm">No outfits yet</p>
          </div>
        )}

        {activeTab === "Wishlist" && (
          <div className="flex flex-col items-center justify-center py-12 text-white/50">
            <ShoppingBag className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-sm">Your wishlist is empty</p>
          </div>
        )}

        {activeTab === "Orders" && (
          <div className="flex flex-col items-center justify-center py-12 text-white/50">
            <Package className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-sm">No orders yet</p>
          </div>
        )}
      </main>

      <Navigation />
    </div>
  )
}

