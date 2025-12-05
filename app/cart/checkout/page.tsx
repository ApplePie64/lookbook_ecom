'use client'

import { useState } from 'react'
import { ChevronLeft, Plus, X } from 'lucide-react'
import { CartItem } from '@/components/cart/cart_item'
import { CartSummary } from '@/components/cart/cart_summary'
import { AddressCard } from '@/components/cart/address_card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
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

interface Address {
  id: string
  label: string
  address: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const [selectedAddress, setSelectedAddress] = useState('home')
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(true)

  const [cartItems] = useState<CartItemType[]>([
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

  const addresses: Address[] = [
    {
      id: 'home',
      label: 'Home',
      address: 'Mk Gold Coast, Flat No. 69 100ft Road, Sampath Nagar, Srinivasa Nagar, Yendada, Visakhapatnam, Andhra Pradesh 530045, India',
    },
    {
      id: 'work',
      label: 'Work',
      address: 'Flat No-401, Vaibhavs Landmark, Yendada Petrol Bunk, Yendada, Endada, Visakhapatnam, Andhra Pradesh 530045, India',
    },
  ]

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
              <h1 className="text-xl font-semibold">Cart - Choose address</h1>
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

      {/* Address Selection Dialog */}
      <Dialog open={isAddressDialogOpen} onOpenChange={setIsAddressDialogOpen}>
        <DialogContent className="bg-gray-950 border-gray-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold">Choose a delivery address</DialogTitle>
              <button
                onClick={() => setIsAddressDialogOpen(false)}
                className="p-2 hover:bg-gray-800 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </DialogHeader>

          <div className="space-y-3 mt-4">
            {addresses.map(address => (
              <AddressCard
                key={address.id}
                id={address.id}
                label={address.label}
                address={address.address}
                isSelected={selectedAddress === address.id}
                onSelect={(id) => {
                  setSelectedAddress(id)
                  setIsAddressDialogOpen(false)
                }}
              />
            ))}

            {/* Add New Address Button */}
            <button className="w-full py-4 border-2 border-dashed border-gray-700 rounded-xl text-gray-400 hover:border-gray-600 hover:text-gray-300 transition flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" />
              Add new Address
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Content - Dimmed when dialog is open */}
      <div className={`px-4 py-6 space-y-4 ${isAddressDialogOpen ? 'opacity-30' : ''}`}>
        {/* Cart Items - Dimmed */}
        <div className="space-y-3 opacity-40">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-4 p-4 bg-gray-900 rounded-xl">
              <div className="w-20 h-20 rounded-lg bg-gray-800 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.category}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="opacity-40">
          <CartSummary
            itemTotal={itemTotal}
            platformFee={platformFee}
            deliveryFee={deliveryFee}
            discount={discount}
            taxes={taxes}
            showPayButton={false}
          />
        </div>
      </div>
    </div>
  )
}
