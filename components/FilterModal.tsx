"use client"

import { X, Maximize2, Palette, Layers, Tag, Star, GripVertical, Truck, Percent, Square } from "lucide-react"

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const filterOptions = [
    { id: "size", label: "Size", icon: Maximize2 },
    { id: "colour", label: "Colour", icon: Palette },
    { id: "brand", label: "Brand", icon: Layers },
    { id: "price", label: "Price Range", icon: Tag },
    { id: "rating", label: "Rating", icon: Star },
    { id: "pattern", label: "Pattern", icon: GripVertical },
    { id: "delivery", label: "Delivery Time", icon: Truck },
    { id: "discount", label: "Discount", icon: Percent },
    { id: "fabrics", label: "Fabrics", icon: Square },
  ]

  const handleFilterClick = (filterId: string) => {
    console.log(`Filter clicked: ${filterId}`)
    // TODO: Implement filter logic
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Filter Panel */}
      <div
        className="relative bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-white/20 p-6 w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Filter Grid */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {filterOptions.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.id}
                onClick={() => handleFilterClick(option.id)}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs text-white font-medium">{option.label}</span>
              </button>
            )
          })}
        </div>

        {/* Red line at bottom (as shown in image) */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-b-2xl" />
      </div>
    </div>
  )
}

