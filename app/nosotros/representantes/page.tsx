import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

const representantes = {
  nacional: [
    {
      nombre: "Robert Silva",
      cargo: "Líder del Sector 600",
      descripcion: "Ex Ministro de Educación y Cultura, referente nacional del Partido Colorado",
      imagen: "/placeholder.svg?height=300&width=300",
      email: "robert.silva@sector600.uy",
      telefono: "+598 2XXX XXXX",
    },
  ],
  departamental: [
    {
      nombre: "María González",
      cargo: "Coordinadora Montevideo",
      departamento: "Montevideo",
      descripcion: "Abogada especializada en derecho laboral, militante histórica del Partido Colorado",
      imagen: "/placeholder.svg?height=200&width=200",
      email: "maria.gonzalez@sector600.uy",
    },
    {
      nombre: "Carlos Rodríguez",
      cargo: "Coordinador Canelones",
      departamento: "Canelones",
      descripcion: "Ingeniero agrónomo, especialista en desarrollo rural",
      imagen: "/placeholder.svg?height=200&width=200",
      email: "carlos.rodriguez@sector600.uy",
    },
    {
      nombre: "Ana Martínez",
      cargo: "Coordinadora Interior",
      departamento: "Salto",
      descripcion: "Docente y dirigente social, referente en temas educativos",
      imagen: "/placeholder.svg?height=200&width=200",
      email: "ana.martinez@sector600.uy",
    },
  ],
  municipal: [
    {
      nombre: "Pedro López",
      cargo: "Concejal",
      municipio: "Montevideo - Zona 1",
      descripcion: "Arquitecto, especialista en planificación urbana",
      imagen: "/placeholder.svg?height=150&width=150",
    },
    {
      nombre: "Laura Fernández",
      cargo: "Concejal",
      municipio: "Canelones - Las Piedras",
      descripcion: "Contadora, experta en gestión municipal",
      imagen: "/placeholder.svg?height=150&width=150",
    },
  ],
}

export default function RepresentantesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Nosotros</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestros Representantes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los dirigentes del Sector 600 que trabajan en los diferentes niveles de gobierno para representar
            nuestras ideas y propuestas.
          </p>
        </div>

        {/* Representantes Nacionales */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nivel Nacional</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {representantes.nacional.map((rep, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={rep.imagen || "/placeholder.svg"}
                      alt={rep.nombre}
                      className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{rep.nombre}</h3>
                      <Badge className="mb-4 bg-red-100 text-red-800">{rep.cargo}</Badge>
                      <p className="text-gray-600 mb-6">{rep.descripcion}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                          <Mail className="h-4 w-4 text-red-500" />
                          <span className="text-sm">{rep.email}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                          <Phone className="h-4 w-4 text-red-500" />
                          <span className="text-sm">{rep.telefono}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Representantes Departamentales */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nivel Departamental</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {representantes.departamental.map((rep, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src={rep.imagen || "/placeholder.svg"}
                    alt={rep.nombre}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{rep.nombre}</h3>
                  <Badge className="mb-2 bg-blue-100 text-blue-800">{rep.cargo}</Badge>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{rep.departamento}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{rep.descripcion}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-red-500" />
                    <span className="text-xs">{rep.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Representantes Municipales */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nivel Municipal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {representantes.municipal.map((rep, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src={rep.imagen || "/placeholder.svg"}
                    alt={rep.nombre}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{rep.nombre}</h3>
                  <Badge className="mb-2 bg-green-100 text-green-800">{rep.cargo}</Badge>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-xs text-gray-600">{rep.municipio}</span>
                  </div>
                  <p className="text-gray-600 text-xs">{rep.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-red-800 mb-4">¿Querés ser representante?</h3>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Si tenés vocación de servicio público y querés representar al Sector 600 en tu departamento o municipio,
              contactanos para conocer las oportunidades disponibles.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a href="/participa/contacto">
                Contactar
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
