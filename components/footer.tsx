import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">600</span>
              </div>
              <span className="font-bold text-xl">Sector 600</span>
            </div>
            <p className="text-gray-400 mb-4">
              Trabajando por un Uruguay más justo, próspero y solidario para todas las familias uruguayas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/propuestas" className="text-gray-400 hover:text-white transition-colors">
                  Propuestas
                </Link>
              </li>
              <li>
                <Link href="/accion-politica" className="text-gray-400 hover:text-white transition-colors">
                  Acción Política
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-gray-400 hover:text-white transition-colors">
                  Agenda
                </Link>
              </li>
            </ul>
          </div>

          {/* Participation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Participación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/participa/sumate" className="text-gray-400 hover:text-white transition-colors">
                  Sumate
                </Link>
              </li>
              <li>
                <Link href="/participa/donaciones" className="text-gray-400 hover:text-white transition-colors">
                  Donaciones
                </Link>
              </li>
              <li>
                <Link href="/participa/plataforma" className="text-gray-400 hover:text-white transition-colors">
                  Plataforma Ciudadana
                </Link>
              </li>
              <li>
                <Link href="/participa/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-400">info@sector600.uy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-400">+598 2XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-gray-400">Montevideo, Uruguay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sector 600 - Partido Colorado. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
