'use client'

import { useState } from 'react'
import { ChevronLeft, Search, ShoppingBag, Star } from 'lucide-react'

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('navy')

  const sizes = ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
  const colors = [
    { name: 'red', hex: '#8B3A3A' },
    { name: 'brown', hex: '#8B4513' },
    { name: 'green', hex: '#2D5016' },
    { name: 'navy', hex: '#1E3A8A' },
  ]

  const relatedProducts = [
    { id: 1, name: 'Rural Cow', price: 5000, originalPrice: 10000, rating: 4.4, reviews: '12k+' },
    { id: 2, name: 'Rural Cow', price: 5000, originalPrice: 10000, rating: 4.4, reviews: '12k+' },
    { id: 3, name: 'Rural Cow', price: 5000, originalPrice: 10000, rating: 4.4, reviews: '12k+' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 hover:bg-gray-800 rounded-full transition">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex-1 mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button className="p-2 hover:bg-gray-800 rounded-full transition relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Product Image */}
      <div className="relative w-full aspect-[4/5] bg-gray-900">
        <img
          src="/api/placeholder/800/1000"
          alt="Rural Cow Navy Cardigan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="px-4 py-6 space-y-6">
        {/* Title and Price */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-2xl font-semibold">Rural Cow</h1>
            <div className="text-right">
              <p className="text-xs text-gray-400 line-through">₹10000 (50% off)</p>
              <p className="text-2xl font-bold">₹5000</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
            <span className="font-medium">4.4</span>
            <span className="text-gray-400">(12k+)</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          This chic navy knit cardigan features a stylish zip-front design and unique braided details, 
          perfect for a touch of elegance. It's layered effortlessly over a light blue collared shirt, 
          making it a versatile addition to any ward...
        </p>

        {/* Size Selector */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-medium">Size: {selectedSize}</h3>
            <button className="text-sm text-blue-500 hover:underline">Size Guide</button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  selectedSize === size
                    ? 'bg-transparent border-2 border-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div>
          <h3 className="text-base font-medium mb-3">
            Color: {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
          </h3>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-14 h-14 rounded-lg transition ${
                  selectedColor === color.name ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-black' : ''
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>
          <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2"/>
              <path d="M3 10h18" strokeWidth="2"/>
            </svg>
            Buy Now
          </button>
        </div>

        {/* Related Products */}
        <div className="pt-6">
          <h2 className="text-xl font-semibold mb-4">More like this</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {relatedProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-44">
                <div className="aspect-square bg-pink-300 rounded-2xl mb-3"></div>
                <div className="space-y-1">
                  <h3 className="font-medium text-sm">{product.name}</h3>
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 fill-blue-500 text-blue-500" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.originalPrice} (50% off)
                    </span>
                  </div>
                  <p className="font-bold">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}