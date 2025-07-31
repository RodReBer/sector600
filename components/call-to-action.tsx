import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, MessageSquare } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Juntos construimos el Uruguay que queremos</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Tu participación es fundamental. Sumate a nuestro movimiento, comparte tus ideas y ayudanos a construir un
            futuro mejor para todos los uruguayos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sumate</h3>
              <p className="text-red-100">Únete a nuestro equipo de trabajo</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Participá</h3>
              <p className="text-red-100">Comparte tus ideas y propuestas</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Apoyá</h3>
              <p className="text-red-100">Contribuí con nuestro proyecto</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8"
            >
              <Link href="/participa/sumate">Sumate Ahora</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 bg-transparent"
            >
              <Link href="/participa/donaciones">Hacer una Donación</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
