"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Plus, Scale, Calculator, Home } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/register", label: "Registro", icon: Plus },
    { href: "/compare", label: "Comparação", icon: Scale },
    { href: "/equivalence", label: "Equivalência", icon: Calculator },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="flex justify-around py-2 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-3 px-3 text-xs rounded-lg transition-colors min-w-0 flex-1 ${
                isActive ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="truncate w-full text-center leading-tight">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
