import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Briefcase, Heart, Home, Leaf, ArrowRight } from "lucide-react"

const ejesProgramaticos = [
  {
    title: "Educación de Calidad",
    description: "Revolución educativa para preparar a nuestros jóvenes para el futuro",
    icon: BookOpen,
    color: "bg-blue-500",
    proposals: ["Educación técnica avanzada", "Conectividad en todas las escuelas", "Formación docente continua"],
  },
  {
    title: "Desarrollo Rural",
    description: "Fortalecimiento del interior con infraestructura y oportunidades",
    icon: Leaf,
    color: "bg-green-500",
    proposals: ["Caminos rurales", "Internet rural", "Apoyo a productores"],
  },
  {
    title: "Empleo y Economía",
    description: "Generación de trabajo digno y crecimiento económico sostenible",
    icon: Briefcase,
    color: "bg-purple-500",
    proposals: ["Incentivos a PyMEs", "Capacitación laboral", "Emprendedurismo joven"],
  },
  {
    title: "Salud Integral",
    description: "Sistema de salud accesible y de calidad para todos los uruguayos",
    icon: Heart,
    color: "bg-red-500",
    proposals: ["Telemedicina rural", "Prevención y promoción", "Salud mental"],
  },
  {
    title: "Vivienda Digna",
    description: "Acceso a la vivienda para todas las familias uruguayas",
    icon: Home,
    color: "bg-orange-500",
    proposals: ["Créditos accesibles", "Cooperativas de vivienda", "Mejoramiento de barrios"],
  },
  {
    title: "Participación Ciudadana",
    description: "Democracia participativa y transparencia en la gestión",
    icon: Users,
    color: "bg-indigo-500",
    proposals: ["Presupuesto participativo", "Gobierno abierto", "Consultas ciudadanas"],
  },
]

export default function PropuestasPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Propuestas</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestro Programa de Gobierno</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un programa integral para transformar el Uruguay, construido con la participación de todos los sectores de
            la sociedad.
          </p>
        </div>

        {/* Ejes Programáticos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ejes Programáticos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ejesProgramaticos.map((eje, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${eje.color} flex items-center justify-center mb-4`}>
                    <eje.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">{eje.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{eje.description}</p>
                  <div className="space-y-2 mb-6">
                    {eje.proposals.map((proposal, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                        {proposal}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-red-600 group-hover:text-white bg-transparent"
                  >
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Programa Completo</h3>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Descarga nuestro programa de gobierno completo con todas las propuestas detalladas para transformar el
              Uruguay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/propuestas/ejes">
                  Ver Programa Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                <Link href="/participa/plataforma">Proponer Ideas</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
