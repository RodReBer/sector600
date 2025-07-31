import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Megaphone, Map, ArrowRight, Calendar, Users, TrendingUp } from "lucide-react"

const accionPoliticaAreas = [
  {
    titulo: "Labor Legislativa",
    descripcion: "Seguimiento de nuestras iniciativas en el Parlamento",
    icon: FileText,
    color: "bg-blue-500",
    href: "/accion-politica/legislativa",
    stats: "15 proyectos activos",
    destacado: "Ley de Educación Técnica en comisión",
  },
  {
    titulo: "Comunicados de Prensa",
    descripcion: "Posiciones oficiales del Sector 600",
    icon: Megaphone,
    color: "bg-green-500",
    href: "/accion-politica/comunicados",
    stats: "23 comunicados este año",
    destacado: "Última posición sobre economía",
  },
  {
    titulo: "Mapa Interactivo",
    descripcion: "Referentes del sector en todo el país",
    icon: Map,
    color: "bg-purple-500",
    href: "/accion-politica/mapa",
    stats: "19 departamentos",
    destacado: "Red territorial consolidada",
  },
]

const actividadReciente = [
  {
    tipo: "Legislativa",
    titulo: "Aprobación en comisión del proyecto de educación técnica",
    fecha: "2024-01-15",
    descripcion:
      "El proyecto de ley presentado por Robert Silva fue aprobado por unanimidad en la Comisión de Educación.",
  },
  {
    tipo: "Comunicado",
    titulo: "Posición del Sector 600 sobre la situación económica",
    fecha: "2024-01-12",
    descripcion: "Comunicado oficial con nuestras propuestas para enfrentar los desafíos económicos actuales.",
  },
  {
    tipo: "Territorial",
    titulo: "Nuevo coordinador departamental en Rivera",
    fecha: "2024-01-10",
    descripcion: "Se designó al Dr. Carlos Mendoza como nuevo coordinador del Sector 600 en Rivera.",
  },
]

export default function AccionPoliticaPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Acción Política</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestra Acción Política</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce el trabajo concreto que realizamos en el Parlamento, nuestras posiciones oficiales y la red
            territorial que construimos en todo el país.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">15</div>
              <div className="text-gray-600">Proyectos de Ley</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Megaphone className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">23</div>
              <div className="text-gray-600">Comunicados</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">19</div>
              <div className="text-gray-600">Departamentos</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">85%</div>
              <div className="text-gray-600">Aprobación</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {accionPoliticaAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full ${area.color} flex items-center justify-center mb-4`}>
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-red-600 transition-colors">{area.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{area.descripcion}</p>

                <div className="space-y-2 mb-6">
                  <div className="text-sm font-medium text-gray-700">{area.stats}</div>
                  <div className="text-sm text-gray-500">{area.destacado}</div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-red-600 group-hover:text-white bg-transparent"
                >
                  <Link href={area.href} className="flex items-center justify-center gap-2">
                    Ver más
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actividad Reciente */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Actividad Reciente</h2>
          <div className="space-y-6">
            {actividadReciente.map((actividad, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Badge variant="outline">{actividad.tipo}</Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{actividad.titulo}</h3>
                      <p className="text-gray-600 mb-3">{actividad.descripcion}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(actividad.fecha).toLocaleDateString("es-UY")}</span>
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
            <h3 className="text-2xl font-bold text-red-800 mb-4">Seguí Nuestra Acción Política</h3>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Mantente informado sobre nuestro trabajo en el Parlamento, nuestras posiciones y la actividad territorial
              en todo el país.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/accion-politica/legislativa">
                  Ver Labor Legislativa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                <Link href="/accion-politica/comunicados">Ver Comunicados</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
