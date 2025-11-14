import { Home, Grid3x3, Shirt, ShoppingBag, User } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="fixed bottom-4 left-0 right-0 flex justify-center px-4 z-50">
      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl px-3 py-2.5 shadow-2xl border border-white/20 max-w-full">
        <div className="flex items-center justify-center gap-3 sm:gap-8">
          <Link href="/" className="flex flex-col items-center gap-0.5 transition-transform hover:scale-110 active:scale-95 min-w-0">
            <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
            <span className="text-[9px] sm:text-[10px] text-white whitespace-nowrap">Home</span>
          </Link>

          <Link href="/boards" className="flex flex-col items-center gap-0.5 transition-transform hover:scale-110 active:scale-95 min-w-0">
            <Grid3x3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
            <span className="text-[9px] sm:text-[10px] text-white whitespace-nowrap">Boards</span>
          </Link>

          <button className="flex flex-col items-center gap-0.5 transition-transform hover:scale-110 active:scale-95 min-w-0">
            <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
            <span className="text-[9px] sm:text-[10px] text-white whitespace-nowrap">Wardrobe</span>
          </button>

          <button className="flex flex-col items-center gap-0.5 transition-transform hover:scale-110 active:scale-95 min-w-0 relative">
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
            <span className="text-[9px] sm:text-[10px] text-white whitespace-nowrap">Cart</span>
          </button>

          <button className="flex flex-col items-center gap-0.5 transition-transform hover:scale-110 active:scale-95 min-w-0">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
            <span className="text-[9px] sm:text-[10px] text-white whitespace-nowrap">Account</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
