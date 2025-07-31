"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Heart, ChevronDown } from "lucide-react"

const navigation = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Nosotros",
    href: "/nosotros/quienes-somos",
    submenu: [
      { name: "¿Quiénes somos?", href: "/nosotros/quienes-somos" },
      { name: "Nuestra historia", href: "/nosotros/historia" },
      { name: "Representantes", href: "/nosotros/representantes" },
      { name: "Equipos técnicos", href: "/nosotros/equipos" },
    ],
  },
  {
    name: "Propuestas",
    href: "/propuestas",
    submenu: [
      { name: "Ejes programáticos", href: "/propuestas/ejes" },
      { name: "Propuestas destacadas", href: "/propuestas/destacadas" },
    ],
  },
  {
    name: "Participá",
    href: "/participa/sumate",
    submenu: [
      { name: "Sumate al sector", href: "/participa/sumate" },
      { name: "Contactanos", href: "/participa/contacto" },
      { name: "Doná", href: "/participa/donaciones" },
      { name: "Plataforma ciudadana", href: "/participa/plataforma" },
    ],
  },
  {
    name: "Acción Política",
    href: "/accion-politica",
    submenu: [
      { name: "Labor legislativa", href: "/accion-politica/legislativa" },
      { name: "Comunicados", href: "/accion-politica/comunicados" },
      { name: "Mapa interactivo", href: "/accion-politica/mapa" },
    ],
  },
  {
    name: "Crece en Medios",
    href: "/medios",
    submenu: [
      { name: "El Porvenir", href: "/medios/el-porvenir" },
      { name: "Notas en medios", href: "/medios/notas" },
    ],
  },
  {
    name: "Agenda",
    href: "/agenda",
  },
  {
    name: "En redes",
    href: "/redes",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Simplificado y responsive */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">600</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg sm:text-xl text-red-600">Sector 600</div>
              <div className="text-xs text-gray-600 -mt-1 hidden md:block">Partido Colorado</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Donate Button */}
          <Button asChild className="hidden lg:flex bg-red-600 hover:bg-red-700 text-sm px-4">
            <Link href="/participa/donaciones" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Doná
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full overflow-y-auto">
                <div className="p-6 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">600</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-red-600">Sector 600</div>
                      <div className="text-sm text-gray-600">Partido Colorado</div>
                    </div>
                  </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block py-3 text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                        onClick={() => !item.submenu && setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block py-2 text-base text-gray-600 hover:text-red-600 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="p-6 border-t">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                    <Link href="/participa/donaciones" onClick={() => setIsOpen(false)}>
                      <Heart className="h-4 w-4 mr-2" />
                      Doná Ahora
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
