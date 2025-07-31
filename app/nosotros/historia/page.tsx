import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, Lightbulb } from "lucide-react"

const timeline = [
  {
    date: "Diciembre 2023",
    title: "Fundación del Sector 600",
    description:
      "Robert Silva anuncia la creación del Sector 600, convocando a colorados de todo el país a sumarse a un proyecto renovador.",
    icon: Users,
    color: "bg-red-500",
  },
  {
    date: "Enero 2024",
    title: "Primeras Adhesiones",
    description:
      "Cientos de militantes colorados de todo el país se suman al sector, conformando los primeros equipos territoriales.",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    date: "Marzo 2024",
    title: "Lanzamiento del Programa",
    description:
      "Presentación de los primeros ejes programáticos del sector, con foco en educación, desarrollo rural y participación ciudadana.",
    icon: Lightbulb,
    color: "bg-green-500",
  },
  {
    date: "Mayo 2024",
    title: "Recorridas por el Interior",
    description:
      "Inicio de las recorridas sistemáticas por el interior del país, escuchando las necesidades de cada departamento.",
    icon: Calendar,
    color: "bg-purple-500",
  },
  {
    date: "Julio 2024",
    title: "Primera Convención",
    description:
      "Realización de la primera convención nacional del sector, con la participación de más de 500 delegados.",
    icon: Award,
    color: "bg-orange-500",
  },
  {
    date: "Septiembre 2024",
    title: "Propuestas Legislativas",
    description:
      "Presentación de las primeras propuestas de ley del sector en el Parlamento, enfocadas en educación técnica.",
    icon: Lightbulb,
    color: "bg-indigo-500",
  },
  {
    date: "Noviembre 2024",
    title: "Consolidación Territorial",
    description:
      "El sector cuenta con representación en los 19 departamentos del país y más de 1000 militantes activos.",
    icon: Users,
    color: "bg-red-500",
  },
  {
    date: "Enero 2025",
    title: "Hacia el Futuro",
    description: "Continuamos trabajando por un Uruguay mejor, con nuevos desafíos y la misma convicción de siempre.",
    icon: Award,
    color: "bg-green-500",
  },
]

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Nosotros</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestra Historia</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde fines de 2023 hasta hoy, el camino recorrido por el Sector 600 en la construcción de un proyecto
            político renovador para el Uruguay.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

            {timeline.map((event, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 hidden md:block">
                  <div className={`w-4 h-4 rounded-full ${event.color}`}></div>
                </div>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center`}>
                        <event.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {event.date}
                        </Badge>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">El Sector 600 en Números</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
                <div className="text-gray-600">Militantes activos</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">19</div>
                <div className="text-gray-600">Departamentos con presencia</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Propuestas presentadas</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-gray-600">Eventos realizados</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
