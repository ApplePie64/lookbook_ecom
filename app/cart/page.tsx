'use client'

import { useState } from 'react'
import { ChevronLeft, Plus } from 'lucide-react'
import { CartItem } from '@/components/cart/cart_item'
import { CartSummary } from '@/components/cart/cart_summary'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface CartItemType {
  id: string
  name: string
  category: string
  size: string
  color: string
  price: number
  quantity: number
  image?: string
}

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: '1',
      name: 'Great Eastern',
      category: 'T-Shirt',
      size: 'S',
      color: 'White',
      price: 69.00,
      quantity: 1,
    },
    {
      id: '2',
      name: 'Extragavanza',
      category: 'Sweatshirt',
      size: 'S',
      color: 'Gray',
      price: 20.00,
      quantity: 1,
    },
    {
      id: '3',
      name: 'Flagship',
      category: 'Pants',
      size: '32',
      color: 'Black',
      price: 51.00,
      quantity: 1,
    },
  ])

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const handleRemove = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const handleCheckout = () => {
    router.push('/cart/checkout')
  }

  // Calculate totals
  const itemTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const platformFee = 10.00
  const deliveryFee = 2.00
  const discount = 20.00
  const taxes = 1.00

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-800 rounded-full transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl font-semibold">Cart</h1>
              <p className="text-sm text-gray-400">Mk Lotus, 100ft Road, Sampath N...</p>
            </div>
          </div>
          <button className="p-2">
            <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-4">
        {/* Cart Items */}
        <div className="space-y-3">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              {...item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </div>

        {/* Add Items Button */}
        <button className="w-full py-3 border-2 border-dashed border-gray-700 rounded-xl text-gray-400 hover:border-gray-600 hover:text-gray-300 transition flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" />
          Add Items
        </button>

        {/* Cart Summary */}
        <CartSummary
          itemTotal={itemTotal}
          platformFee={platformFee}
          deliveryFee={deliveryFee}
          discount={discount}
          taxes={taxes}
          showPayButton={false}
        />

        {/* Cancellation Policy */}
        <div className="bg-gray-900 rounded-xl p-4">
          <h3 className="font-semibold text-white mb-2">Cancellation policy:</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Please double-check your order and address details. Orders are non-refundable once placed.
          </p>
        </div>

        {/* Pay Button */}
        <div className="flex items-center gap-3 pt-4">
          <div className="flex-1">
            <p className="text-xs text-gray-400 mb-1">PAY USING △</p>
            <p className="text-sm font-medium">Pay on Delivery (Cash/UPI)</p>
          </div>
          <button
            onClick={handleCheckout}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            Pay ₹{(itemTotal + platformFee + deliveryFee - discount + taxes).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  )
}
