import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react"

const redesSociales = [
  {
    nombre: "Facebook",
    usuario: "@Sector600Colorado",
    seguidores: "15.2K",
    descripcion: "Noticias, eventos y propuestas del Sector 600",
    icon: Facebook,
    color: "bg-blue-600",
    url: "https://facebook.com/sector600",
  },
  {
    nombre: "Twitter/X",
    usuario: "@Sector600UY",
    seguidores: "8.5K",
    descripcion: "Análisis político y posiciones oficiales",
    icon: Twitter,
    color: "bg-black",
    url: "https://twitter.com/sector600uy",
  },
  {
    nombre: "Instagram",
    usuario: "@sector600colorado",
    seguidores: "12.8K",
    descripcion: "Contenido visual de nuestras actividades",
    icon: Instagram,
    color: "bg-pink-600",
    url: "https://instagram.com/sector600colorado",
  },
  {
    nombre: "YouTube",
    usuario: "Sector 600 Oficial",
    seguidores: "3.2K",
    descripcion: "Videos, conferencias y entrevistas",
    icon: Youtube,
    color: "bg-red-600",
    url: "https://youtube.com/sector600oficial",
  },
]

const publicacionesRecientes = [
  {
    red: "Twitter",
    contenido:
      "Presentamos nuestra propuesta de ley para fortalecer la educación técnica en todo el país. #Educación #Uruguay",
    fecha: "Hace 2 horas",
    likes: 45,
    shares: 12,
  },
  {
    red: "Facebook",
    contenido: "Gran convocatoria en el plenario de Montevideo. Seguimos construyendo juntos el Uruguay que queremos.",
    fecha: "Hace 5 horas",
    likes: 128,
    shares: 34,
  },
  {
    red: "Instagram",
    contenido: "Recorrida por el interior: escuchando a los productores rurales de Salto y Paysandú.",
    fecha: "Hace 1 día",
    likes: 89,
    shares: 23,
  },
]

export default function RedesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800">En Redes</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Seguinos en Redes Sociales</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente conectado con todas nuestras actividades, propuestas y el trabajo diario del Sector 600 a través de
            nuestras redes sociales oficiales.
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {redesSociales.map((red, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${red.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <red.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{red.nombre}</CardTitle>
                <p className="text-gray-600">{red.usuario}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">{red.seguidores}</div>
                <p className="text-sm text-gray-600 mb-4">seguidores</p>
                <p className="text-sm text-gray-600 mb-6">{red.descripcion}</p>
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <a
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Seguir
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publicaciones Recientes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Publicaciones Recientes</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {publicacionesRecientes.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Badge variant="outline">{pub.red}</Badge>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 mb-3">{pub.contenido}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{pub.fecha}</span>
                        <div className="flex gap-4">
                          <span>❤️ {pub.likes}</span>
                          <span>🔄 {pub.shares}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-red-800 mb-4">¡Seguinos y Participá!</h3>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Únete a nuestra comunidad digital, comparte nuestro contenido y ayudanos a difundir nuestras propuestas
              para construir un Uruguay mejor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {redesSociales.map((red, index) => (
                <Button key={index} asChild className={`${red.color} hover:opacity-90`}>
                  <a href={red.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <red.icon className="h-4 w-4" />
                    {red.nombre}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
