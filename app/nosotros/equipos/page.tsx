import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Briefcase, Heart, Leaf, Shield, ArrowRight } from "lucide-react"

const equiposTecnicos = [
  {
    nombre: "Equipo de Educación",
    coordinador: "Dra. Patricia Vázquez",
    descripcion: "Desarrollo de políticas educativas innovadoras y propuestas de reforma del sistema educativo",
    icon: BookOpen,
    color: "bg-blue-500",
    miembros: 12,
    areas: ["Educación inicial", "Educación técnica", "Universidad", "Formación docente"],
  },
  {
    nombre: "Equipo de Desarrollo Rural",
    coordinador: "Ing. Agr. Miguel Santos",
    descripcion: "Políticas para el fortalecimiento del sector agropecuario y desarrollo del interior",
    icon: Leaf,
    color: "bg-green-500",
    miembros: 8,
    areas: ["Agricultura", "Ganadería", "Infraestructura rural", "Cooperativismo"],
  },
  {
    nombre: "Equipo Económico",
    coordinador: "Ec. Laura Mendoza",
    descripcion: "Análisis económico y propuestas para el crecimiento sostenible del país",
    icon: Briefcase,
    color: "bg-purple-500",
    miembros: 10,
    areas: ["Política fiscal", "Empleo", "PyMEs", "Comercio exterior"],
  },
  {
    nombre: "Equipo de Salud",
    coordinador: "Dr. Carlos Fernández",
    descripcion: "Propuestas para mejorar el sistema de salud y la calidad de vida de los uruguayos",
    icon: Heart,
    color: "bg-red-500",
    miembros: 9,
    areas: ["Atención primaria", "Salud mental", "Medicina preventiva", "Telemedicina"],
  },
  {
    nombre: "Equipo de Seguridad",
    coordinador: "Com. (R) Ana Rodríguez",
    descripción: "Políticas de seguridad ciudadana y prevención del delito",
    icon: Shield,
    color: "bg-indigo-500",
    miembros: 7,
    areas: ["Prevención", "Policía comunitaria", "Justicia penal", "Rehabilitación"],
  },
  {
    nombre: "Equipo de Participación Ciudadana",
    coordinador: "Lic. Roberto García",
    descripcion: "Fortalecimiento de la democracia participativa y transparencia",
    icon: Users,
    color: "bg-orange-500",
    miembros: 6,
    areas: ["Gobierno abierto", "Participación", "Transparencia", "Descentralización"],
  },
]

export default function EquiposPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Nosotros</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Equipos Técnicos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros equipos técnicos están conformados por profesionales especializados que trabajan en el desarrollo
            de propuestas concretas para transformar el Uruguay.
          </p>
        </div>

        {/* Equipos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {equiposTecnicos.map((equipo, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full ${equipo.color} flex items-center justify-center mb-4`}>
                  <equipo.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-red-600 transition-colors">{equipo.nombre}</CardTitle>
                <div className="text-sm text-gray-600">
                  <strong>Coordinador:</strong> {equipo.coordinador}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{equipo.descripcion}</p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Áreas de trabajo:</div>
                  <div className="flex flex-wrap gap-1">
                    {equipo.areas.map((area, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{equipo.miembros} miembros</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-red-600 group-hover:text-white bg-transparent"
                >
                  Ver más detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Funciones de los Equipos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Funciones de los Equipos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Investigación</h3>
                <p className="text-sm text-gray-600">Análisis profundo de problemáticas específicas</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Propuestas</h3>
                <p className="text-sm text-gray-600">Desarrollo de soluciones concretas y viables</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Asesoramiento</h3>
                <p className="text-sm text-gray-600">Apoyo técnico a representantes y dirigentes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Participación</h3>
                <p className="text-sm text-gray-600">Diálogo con la sociedad civil y expertos</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-red-800 mb-4">¿Querés sumarte a un equipo técnico?</h3>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Si sos profesional en alguna de estas áreas y querés contribuir con tu conocimiento al desarrollo de
              propuestas para el país, te invitamos a sumarte a nuestros equipos técnicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <a href="/participa/sumate">
                  Sumarme a un Equipo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                <a href="/participa/contacto">Más Información</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
