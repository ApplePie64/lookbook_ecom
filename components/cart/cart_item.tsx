'use client'

import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CartItemProps {
  id: string
  name: string
  category: string
  size: string
  color: string
  price: number
  quantity: number
  image?: string
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export function CartItem({
  id,
  name,
  category,
  size,
  color,
  price,
  quantity,
  image,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1)
    }
  }

  const handleIncrease = () => {
    onQuantityChange(id, quantity + 1)
  }

  return (
    <div className="flex gap-4 p-4 bg-gray-900 rounded-xl">
      {/* Product Image */}
      <div className="w-20 h-20 rounded-lg bg-gray-800 flex-shrink-0 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-700" />
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-white text-base mb-1">{name}</h3>
        <p className="text-sm text-gray-400 mb-1">{category}</p>
        <div className="flex gap-2 text-xs text-gray-500">
          <span>Size: {size}</span>
          <span>•</span>
          <span>Colour: {color}</span>
        </div>
      </div>

      {/* Price and Quantity */}
      <div className="flex flex-col items-end justify-between">
        <p className="font-bold text-white">₹{price.toFixed(2)}</p>
        
        {/* Quantity Controls */}
        <div className="flex items-center gap-2 bg-gray-800 rounded-lg">
          <button
            onClick={handleDecrease}
            className="p-1.5 hover:bg-gray-700 rounded-l-lg transition"
          >
            <Minus className="w-4 h-4 text-white" />
          </button>
          <span className="px-3 text-white font-medium">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="p-1.5 hover:bg-gray-700 rounded-r-lg transition"
          >
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
