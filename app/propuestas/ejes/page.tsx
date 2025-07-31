import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Briefcase, Heart, Home, Leaf, Download, ArrowRight } from "lucide-react"

const ejesProgramaticos = [
  {
    titulo: "Educación de Calidad para Todos",
    descripcion: "Transformación integral del sistema educativo uruguayo",
    icon: BookOpen,
    color: "bg-blue-500",
    propuestas: [
      "Revolución de la educación técnica con nuevos centros especializados",
      "Conectividad universal en todas las instituciones educativas",
      "Formación docente continua y actualización permanente",
      "Educación digital desde la primera infancia",
      "Becas de excelencia para estudiantes destacados",
      "Vinculación directa entre educación y sector productivo",
    ],
    presupuesto: "$2.500 millones",
    plazo: "5 años",
  },
  {
    titulo: "Desarrollo Rural Sostenible",
    descripcion: "Fortalecimiento integral del interior del país",
    icon: Leaf,
    color: "bg-green-500",
    propuestas: [
      "Modernización de caminos rurales en todo el territorio",
      "Internet de alta velocidad para todas las zonas rurales",
      "Créditos preferenciales para pequeños y medianos productores",
      "Centros de acopio y procesamiento descentralizados",
      "Programas de diversificación productiva",
      "Fortalecimiento del cooperativismo agrario",
    ],
    presupuesto: "$1.800 millones",
    plazo: "4 años",
  },
  {
    titulo: "Empleo y Crecimiento Económico",
    descripcion: "Generación de trabajo digno y desarrollo económico",
    icon: Briefcase,
    color: "bg-purple-500",
    propuestas: [
      "Incentivos fiscales para PyMEs que generen empleo",
      "Programas de capacitación laboral en nuevas tecnologías",
      "Apoyo integral al emprendedurismo joven",
      "Zonas francas especializadas en el interior",
      "Simplificación de trámites para empresas",
      "Promoción de la economía circular",
    ],
    presupuesto: "$3.200 millones",
    plazo: "5 años",
  },
  {
    titulo: "Salud Integral y Accesible",
    descripcion: "Sistema de salud moderno y equitativo",
    icon: Heart,
    color: "bg-red-500",
    propuestas: [
      "Telemedicina para zonas rurales y alejadas",
      "Fortalecimiento de la atención primaria",
      "Programas integrales de salud mental",
      "Medicina preventiva y promoción de la salud",
      "Modernización de equipamiento hospitalario",
      "Formación especializada de recursos humanos",
    ],
    presupuesto: "$2.100 millones",
    plazo: "4 años",
  },
  {
    titulo: "Vivienda Digna para Todos",
    descripcion: "Acceso universal a la vivienda adecuada",
    icon: Home,
    color: "bg-orange-500",
    propuestas: [
      "Créditos hipotecarios accesibles para jóvenes",
      "Fortalecimiento de cooperativas de vivienda",
      "Programas de mejoramiento de barrios",
      "Vivienda social con estándares de calidad",
      "Regularización de asentamientos",
      "Incentivos para construcción sustentable",
    ],
    presupuesto: "$1.500 millones",
    plazo: "5 años",
  },
  {
    titulo: "Participación Ciudadana y Transparencia",
    descripcion: "Democracia participativa y gobierno abierto",
    icon: Users,
    color: "bg-indigo-500",
    propuestas: [
      "Presupuesto participativo en todos los municipios",
      "Plataforma digital de gobierno abierto",
      "Consultas ciudadanas vinculantes",
      "Fortalecimiento de la descentralización",
      "Transparencia total en la gestión pública",
      "Espacios permanentes de diálogo ciudadano",
    ],
    presupuesto: "$800 millones",
    plazo: "3 años",
  },
]

export default function EjesProgramaticosPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Propuestas</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ejes Programáticos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nuestro programa de gobierno integral para transformar el Uruguay. Propuestas concretas, viables y con
            presupuesto asignado para cada área prioritaria.
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <a href="#" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Descargar Programa Completo (PDF)
            </a>
          </Button>
        </div>

        {/* Ejes Grid */}
        <div className="space-y-12">
          {ejesProgramaticos.map((eje, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Icon and Title */}
                  <div className="lg:col-span-1">
                    <div className={`w-20 h-20 rounded-full ${eje.color} flex items-center justify-center mb-6`}>
                      <eje.icon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{eje.titulo}</h2>
                    <p className="text-gray-600 mb-6">{eje.descripcion}</p>

                    {/* Stats */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Inversión:</span>
                        <span className="font-semibold text-green-600">{eje.presupuesto}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Plazo:</span>
                        <span className="font-semibold text-blue-600">{eje.plazo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Proposals */}
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Propuestas Principales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {eje.propuestas.map((propuesta, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{propuesta}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Button variant="outline" className="bg-transparent">
                        Ver Detalles Completos
                      </Button>
                      <Button variant="ghost" className="text-red-600 hover:text-red-700">
                        Descargar Capítulo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card className="mt-16 bg-red-50 border-red-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Resumen del Programa</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">$12.9B</div>
                <div className="text-red-700">Inversión Total</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">6</div>
                <div className="text-red-700">Ejes Estratégicos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">5 años</div>
                <div className="text-red-700">Plazo de Implementación</div>
              </div>
            </div>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Un programa integral, viable y financiado para transformar el Uruguay en los próximos cinco años.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a href="/participa/sumate">
                Sumate a Este Proyecto
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
