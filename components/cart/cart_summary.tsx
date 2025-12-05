'use client'

import { Separator } from '@/components/ui/separator'

interface CartSummaryProps {
  itemTotal: number
  platformFee: number
  deliveryFee: number
  discount: number
  taxes: number
  showPayButton?: boolean
  onPayClick?: () => void
}

export function CartSummary({
  itemTotal,
  platformFee,
  deliveryFee,
  discount,
  taxes,
  showPayButton = true,
  onPayClick,
}: CartSummaryProps) {
  const total = itemTotal + platformFee + deliveryFee - discount + taxes

  return (
    <div className="bg-gray-900 rounded-xl p-4 space-y-3">
      {/* Price Breakdown */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-gray-300">
          <span>Item Total</span>
          <span>₹{itemTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Platform Fee</span>
          <span>₹{platformFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee.toFixed(2)}</span>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Discount and Taxes */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-green-400">
          <span>Discount Applied (MISFIT)</span>
          <span>- ₹{discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Taxes</span>
          <span>₹{taxes.toFixed(2)}</span>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Total */}
      <div className="flex justify-between text-lg font-bold text-white">
        <span>To Pay</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

      {/* Pay Button */}
      {showPayButton && (
        <button
          onClick={onPayClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition mt-4"
        >
          Pay ₹{total.toFixed(2)}
        </button>
      )}
    </div>
  )
}
