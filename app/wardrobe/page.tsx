"use client"

import { useState, useRef, useEffect } from "react"
import { Palette, Heart, Share2, Info, X, ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import Navigation from "@/components/Navigation"

export default function WardrobePage() {
  const wardrobeItems = [
    { 
      id: 1, 
      color: "bg-blue-400", 
      name: "Casual Outfit",
      description: "A perfect blend of comfort and style. This casual outfit features a relaxed fit with modern touches. Ideal for everyday wear, weekend outings, or casual meetups. The combination creates a laid-back yet put-together look that's versatile and timeless."
    },
    { 
      id: 2, 
      color: "bg-rose-400", 
      name: "Formal Look",
      description: "Elevate your professional wardrobe with this sophisticated formal ensemble. Designed for business meetings, formal events, and occasions that demand elegance. The refined pieces work together to create a polished, authoritative presence."
    },
    { 
      id: 3, 
      color: "bg-emerald-400", 
      name: "Street Style",
      description: "Embrace urban fashion with this edgy street style collection. Bold, contemporary pieces that make a statement. Perfect for city adventures, concerts, or when you want to stand out. This outfit captures the essence of modern streetwear culture."
    },
    { 
      id: 4, 
      color: "bg-purple-400", 
      name: "Summer Vibes",
      description: "Stay cool and stylish during the warm months with this summer collection. Lightweight fabrics and breezy designs keep you comfortable while looking effortlessly chic. Perfect for beach days, outdoor festivals, or sunny afternoon gatherings."
    },
    { 
      id: 5, 
      color: "bg-amber-400", 
      name: "Winter Warmth",
      description: "Cozy up in style with this winter-ready outfit. Layered pieces provide warmth without sacrificing fashion. Ideal for cold weather adventures, holiday gatherings, or simply staying comfortable during the chilly months. Functional and fashionable."
    },
    { 
      id: 6, 
      color: "bg-cyan-400", 
      name: "Sporty Look",
      description: "Active lifestyle meets fashion in this sporty ensemble. Designed for movement and comfort, these pieces transition seamlessly from workout to casual wear. Perfect for gym sessions, outdoor activities, or when you want a fresh, athletic aesthetic."
    },
  ]

  const [savedItems, setSavedItems] = useState<Set<number>>(new Set())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const swipeRef = useRef<HTMLDivElement>(null)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentIndex < wardrobeItems.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, wardrobeItems.length])

  const handleCustomize = (id: number) => {
    console.log(`Customizing outfit ${id}`)
    // TODO: Navigate to customize page or open modal
    alert(`Customizing outfit: ${wardrobeItems.find(item => item.id === id)?.name}`)
  }

  const handleSave = (id: number) => {
    const newSaved = new Set(savedItems)
    if (newSaved.has(id)) {
      newSaved.delete(id)
    } else {
      newSaved.add(id)
    }
    setSavedItems(newSaved)
  }

  const handleShare = (id: number) => {
    console.log(`Sharing outfit ${id}`)
    if (navigator.share) {
      navigator.share({
        title: `Check out this outfit: ${wardrobeItems.find(item => item.id === id)?.name}`,
        text: `I found this great outfit on Misfits!`,
        url: window.location.href,
      }).catch((error) => {
        console.log("Error sharing", error)
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const handleViewDescription = (id: number) => {
    setSelectedItem(id)
  }

  const handleCloseDescription = () => {
    setSelectedItem(null)
  }

  const handleNext = () => {
    if (currentIndex < wardrobeItems.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const currentItem = selectedItem ? wardrobeItems.find(item => item.id === selectedItem) : null

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto pb-32">
      <Header />
      <SearchBar />

      <main className="flex flex-col items-center pt-4 pb-8 relative">
        <div className="relative w-full max-w-md h-[calc(100vh-250px)] mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all disabled:hover:bg-white/10 ${
              currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === wardrobeItems.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all disabled:hover:bg-white/10 ${
              currentIndex === wardrobeItems.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {wardrobeItems.map((item, index) => {
            const isActive = index === currentIndex
            const offset = (index - currentIndex) * 20
            const scale = 1 - Math.abs(index - currentIndex) * 0.05
            const zIndex = wardrobeItems.length - Math.abs(index - currentIndex)
            const opacity = index <= currentIndex ? 1 : 0.6
            
            return (
              <div
                key={item.id}
                className="absolute inset-0 flex flex-col justify-center transition-all duration-300 ease-out"
                style={{
                  transform: `translateY(${offset}px) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <div className={`${item.color} rounded-3xl aspect-[3/4] w-full mb-4 shadow-2xl`}></div>
                
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleCustomize(item.id)}
                    className="flex-1 bg-white/10 hover:bg-white/20 rounded-xl py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors text-sm"
                  >
                    <Palette className="w-4 h-4" />
                    <span className="hidden sm:inline">Customize</span>
                  </button>
                  
                  <button
                    onClick={() => handleSave(item.id)}
                    className={`flex-1 rounded-xl py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors text-sm ${
                      savedItems.has(item.id)
                        ? "bg-rose-500 hover:bg-rose-600"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${savedItems.has(item.id) ? "fill-current" : ""}`} />
                    <span className="hidden sm:inline">Save</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare(item.id)}
                    className="flex-1 bg-white/10 hover:bg-white/20 rounded-xl py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors text-sm"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>

                <button
                  onClick={() => handleViewDescription(item.id)}
                  className="w-full bg-white/10 hover:bg-white/20 rounded-xl py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors text-sm"
                >
                  <Info className="w-4 h-4" />
                  <span>View Description</span>
                </button>
              </div>
            )
          })}
        </div>
        
        {/* Swipe area for touch events */}
        <div
          ref={swipeRef}
          onWheel={(e) => {
            e.preventDefault()
            if (e.deltaY > 0 && currentIndex < wardrobeItems.length - 1) {
              setCurrentIndex(currentIndex + 1)
            } else if (e.deltaY < 0 && currentIndex > 0) {
              setCurrentIndex(currentIndex - 1)
            }
          }}
          onTouchStart={(e) => {
            const touch = e.touches[0]
            const startY = touch.clientY
            const startIndex = currentIndex
            
            const handleTouchMove = (moveEvent: TouchEvent) => {
              const moveTouch = moveEvent.touches[0]
              const deltaY = moveTouch.clientY - startY
              
              if (Math.abs(deltaY) > 50) {
                if (deltaY > 0 && startIndex < wardrobeItems.length - 1) {
                  setCurrentIndex(startIndex + 1)
                } else if (deltaY < 0 && startIndex > 0) {
                  setCurrentIndex(startIndex - 1)
                }
                document.removeEventListener('touchmove', handleTouchMove)
                document.removeEventListener('touchend', handleTouchEnd)
              }
            }
            
            const handleTouchEnd = () => {
              document.removeEventListener('touchmove', handleTouchMove)
              document.removeEventListener('touchend', handleTouchEnd)
            }
            
            document.addEventListener('touchmove', handleTouchMove)
            document.addEventListener('touchend', handleTouchEnd)
          }}
          className="absolute inset-0 w-full h-full touch-none"
          style={{ pointerEvents: 'auto' }}
        />
      </main>

      {/* Description Overlay */}
      {selectedItem && currentItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleCloseDescription}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Overlay Content */}
          <div 
            className="relative bg-black/90 backdrop-blur-xl rounded-3xl border border-white/20 p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseDescription}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="pr-8">
              <h2 className="text-2xl font-bold mb-4">{currentItem.name}</h2>
              <div className="space-y-3">
                <p className="text-white/80 leading-relaxed text-sm">
                  {currentItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Navigation />
    </div>
  )
}

