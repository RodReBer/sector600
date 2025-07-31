import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, FileText, MessageSquare, Calendar, ArrowRight } from "lucide-react"

const quickLinks = [
  {
    title: "Sumate",
    description: "Únete a nuestro movimiento político",
    href: "/participa/sumate",
    icon: Users,
    color: "from-red-500 to-red-600",
    hoverColor: "hover:from-red-600 hover:to-red-700",
  },
  {
    title: "Propuestas",
    description: "Conoce nuestro programa de gobierno",
    href: "/propuestas",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700",
  },
  {
    title: "Participación Ciudadana",
    description: "Tu voz importa, comparte tus ideas",
    href: "/participa/plataforma",
    icon: MessageSquare,
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700",
  },
  {
    title: "El Porvenir",
    description: "Nuestro semanario con análisis político",
    href: "/medios/el-porvenir",
    icon: Calendar,
    color: "from-purple-500 to-purple-600",
    hoverColor: "hover:from-purple-600 hover:to-purple-700",
  },
]

export function QuickAccess() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
            Acceso Rápido
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Encuentra lo que buscas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Accede rápidamente a las secciones más importantes y participa activamente en la construcción del Uruguay
            que queremos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {quickLinks.map((link, index) => (
            <Card
              key={link.title}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 sm:p-8 text-center relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-full transform rotate-45" />
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${link.color} ${link.hoverColor} text-white mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                >
                  <link.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">{link.description}</p>

                {/* Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 bg-transparent transition-all duration-300 py-3 text-base font-medium"
                >
                  <Link href={link.href} className="flex items-center justify-center gap-2">
                    Acceder
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-gray-600 mb-6 text-lg">¿No encuentras lo que buscas?</p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 px-8 py-3"
          >
            <Link href="/participa/contacto">Contactanos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
