'use client'

import { Home } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface AddressCardProps {
  id: string
  label: string
  address: string
  isSelected: boolean
  onSelect: (id: string) => void
}

export function AddressCard({
  id,
  label,
  address,
  isSelected,
  onSelect,
}: AddressCardProps) {
  return (
    <button
      onClick={() => onSelect(id)}
      className={`w-full flex items-start gap-4 p-4 rounded-xl transition text-left ${
        isSelected
          ? 'bg-gray-800 border-2 border-blue-500'
          : 'bg-gray-900 border-2 border-transparent hover:border-gray-700'
      }`}
    >
      {/* Home Icon */}
      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
        <Home className="w-6 h-6 text-gray-400" />
      </div>

      {/* Address Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-white">{label}</h3>
          {isSelected && (
            <Badge className="bg-green-500 hover:bg-green-500 text-white text-xs px-2 py-0">
              SELECTED
            </Badge>
          )}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">{address}</p>
      </div>
    </button>
  )
}
